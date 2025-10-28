import path from 'node:path'
import fs from 'node:fs'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ChunksWebpackPlugin from 'chunks-webpack-plugin'

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

/**
 * Generator for Webpack configuration according to the target browsers (modern | legacy)
 *
 * @param {String} type Browsers type (modern|legacy)
 * @param {Boolean} isProduction Webpack mode (development|production)
 * @param {Object} presets Babel presets according to the browsers type (modern|legacy)
 *
 * @returns {Object} Object with the Webpack base configuration
 */
const generateWebpackConfig = ({ type, isProduction, presets }) => {
	return {
		name: type,
		watch: !isProduction,
		devtool: !isProduction ? 'source-map' : false,
		entry: {
			home: './src/home.js',
			news: './src/news.js'
		},
		output: {
			path: resolveApp(`./dist/assets/${type}`),
			filename: '[name].js',
			sourceMapFilename: '[file].map'
		},
		stats: {
			modules: false,
			entrypoints: false,
			excludeAssets: /.map$/,
			assetsSort: '!size'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					include: [resolveApp('./src')],
					loader: 'babel-loader',
					options: {
						presets
					}
				},
				{
					test: /\.css$/,
					include: [resolveApp('./src')],
					use: [MiniCssExtractPlugin.loader, 'css-loader']
				}
			]
		},
		resolve: {
			extensions: ['.js', '.css']
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[name].css'
			}),
			new ChunksWebpackPlugin({
				filename: 'templates/[name]-[type].html.twig',
				templateStyle: (name) => `<link rel="stylesheet" href="https://cdn.domain.com${name}" />`,
				templateScript: (name, entryName) => {
					if (type === 'modern') {
						return `<script type="module" src="${name}"></script>`
					}
					return `<script nomodule defer src="${name}"></script>`
				}
			})
		],
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		}
	}
}

/**
 * Export Webpack configuration for modern and legacy browsers
 *
 * @param {Object} env Node.js environment variables
 * @param {Object} argv Options passed to Webpack (argv)
 *
 * @returns {Array} Array of Webpack configurations
 */
export default (env, argv) => {
	const isProduction = argv.mode === 'production'

	const configModern = generateWebpackConfig({
		type: 'modern',
		isProduction,
		presets: [
			[
				'@babel/preset-env',
				{
					targets: {
						esmodules: true
					}
				}
			]
		]
	})

	const configLegacy = generateWebpackConfig({
		type: 'legacy',
		isProduction,
		presets: [
			[
				'@babel/preset-env',
				{
					targets: {
						esmodules: false
					},
					useBuiltIns: 'usage',
					corejs: 3
				}
			]
		]
	})

	return [configModern, configLegacy]
}
