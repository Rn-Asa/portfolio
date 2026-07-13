from django.shortcuts import render

from .data import FEATURED_PROJECTS, NAV_ITEMS, PROFILE, REPOSITORIES, SKILLS


def get_base_context(active_nav=''):
    """Return values shared by every portfolio template."""
    return {
        'profile': PROFILE,
        'nav_items': NAV_ITEMS,
        'active_nav': active_nav,
    }


def home(request):
    context = {
        **get_base_context(),
        'page_title': f"{PROFILE['name']} | Portfolio",
        'skills': SKILLS,
        'featured_projects': FEATURED_PROJECTS,
    }
    return render(request, 'index.html', context)


def skills(request):
    context = {
        **get_base_context('Skills'),
        'page_title': f"{PROFILE['name']} | Skillset",
        'repositories': REPOSITORIES,
        'repository_count': len(REPOSITORIES),
    }
    return render(request, 'skills.html', context)
