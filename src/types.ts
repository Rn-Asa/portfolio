export type StyledLine = {
  text: string
  accent?: boolean
}

export type Project = {
  slug: string
  title: string
  description: string
  tech: string[]
  githubUrl: string
  liveUrl: string
  image: string
  featured: boolean
}

export type Certificate = {
  title: string
  type: string
  issuer: string
  image: string
}

export type GithubRepo = {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
}

export type PortfolioContent = {
  site: {
    name: string
    firstName: string
    initials: string
    role: string
    location: string
    locationShort: string
    profileImage: string
    availability: string
    workingArea: string
    footerBlurb: string
    seo: {
      defaultTitle: string
      description: string
      socialTitle: string
      socialDescription: string
      socialImage: string
    }
  }
  navigation: Array<{ label: string; href: string; emphasis?: boolean }>
  socialLinks: Array<{ label: string; href: string }>
  home: {
    pageTitle: string
    heroTitle: StyledLine[]
    heroLead: string
    primaryAction: string
    secondaryAction: string
    topNote: string[]
    signals: string[]
    intro: { label: string[]; title: StyledLine[]; body: string; action: string }
    work: { kicker: string; title: StyledLine[]; action: string; featuredLimit: number }
    repositories: { kicker: string; title: StyledLine[]; action: string }
    cta: { kicker: string; title: StyledLine[]; action: string }
  }
  about: {
    pageTitle: string
    hero: { eyebrow: string; title: string; intro: string }
    facts: Array<{ label: string; value: string }>
    story: { lead: string; paragraphs: string[]; quote: string }
    capabilities: {
      kicker: string
      title: string
      note: string
      groups: Array<{ label: string; items: string[] }>
    }
    credentials: { kicker: string; title: string; note: string }
    cta: { kicker: string; title: string; action: string }
  }
  projectsPage: {
    pageTitle: string
    hero: { eyebrow: string; title: string; intro: string }
    portfolioKicker: string
    portfolioTitle: string
    portfolioNote: string
    repositoryKicker: string
    repositoryTitle: string
    repositoryAction: string
    caseStudyLabel: string
    viewCaseStudyLabel: string
    allProjectsLabel: string
    overviewLabel: string
    sourceLabel: string
    liveLabel: string
  }
  contact: {
    pageTitle: string
    hero: { eyebrow: string; title: string; intro: string }
    kicker: string
    title: string
    body: string
    email: string
    responseNote: string
    methods: Array<{ label: string; value: string; href: string; icon: string }>
  }
  projects: Project[]
  certificates: Certificate[]
  github: {
    username: string
    profileUrl: string
    homeLimit: number
    projectsLimit: number
    emptyDescription: string
    fallbackRepos: GithubRepo[]
  }
  notFound: { pageTitle: string; eyebrow: string; title: string; body: string; action: string }
}
