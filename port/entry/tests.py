from django.test import TestCase
from django.urls import reverse

from .data import FEATURED_PROJECTS, REPOSITORIES
from .models import PortfolioProject, Skill


class PublicPageTests(TestCase):
    def test_home_page_renders_portfolio_content(self):
        response = self.client.get(reverse('home'))

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'index.html')
        self.assertContains(response, 'Low-level ideas shaped into clear, usable software.')
        self.assertEqual(response.context['featured_projects'], FEATURED_PROJECTS)

    def test_skills_page_renders_repository_content(self):
        response = self.client.get(reverse('skills'))

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'skills.html')
        self.assertContains(response, 'Skillset, mapped through shipped experiments.')
        self.assertEqual(response.context['repository_count'], len(REPOSITORIES))


class ModelStringTests(TestCase):
    def test_skill_string_representation(self):
        skill = Skill.objects.create(name='Django templates')

        self.assertEqual(str(skill), 'Django templates')

    def test_portfolio_project_string_representation(self):
        project = PortfolioProject.objects.create(
            name='MemLink',
            description='Shared memory and plugin runtime work.',
        )

        self.assertEqual(str(project), 'MemLink')
