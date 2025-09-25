declare global {
	interface Window {
		dailymotion: {
			createPlayer: (
				selectorId: string,
				options: {
					player: string
					video: string
				}
			) => Promise<{
				on: (event: string, callback: () => void) => void
				play: () => void
			}>
			events: {
				PLAYER_START: string
				PLAYER_END: string
			}
		}
	}
}

// Export to ensure the file is treated as a module
export {}
