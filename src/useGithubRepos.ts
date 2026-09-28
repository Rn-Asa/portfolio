import { useEffect, useState } from 'react'
import { content } from './content'
import type { GithubRepo } from './types'

export function useGithubRepos(limit = 6) {
  const { github } = content
  const [repos, setRepos] = useState<GithubRepo[]>(github.fallbackRepos.slice(0, limit))
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    fetch(`https://api.github.com/users/${github.username}/repos?sort=updated&per_page=${limit}&type=owner`, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error('GitHub request failed')
        return response.json() as Promise<GithubRepo[]>
      })
      .then((data) => Array.isArray(data) && data.length && setRepos(data))
      .catch(() => undefined)
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [github.username, limit])

  return { repos, loading }
}
