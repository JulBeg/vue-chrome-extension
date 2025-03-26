import archiver from 'archiver'
import fs from 'fs'
import { promises as fsPromises } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import ext_package from './package.json' with { type: 'json' }

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const INPUT_DIR = path.join(__dirname, './build')
const DEST_DIR = path.join(__dirname, './package')

const ensureDirectoryExists = async (dir) => {
  try {
    await fsPromises.access(dir)
  } catch {
    await fsPromises.mkdir(dir, { recursive: true })
  }
}

const buildZip = (src, dist, filename) => {
  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(path.join(dist, filename))
    const archive = archiver('zip', { zlib: { level: 9 } })

    output.on('close', resolve)
    archive.on('error', reject)

    archive.pipe(output)
    archive.directory(src, false)
    archive.finalize()
  })
}

const main = async () => {
  try {
    const { name, version } = ext_package
    const filename = `${name}-v${version}.zip`

    await ensureDirectoryExists(DEST_DIR)
    console.info(`Building ${filename}...`)
    await buildZip(INPUT_DIR, DEST_DIR, filename)
    console.info('Build complete!')
  } catch (error) {
    console.error('Build failed:', error)
    process.exit(1)
  }
}

main()
