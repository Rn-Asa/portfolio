"""Static portfolio content used by the public pages."""

PROFILE = {
    'name': 'Asa Dihnma',
    'github_user': 'Dihnma',
    'github_url': 'https://github.com/Dihnma',
    'field': 'Full-Stack Engineering & Digital Product Design',
    'stack': 'Python, Django, TypeScript, React',
}

NAV_ITEMS = [
    {'label': 'About', 'href': '/#about', 'icon': 'sparkles'},
    {'label': 'Work', 'href': '/#work', 'icon': 'folder-open'},
    {'label': 'Skills', 'href': '/skills/', 'icon': 'layers'},
    {'label': 'Contact', 'href': '/#contact', 'icon': 'mail'},
]

SKILLS = [
    'Python & Django Architecture',
    'React & TypeScript Interfaces',
    'Telehealth & Healthcare Systems',
    'Responsive & Accessible UI/UX',
    'RESTful API Design',
    'Modern Build Tooling (Vite, Webpack)',
]

FEATURED_PROJECTS = [
    {
        'number': '01',
        'name': 'Telehealth Platform',
        'icon': 'heart-pulse',
        'description': 'A secure, accessible Python-based telehealth application designed to simplify remote healthcare interactions and patient management.',
        'url': 'https://github.com/Dihnma/my-first-project',
        'cta': 'Explore Project',
    },
    {
        'number': '02',
        'name': 'Django Blog Engine',
        'icon': 'book-open',
        'description': 'A robust, full-featured content management system built with Python and Django, showcasing clean backend architecture and intuitive routing.',
        'url': 'https://github.com/Dihnma/python-project',
        'cta': 'Explore Project',
    },
    {
        'number': '03',
        'name': 'Typeshii',
        'icon': 'code-2',
        'description': 'A minimal, highly optimized React + TypeScript + Vite starter template with pre-configured HMR and strict ESLint rules for modern web development.',
        'url': 'https://github.com/Dihnma/typeshii',
        'cta': 'Explore Project',
    },
]

REPOSITORIES = [
    {'name': 'my-first-project', 'language': 'Python', 'description': 'Telehealth application focused on accessible and secure healthcare interactions.', 'url': 'https://github.com/Dihnma/my-first-project', 'tags': 'python healthcare', 'icon': 'heart-pulse'},
    {'name': 'python-project', 'language': 'Python', 'description': 'A full-featured blog site built with Python and Django.', 'url': 'https://github.com/Dihnma/python-project', 'tags': 'python web', 'icon': 'book-open'},
    {'name': 'typeshii', 'language': 'TypeScript', 'description': 'Minimal setup to get React working in Vite with HMR and ESLint rules.', 'url': 'https://github.com/Dihnma/typeshii', 'tags': 'typescript web', 'icon': 'code-2'},
    {'name': 'TODO_APP', 'language': 'HTML', 'description': 'A straightforward, responsive task management application built with HTML and Python.', 'url': 'https://github.com/Dihnma/TODO_APP', 'tags': 'web python', 'icon': 'check-square'},
    {'name': 'octane', 'language': 'JavaScript', 'description': 'Lightweight, modular JavaScript utility library for DOM manipulation, events, and state.', 'url': 'https://github.com/Dihnma/octane', 'tags': 'web', 'icon': 'zap'},
    {'name': 'my_first_project_techrise', 'language': 'Python', 'description': 'Educational and practical Python project developed during techrise initiatives.', 'url': 'https://github.com/Dihnma/my_first_project_techrise', 'tags': 'python', 'icon': 'rocket'},
]