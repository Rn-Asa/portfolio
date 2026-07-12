# Positive Vibes Portfolio

A dark, Apple-inspired Django portfolio for Positive Vibes. The site showcases systems, protocol, WebAssembly, TypeScript, Django, and web runtime work, with a dedicated skillset page that previews public GitHub projects from `radiiplus`.

## Features

- Django-powered pages and routing
- Tailwind CSS through CDN
- Lucide icons through CDN
- External white GitHub SVG from Simple Icons
- Responsive dark interface
- Icon-only desktop navigation
- Mobile navigation menu
- Interactive project selection
- Interactive skillset filters
- Public GitHub project showcase page

## Pages

- `/` - Main portfolio page with hero, about, selected work, skills, and contact sections.
- `/skills/` - Skillset page with public project previews and filters for systems, web, protocols, and graphics work.

## Project Structure

```text
port/
  manage.py
  entry/
    urls.py
    views.py
    templates/
      base.html
      index.html
      skills.html
  port/
    settings.py
    urls.py
```

## Key Files

- `entry/views.py` stores the shared portfolio data:
  - `PROFILE`
  - `NAV_ITEMS`
  - `SKILLS`
  - `FEATURED_PROJECTS`
  - `REPOSITORIES`

- `entry/templates/base.html` contains shared layout, navigation, Tailwind setup, Lucide setup, background styling, and footer.

- `entry/templates/index.html` renders the homepage.

- `entry/templates/skills.html` renders the GitHub project showcase.

## Run Locally

From the repository root:

```powershell
.\env\Scripts\Activate.ps1
cd port
python manage.py runserver
```

Open:

```text
http://127.0.0.1:8000/
```

Skillset page:

```text
http://127.0.0.1:8000/skills/
```

## Notes

The project currently uses CDN assets, so an internet connection is needed for Tailwind, Lucide icons, and the GitHub SVG icon to load in the browser.
