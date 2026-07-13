# Asa Dihnma Portfolio

A refined, responsive Django portfolio showcasing full-stack engineering work across Python, Django, TypeScript, React, and telehealth solutions. The site features an elegant, modern aesthetic with soft purple/lavender accents, glassmorphism, and thoughtful UI/UX design.

The site includes a homepage and a skillset page that previews public GitHub projects from [Dihnma](https://github.com/Dihnma).

## Features

- Django project with a dedicated `entry` app
- Homepage and skillset page routed through clean, app-level URLs
- Shared base template with reusable navigation, custom purple/lavender Tailwind theming, and elegant glassmorphism effects
- Static data configuration for seamless portfolio updates, with Django models registered in the admin panel for future database-backed content
- Focused tests for routes, templates, context data, and model strings
- Responsive, accessible UI built with Tailwind CSS (CDN) and Lucide icons

## Project Structure

```text
port/
  manage.py
  entry/
    admin.py
    apps.py
    data.py          # Static portfolio content (profile, projects, skills)
    models.py
    tests.py
    urls.py
    views.py
    migrations/
    templates/
      base.html      # Base layout with purple gradient orbs and glassmorphism
      index.html     # Elegant, editorial-style homepage
      skills.html    # Filterable GitHub project and skillset showcase
  port/
    settings.py
    urls.py
    asgi.py
    wsgi.py
```

## Run Locally

```powershell
.\env\Scripts\Activate.ps1
cd port
python manage.py migrate
python manage.py runserver
```

Open your browser and navigate to:

```text
http://127.0.0.1:8000/
```

## Pages

- `/` - Portfolio homepage with an editorial layout, featured projects, and contact section
- `/skills/` - Interactive, filterable showcase of public GitHub repositories and technical expertise
- `/admin/` - Django admin panel (ready for future dynamic content management)

## Tests

```powershell
cd port
python manage.py test
```

## Stack

- **Backend**: Django, Python
- **Frontend**: HTML5, Tailwind CSS (CDN), Vanilla JavaScript
- **Icons**: Lucide Icons, Simple Icons (GitHub SVG)
- **Design**: Custom glassmorphism, CSS animations, and a refined purple/indigo color palette

## Notes

The public pages currently use static portfolio data from `entry/data.py` to ensure a stable, highly polished UI that accurately reflects the `Dihnma` GitHub profile. The `Skill` and `PortfolioProject` models are already registered in the Django admin panel, making it straightforward to transition to database-backed content in the future if needed.
