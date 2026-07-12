from django.shortcuts import render

PROFILE = {
    'name': 'Positive Vibes',
    'github_user': 'radiiplus',
    'github_url': 'https://github.com/radiiplus',
    'field': 'Systems, Protocols, and Web Runtime Engineering',
    'stack': 'Rust, WASM, TypeScript, Django',
}

NAV_ITEMS = [
    {'label': 'About', 'href': '/#about', 'icon': 'user-round'},
    {'label': 'Work', 'href': '/#work', 'icon': 'briefcase-business'},
    {'label': 'Skills', 'href': '/skills/', 'icon': 'blocks'},
    {'label': 'Contact', 'href': '/#contact', 'icon': 'send'},
]

SKILLS = [
    'Rust systems programming',
    'WebAssembly boundaries',
    'Protocol and encoder design',
    'TypeScript interfaces',
    'Django templates and routing',
    'Performance-minded tooling',
]

FEATURED_PROJECTS = [
    {
        'number': '01',
        'name': 'MemLink',
        'icon': 'network',
        'description': 'High-performance Rust libraries for IPC, shared memory queues, dynamic module loading, and plugin runtimes.',
        'url': 'https://github.com/radiiplus/memlink',
        'cta': 'View repo',
    },
    {
        'number': '02',
        'name': 'NOL36',
        'icon': 'binary',
        'description': 'A portable base-36 encoding protocol with chunking, versioning, integrity checks, and Rust, JavaScript, Python, and WASM support.',
        'url': 'https://github.com/radiiplus/nol36',
        'cta': 'View repo',
    },
    {
        'number': '03',
        'name': 'Web Systems',
        'icon': 'layout-dashboard',
        'description': 'Django and TypeScript interfaces for presenting technical systems with clean navigation, feedback, and responsive structure.',
        'url': '#contact',
        'cta': 'Discuss work',
    },
]

REPOSITORIES = [
    {'name': 'fibscope', 'language': 'Unspecified', 'description': 'Inspection and measurement-oriented project space.', 'url': 'https://github.com/radiiplus/fibscope', 'tags': 'systems', 'icon': 'activity'},
    {'name': 'ckbuilders', 'language': 'JavaScript', 'description': 'JavaScript tooling around builder workflows.', 'url': 'https://github.com/radiiplus/ckbuilders', 'tags': 'web', 'icon': 'hammer'},
    {'name': 'memlink', 'language': 'Rust', 'description': 'High-performance IPC, shared-memory queues, dynamic module loading, and plugin runtime ideas.', 'url': 'https://github.com/radiiplus/memlink', 'tags': 'systems protocols', 'icon': 'network'},
    {'name': 'classAprojs', 'language': 'Python', 'description': 'Class assignments and Python learning work.', 'url': 'https://github.com/radiiplus/classAprojs', 'tags': 'web', 'icon': 'graduation-cap'},
    {'name': 'cgpu', 'language': 'Rust', 'description': 'A tunable GPU compute executor with automatic CPU fallback, byte-based batching, and inline shader generation.', 'url': 'https://github.com/radiiplus/cgpu', 'tags': 'systems graphics', 'icon': 'cpu'},
    {'name': 'Orbital', 'language': 'JavaScript', 'description': 'Local-first development environment for Nervos CKB smart contracts with deployment, funding, and observability workflows.', 'url': 'https://github.com/radiiplus/Orbital', 'tags': 'web protocols', 'icon': 'orbit'},
    {'name': 'sessrelay', 'language': 'TypeScript', 'description': 'Transport-agnostic message relay for sessvm-authenticated clients and services.', 'url': 'https://github.com/radiiplus/sessrelay', 'tags': 'web protocols systems', 'icon': 'radio-tower'},
    {'name': 'guffie', 'language': 'TypeScript', 'description': 'A social app for sharing, connecting, and staying in the moment without friction.', 'url': 'https://github.com/radiiplus/guffie', 'tags': 'web', 'icon': 'messages-square'},
    {'name': 'sessvm', 'language': 'TypeScript', 'description': 'Server-owned session management with secure refresh, CSRF protection, and multi-transport client helpers.', 'url': 'https://github.com/radiiplus/sessvm', 'tags': 'web systems protocols', 'icon': 'shield-check'},
    {'name': 'MindLog', 'language': 'Unspecified', 'description': 'A thinking and logging project space.', 'url': 'https://github.com/radiiplus/MindLog', 'tags': 'web', 'icon': 'brain'},
    {'name': 'nol36', 'language': 'Rust', 'description': 'Universal base-36 encoder with chunked transfer, versioning, integrity verification, and WASM bindings.', 'url': 'https://github.com/radiiplus/nol36', 'tags': 'systems protocols', 'icon': 'binary'},
    {'name': '3dfusion', 'language': 'Rust', 'description': 'A deterministic 3D world runtime for modern browsers.', 'url': 'https://github.com/radiiplus/3dfusion', 'tags': 'systems graphics web', 'icon': 'box'},
    {'name': 'Realta', 'language': 'TypeScript', 'description': 'Digital credentials designed to be verifiable, tamper-evident, and independent of a single company or database.', 'url': 'https://github.com/radiiplus/Realta', 'tags': 'web protocols', 'icon': 'badge-check'},
    {'name': 'autoblast', 'language': 'TypeScript', 'description': 'Automation-oriented TypeScript project.', 'url': 'https://github.com/radiiplus/autoblast', 'tags': 'web systems', 'icon': 'rocket'},
    {'name': 'ohrex', 'language': 'JavaScript', 'description': 'Decentralized token launchpad on Nervos CKB with bonding curve, auto DEX deploy, AMM, SDK, and CLI.', 'url': 'https://github.com/radiiplus/ohrex', 'tags': 'web protocols systems', 'icon': 'coins'},
    {'name': 'gate', 'language': 'JavaScript', 'description': 'Lightweight React component for remote access control, feature gates, paywalls, and maintenance overlays.', 'url': 'https://github.com/radiiplus/gate', 'tags': 'web', 'icon': 'lock-keyhole'},
    {'name': 'drift', 'language': 'JavaScript', 'description': 'Minimal AMM DEX on Nervos CKB using constant product invariant, fees, Rust contracts, and TypeScript SDK.', 'url': 'https://github.com/radiiplus/drift', 'tags': 'web protocols systems', 'icon': 'repeat-2'},
    {'name': 'ninet', 'language': 'Unspecified', 'description': 'Public project space from the Radiiplus GitHub profile.', 'url': 'https://github.com/radiiplus/ninet', 'tags': 'web', 'icon': 'grid-3x3'},
    {'name': 'trade', 'language': 'JavaScript', 'description': 'Trading-oriented JavaScript project.', 'url': 'https://github.com/radiiplus/trade', 'tags': 'web protocols', 'icon': 'chart-candlestick'},
    {'name': 'octane', 'language': 'JavaScript', 'description': 'Modular JavaScript utility library for DOM manipulation, events, state, storage, animations, and more.', 'url': 'https://github.com/radiiplus/octane', 'tags': 'web', 'icon': 'gauge'},
]


def base_context(active_nav=''):
    return {
        'profile': PROFILE,
        'nav_items': NAV_ITEMS,
        'active_nav': active_nav,
    }


def home(request):
    context = {
        **base_context(),
        'page_title': f"{PROFILE['name']} | Portfolio",
        'skills': SKILLS,
        'featured_projects': FEATURED_PROJECTS,
    }
    return render(request, 'index.html', context)


def skills(request):
    context = {
        **base_context('Skills'),
        'page_title': f"{PROFILE['name']} | Skillset",
        'repositories': REPOSITORIES,
        'repository_count': len(REPOSITORIES),
    }
    return render(request, 'skills.html', context)
