# Elibe Chidinma Esther Portfolio

A Vite, React, and TypeScript port of the original Django portfolio.

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
```

## Updating Portfolio Content

All editable portfolio content lives in one file:

```text
src/content/portfolio.json
```

This includes profile details, page copy, social and contact links, skills, tools, projects, certificates, GitHub settings, and fallback repositories. The React components only render this data.

To add a project, append an object to the `projects` array:

```json
{
  "slug": "unique-project-url",
  "title": "Project title",
  "description": "A clear project description.",
  "tech": ["Python", "Django"],
  "githubUrl": "https://github.com/username/repository",
  "liveUrl": "https://project.example.com",
  "image": "/projects/project-image.jpg",
  "featured": true
}
```

- `slug` must be unique and becomes `/projects/slug/`.
- `featured` controls whether the project appears on the home page.
- `image`, `liveUrl`, and `githubUrl` can be empty strings when unavailable.
- Add local images under `public/`, then reference them with a root path such as `/projects/project-image.jpg`.

Certificates use the same pattern in the `certificates` array. Add the image under `public/certificates/`, then add its title, type, issuer, and image path to the JSON.

Run `npm run build` before committing. The build validates project slugs, duplicate projects, local image paths, and the typed JSON structure. Once the commit reaches the connected repository, Vercel automatically rebuilds and publishes the updated content.

`vercel.json` provides the single-page application fallback required for direct visits to About, Contact, and project-detail URLs. In Vercel, use the Vite framework preset with `npm run build` and `dist` as the output directory; these are normally detected automatically.

The app fetches recent public repositories from GitHub in the browser and falls back to `github.fallbackRepos` from the JSON if the request is unavailable. The site does not require Django or PostgreSQL at runtime.

The legacy Django source remains in `home/` and `portfolio/` as a reference for the migration.
