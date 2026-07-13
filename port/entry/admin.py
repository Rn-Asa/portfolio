from django.contrib import admin

from .models import PortfolioProject, Skill


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'display_order')
    search_fields = ('name',)
    ordering = ('display_order', 'name')


@admin.register(PortfolioProject)
class PortfolioProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'language', 'is_featured', 'display_order')
    list_filter = ('is_featured', 'language')
    search_fields = ('name', 'description', 'tags')
    ordering = ('display_order', 'name')
