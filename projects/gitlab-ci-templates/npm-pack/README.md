# `npm-pack`

The [`npm-pack`](https://docs.npmjs.com/cli/v7/commands/npm-pack) job creates a package archive to test a development version. The archive is stored in the job artifact under the directory `$WORKING_DIRECTORY/npm-pack-packages`.

<details>
  <summary>How to install the archive in your project</summary>

The archive name is generated from the package name and version: `<name>-<version>.tgz`.
Download the archive from the job artifact and move it to your project directory, next to your `package.json`.
Then install the package from the local archive:

```bash
npm install <archive_name> --save
```

If you want to make the test version available in a staging environment, you can commit the archive so that the CI can install it as well.

⚠ The archive must never be used in production.

</details>

```yaml
npm-pack:
  extends: .npm-pack
  needs: [npm-build]
```

## Trigger rules

- The job does not run on the main branch
- The job is manual
