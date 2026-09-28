import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const contentPath = resolve(root, 'src/content/portfolio.json')
const content = JSON.parse(readFileSync(contentPath, 'utf8'))
const errors = []

const projects = Array.isArray(content.projects) ? content.projects : []
const certificates = Array.isArray(content.certificates) ? content.certificates : []
const seenSlugs = new Set()

for (const [index, project] of projects.entries()) {
  const label = `projects[${index}]`
  if (!project.title?.trim()) errors.push(`${label}.title is required`)
  if (!project.description?.trim()) errors.push(`${label}.description is required`)
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug ?? '')) {
    errors.push(`${label}.slug must use lowercase letters, numbers, and single hyphens`)
  }
  if (seenSlugs.has(project.slug)) errors.push(`${label}.slug duplicates "${project.slug}"`)
  seenSlugs.add(project.slug)
}

const localAssets = [
  ['site.profileImage', content.site?.profileImage],
  ...projects.map((project, index) => [`projects[${index}].image`, project.image]),
  ...certificates.map((certificate, index) => [`certificates[${index}].image`, certificate.image]),
]

for (const [label, assetPath] of localAssets) {
  if (!assetPath || /^https?:\/\//.test(assetPath)) continue
  const relativePath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath
  if (!existsSync(resolve(root, 'public', relativePath))) {
    errors.push(`${label} points to missing public asset "${assetPath}"`)
  }
}

if (errors.length) {
  console.error('Portfolio content validation failed:')
  errors.forEach((error) => console.error(`- ${error}`))
  process.exit(1)
}

console.log(`Portfolio content valid: ${projects.length} projects, ${certificates.length} certificates.`)
