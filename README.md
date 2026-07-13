# Positive Vibes Portfolio

A dark, responsive Django portfolio for showcasing my work across systems programming, web tooling, protocols, WebAssembly, and product interfaces.

The site includes a homepage and a skillset page that previews public GitHub projects from `radiiplus`.

## Features

- Django project with a dedicated `entry` app
- Homepage and skillset page routed through app-level URLs
- Shared base template with reusable navigation and layout
- Models for portfolio skills and projects
- Admin configuration for managing portfolio content
- Focused tests for routes, templates, context data, and model strings
- Responsive UI using Tailwind CDN and Lucide icons

## Project Structure

```text
port/
  manage.py
  entry/
    admin.py
    apps.py
    data.py
    models.py
    tests.py
    urls.py
    views.py
    migrations/
    templates/
      base.html
      index.html
      skills.html
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

Open:

```text
http://127.0.0.1:8000/
```

## Pages

- `/` - Portfolio homepage
- `/skills/` - GitHub project and skillset showcase
- `/admin/` - Django admin panel

## Tests

```powershell
cd port
python manage.py test
```

## Stack

- Django
- Tailwind CDN
- Lucide icons
- Simple Icons GitHub SVG

## Notes

The public pages currently use static portfolio data from `entry/data.py` so the existing UI remains stable. The `Skill` and `PortfolioProject` models are registered in the admin panel and ready for future database-backed content.
