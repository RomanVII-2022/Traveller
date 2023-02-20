from django.shortcuts import render
from myapp.models import Category, Blog
from myapp.serializers import CategorySerilizer, BlogSerilizer
from rest_framework import viewsets

# Create your views here.
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerilizer
    lookup_field = 'slug'


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerilizer
    lookup_field = 'id'
