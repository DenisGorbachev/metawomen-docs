import { fileURLToPath } from 'url'

export const rootFilename = fileURLToPath(import.meta.url)

export const rootDirname = fileURLToPath(new URL('.', import.meta.url))
