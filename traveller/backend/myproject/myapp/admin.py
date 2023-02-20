from django.contrib import admin
from myapp.models import Category, Blog

# Register your models here.
class CategorySlug(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}

admin.site.register(Category, CategorySlug)

class BlogSlug(admin.ModelAdmin):
    prepopulated_fields = {'slug':('title',)}

admin.site.register(Blog, BlogSlug)