from rest_framework import serializers
from myapp.models import Category, Blog


class CategorySerilizer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class BlogSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'