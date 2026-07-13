from django.db import models


class Skill(models.Model):
    """A skill that can be managed from Django admin."""

    name = models.CharField(max_length=120, unique=True)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['display_order', 'name']

    def __str__(self):
        return self.name


class PortfolioProject(models.Model):
    """Project metadata for future admin-managed portfolio content."""

    name = models.CharField(max_length=120)
    description = models.TextField()
    url = models.URLField(blank=True)
    language = models.CharField(max_length=80, blank=True)
    tags = models.CharField(
        max_length=200,
        blank=True,
        help_text='Separate tags with spaces, for example: systems web protocols.',
    )
    is_featured = models.BooleanField(default=False)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['display_order', 'name']

    def __str__(self):
        return self.name
