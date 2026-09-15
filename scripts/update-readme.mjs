import { readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const packageJson = require('../projects/ng-prevent-cut-copy-paste/package.json')

const readmePath = './README.md'
const newVersion = packageJson.version
const readmeContent = readFileSync(readmePath, 'utf8')

const updatedReadmeContent = readmeContent.replace(
  /(\| ng-prevent-cut-copy-paste \| Angular\s+\|\n\| -+ \| -+ \|\n)/,
  `$1| ${newVersion} | >=20.0.0 |\n`,
)

writeFileSync(readmePath, updatedReadmeContent)
