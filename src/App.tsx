import { Fragment, useEffect, useState, type ReactNode } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  AtSign,
  Camera as Instagram,
  FolderGit2,
  GitBranch as Github,
  Menu,
  Phone,
  Star,
  X,
} from 'lucide-react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { content, projects } from './content'
import type { GithubRepo, Project, StyledLine } from './types'
import { useGithubRepos } from './useGithubRepos'

function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
}

function useSiteMetadata() {
  useEffect(() => {
    const { seo } = content.site
    const metadata: Array<[string, string]> = [
      ['meta[name="description"]', seo.description],
      ['meta[property="og:title"]', seo.socialTitle],
      ['meta[property="og:description"]', seo.socialDescription],
      ['meta[property="og:image"]', seo.socialImage],
    ]

    metadata.forEach(([selector, value]) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', value)
    })
  }, [])
}

function ExternalLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>
}

function FormattedTitle({ lines }: { lines: StyledLine[] }) {
  return <>{lines.map((line, index) => <Fragment key={`${line.text}-${index}`}>{index > 0 && <br />}{line.accent ? <em>{line.text}</em> : line.text}</Fragment>)}</>
}

function MultilineText({ lines }: { lines: string[] }) {
  return <>{lines.map((line, index) => <Fragment key={`${line}-${index}`}>{index > 0 && <br />}{line}</Fragment>)}</>
}

function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { site, navigation, socialLinks } = content
  useSiteMetadata()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label={`${site.name}, home`}>
            <span className="brand-mark" aria-hidden="true">{site.initials}</span>
            <span className="brand-copy"><strong>{site.name}</strong><small>{site.role}</small></span>
          </Link>
          <button className="nav-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
          <nav className={`nav-menu ${open ? 'open' : ''}`} aria-label="Main navigation">
            <ul className="nav-links">
              {navigation.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) => [item.emphasis ? 'nav-contact' : '', isActive ? 'active' : ''].filter(Boolean).join(' ')}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-intro"><span className="brand-mark footer-mark" aria-hidden="true">{site.initials}</span><p>{site.footerBlurb}</p></div>
          <nav className="footer-links" aria-label="Social links">
            {socialLinks.map((link) => link.href.startsWith('http')
              ? <ExternalLink href={link.href} key={link.label}>{link.label}</ExternalLink>
              : <a href={link.href} key={link.label}>{link.label}</a>)}
          </nav>
        </div>
        <div className="container footer-bottom"><p>&copy; {new Date().getFullYear()} {site.name}</p><p>{site.location}</p></div>
      </footer>
    </>
  )
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="repo-actions">
      {project.githubUrl && <ExternalLink href={project.githubUrl}><Github /> Repository</ExternalLink>}
      {project.liveUrl && <ExternalLink href={project.liveUrl}><ArrowUpRight /> Live demo</ExternalLink>}
    </div>
  )
}

function Home() {
  const { home, site, github } = content
  const { repos, loading } = useGithubRepos(github.homeLimit)
  const featuredProjects = projects.filter((project) => project.featured).slice(0, home.work.featuredLimit)
  usePageTitle(home.pageTitle)

  return (
    <>
      <section className="neo-hero">
        <div className="container neo-hero-grid">
          <div className="neo-copy">
            <p className="eyebrow"><span className="availability-dot" /> {site.availability}</p>
            <h1><FormattedTitle lines={home.heroTitle} /></h1>
            <p className="neo-lead">{home.heroLead}</p>
            <div className="hero-actions"><Link to="/projects/" className="btn btn-primary">{home.primaryAction} <ArrowUpRight /></Link><Link to="/contact/" className="btn btn-secondary">{home.secondaryAction}</Link></div>
          </div>
          <div className="neo-visual" aria-label={`Portrait of ${site.name}`}>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="neo-photo"><img src={site.profileImage} alt={site.name} /></div>
            <div className="floating-note note-top"><span>01</span><strong><MultilineText lines={home.topNote} /></strong></div>
            <div className="floating-note note-bottom"><span className="availability-dot" /><strong>{site.locationShort}</strong><small>{site.workingArea}</small></div>
          </div>
        </div>
        <div className="container signal-row">{home.signals.map((signal) => <span key={signal}>{signal}</span>)}</div>
      </section>

      <section className="neo-intro"><div className="container intro-bento"><div className="bento-label"><MultilineText lines={home.intro.label} /></div><div><h2><FormattedTitle lines={home.intro.title} /></h2><p>{home.intro.body}</p><Link to="/about/" className="text-link">{home.intro.action} <ArrowUpRight /></Link></div></div></section>

      <section className="neo-work"><div className="container">
        <SectionHead kicker={home.work.kicker} title={<FormattedTitle lines={home.work.title} />} action={<Link to="/projects/" className="text-link">{home.work.action} <ArrowUpRight /></Link>} />
        <div className="neo-project-grid">{featuredProjects.map((project, index) => <FeaturedProject key={project.slug} project={project} index={index} />)}</div>
      </div></section>

      <section className="neo-repos"><div className="container">
        <SectionHead kicker={home.repositories.kicker} title={<FormattedTitle lines={home.repositories.title} />} action={<ExternalLink href={github.profileUrl} className="btn btn-secondary">{home.repositories.action} <ArrowUpRight /></ExternalLink>} />
        <div className="neo-repo-list" aria-busy={loading}>{repos.map((repo, index) => <RepoRow key={repo.name} repo={repo} index={index} />)}</div>
      </div></section>

      <section className="neo-cta"><div className="container"><p className="section-kicker">{home.cta.kicker}</p><h2><FormattedTitle lines={home.cta.title} /></h2><Link to="/contact/" className="btn btn-light">{home.cta.action} <ArrowUpRight /></Link></div></section>
    </>
  )
}

function SectionHead({ kicker, title, action }: { kicker: string; title: ReactNode; action: ReactNode }) {
  return <div className="neo-section-head"><div><p className="section-kicker">{kicker}</p><h2>{title}</h2></div>{action}</div>
}

function ProjectMedia({ project, index, featured = false }: { project: Project; index: number; featured?: boolean }) {
  const className = featured ? 'neo-project-media' : `project-media ${project.image ? '' : 'project-placeholder'}`
  return <Link to={`/projects/${project.slug}/`} className={className} aria-label={`View ${project.title}`}>{project.image ? <img src={project.image} alt={project.title} loading="lazy" /> : <span>{String(index + 1).padStart(2, '0')}</span>}</Link>
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const { caseStudyLabel } = content.projectsPage
  return <article className="neo-project"><ProjectMedia project={project} index={index} featured /><div className="neo-project-copy"><span className="project-number">{String(index + 1).padStart(2, '0')} / {caseStudyLabel}</span><h3><Link to={`/projects/${project.slug}/`}>{project.title}</Link></h3><p>{project.description}</p><TechTags items={project.tech} /><ProjectActions project={project} /></div></article>
}

function RepoRow({ repo, index }: { repo: GithubRepo; index: number }) {
  return <ExternalLink href={repo.html_url} className="neo-repo"><span className="repo-index">{String(index + 1).padStart(2, '0')}</span><span className="repo-name">{repo.name}</span><span className="repo-desc">{repo.description || content.github.emptyDescription}</span><span className="repo-language">{repo.language || 'Code'}</span><ArrowUpRight /></ExternalLink>
}

function PageHero({ eyebrow, title, intro, className = '' }: { eyebrow: string; title: string; intro: string; className?: string }) {
  return <header className={`page-hero ${className}`}><div className="container page-hero-grid"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div><p className="page-intro">{intro}</p></div></header>
}

function About() {
  const { about, certificates, site } = content
  usePageTitle(about.pageTitle)

  return <>
    <PageHero {...about.hero} />
    <section className="content-band about-story"><div className="container story-grid"><aside className="story-aside"><img src={site.profileImage} alt={site.name} className="about-portrait" /><dl className="profile-facts">{about.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl></aside><div className="story-copy"><p className="lead-paragraph">{about.story.lead}</p>{about.story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<blockquote>{about.story.quote}</blockquote></div></div></section>
    <section className="content-band toolkit-band"><div className="container"><Heading kicker={about.capabilities.kicker} title={about.capabilities.title} note={about.capabilities.note} /><div className="skills-list">{about.capabilities.groups.map((group, index) => <section className="skill-row" key={group.label}><div className="skill-label"><span>{String(index + 1).padStart(2, '0')}</span><h3>{group.label}</h3></div><TechTags items={group.items} large /></section>)}</div></div></section>
    <section className="content-band certificates-band"><div className="container"><Heading kicker={about.credentials.kicker} title={about.credentials.title} note={about.credentials.note} /><div className="certificate-grid">{certificates.map((certificate, index) => <article className="certificate-card" key={certificate.title}><a href={certificate.image} target="_blank" rel="noopener noreferrer" className="certificate-image" aria-label={`Open ${certificate.title} certificate full-size`}><img src={certificate.image} alt={`${certificate.type} for ${certificate.title}`} loading="lazy" /><span><ArrowUpRight /></span></a><div className="certificate-copy"><p>{String(index + 1).padStart(2, '0')} / {certificate.type}</p><h3>{certificate.title}</h3><span>{certificate.issuer}</span></div></article>)}</div></div></section>
    <section className="cta-band"><div className="container cta-inner"><div><p className="section-kicker">{about.cta.kicker}</p><h2>{about.cta.title}</h2></div><Link to="/contact/" className="btn btn-light">{about.cta.action} <ArrowUpRight /></Link></div></section>
  </>
}

function TechTags({ items, large = false }: { items: string[]; large?: boolean }) {
  return <div className={`tech-tags ${large ? 'large-tags' : ''}`}>{items.map((item) => <span key={item}>{item}</span>)}</div>
}

function Projects() {
  const { projectsPage, github } = content
  const { repos, loading } = useGithubRepos(github.projectsLimit)
  usePageTitle(projectsPage.pageTitle)

  return <>
    <PageHero {...projectsPage.hero} />
    <section className="content-band projects-band first-band"><div className="container"><Heading kicker={projectsPage.portfolioKicker} title={projectsPage.portfolioTitle} note={projectsPage.portfolioNote} /><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></div></section>
    <section className="content-band repositories-band"><div className="container"><Heading kicker={projectsPage.repositoryKicker} title={projectsPage.repositoryTitle} action={<ExternalLink href={github.profileUrl} className="text-link desktop-link">{projectsPage.repositoryAction} <ArrowUpRight /></ExternalLink>} /><div className="repo-grid" aria-busy={loading}>{repos.map((repo) => <RepoCard key={repo.name} repo={repo} />)}</div></div></section>
  </>
}

function Heading({ kicker, title, note, action }: { kicker: string; title: string; note?: string; action?: ReactNode }) {
  return <div className="section-heading-row compact-heading"><div><p className="section-kicker">{kicker}</p><h2>{title}</h2></div>{note && <p className="heading-note">{note}</p>}{action}</div>
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { caseStudyLabel, viewCaseStudyLabel } = content.projectsPage
  return <article className="project-card"><ProjectMedia project={project} index={index} /><div className="project-card-body"><div className="project-number">{caseStudyLabel} {String(index + 1).padStart(2, '0')}</div><h3><Link to={`/projects/${project.slug}/`}>{project.title}</Link></h3><p>{project.description}</p><TechTags items={project.tech} /><ProjectActions project={project} /><Link to={`/projects/${project.slug}/`} className="text-link">{viewCaseStudyLabel} <ArrowRight /></Link></div></article>
}

function RepoCard({ repo }: { repo: GithubRepo }) {
  const updated = new Date(repo.updated_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  return <article className="repo-card"><div className="repo-topline"><FolderGit2 />{repo.stargazers_count > 0 && <span><Star />{repo.stargazers_count}</span>}</div><h3>{repo.name}</h3><p>{repo.description || content.github.emptyDescription}</p><div className="repo-meta">{repo.language && <span className="language"><i />{repo.language}</span>}<span>Updated {updated}</span></div><div className="repo-actions"><ExternalLink href={repo.html_url}><Github /> Source</ExternalLink>{repo.homepage && <ExternalLink href={repo.homepage}><ArrowUpRight /> Live</ExternalLink>}</div></article>
}

function ProjectDetail() {
  const { slug } = useParams()
  const { projectsPage, site } = content
  const project = projects.find((item) => item.slug === slug)
  usePageTitle(project ? `${project.title} | ${site.name}` : content.notFound.pageTitle)
  if (!project) return <NotFound />

  return <article className="project-detail"><header className="detail-hero"><div className="container"><Link to="/projects/" className="back-link"><ArrowLeft /> {projectsPage.allProjectsLabel}</Link><div className="detail-heading"><div><p className="eyebrow">{projectsPage.caseStudyLabel}</p><h1>{project.title}</h1></div><TechTags items={project.tech} large /></div></div></header>{project.image && <div className="container detail-media"><img src={project.image} alt={project.title} /></div>}<div className="container detail-content-grid"><div className="section-kicker">{projectsPage.overviewLabel}</div><div className="detail-copy"><p>{project.description}</p><div className="detail-actions">{project.githubUrl && <ExternalLink href={project.githubUrl} className="btn btn-secondary"><Github /> {projectsPage.sourceLabel}</ExternalLink>}{project.liveUrl && <ExternalLink href={project.liveUrl} className="btn btn-primary">{projectsPage.liveLabel} <ArrowUpRight /></ExternalLink>}</div></div></div></article>
}

function ContactMethodIcon({ icon }: { icon: string }) {
  const icons: Record<string, ReactNode> = { phone: <Phone />, github: <Github />, 'at-sign': <AtSign />, instagram: <Instagram /> }
  return icons[icon] ?? <AtSign />
}

function Contact() {
  const { contact } = content
  usePageTitle(contact.pageTitle)

  return <><PageHero className="contact-page-hero" {...contact.hero} /><section className="content-band contact-band"><div className="container contact-layout"><div className="contact-primary"><p className="section-kicker">{contact.kicker}</p><h2>{contact.title}</h2><p>{contact.body}</p><a href={`mailto:${contact.email}`} className="contact-email">{contact.email} <ArrowUpRight /></a><p className="response-note"><span className="availability-dot" /> {contact.responseNote}</p></div><div className="contact-directory">{contact.methods.map((method) => <a href={method.href} className="contact-row" key={method.label} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}><span className="contact-icon"><ContactMethodIcon icon={method.icon} /></span><span><small>{method.label}</small><strong>{method.value}</strong></span><ArrowUpRight /></a>)}</div></div></section></>
}

function NotFound() {
  const { notFound } = content
  usePageTitle(notFound.pageTitle)
  return <section className="not-found"><div className="container"><p className="eyebrow">{notFound.eyebrow}</p><h1>{notFound.title}</h1><p>{notFound.body}</p><Link to="/" className="btn btn-primary"><ArrowLeft /> {notFound.action}</Link></div></section>
}

export default function App() {
  return <Layout><Routes><Route path="/" element={<Home />} /><Route path="/about/" element={<About />} /><Route path="/projects/" element={<Projects />} /><Route path="/projects/:slug/" element={<ProjectDetail />} /><Route path="/contact/" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></Layout>
}
