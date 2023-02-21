from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Blog(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    subtitle = models.CharField(max_length=100)
    subdescription = models.TextField()
    snippet = models.CharField(max_length=10)
    slug = models.SlugField(max_length=100)
    tag = models.CharField(max_length=10)
    author = models.CharField(max_length=50)
    image1 = models.ImageField(upload_to='photos', null=True, blank=True)
    image2 = models.ImageField(upload_to='photos', null=True, blank=True)
    created_on = models.DateField(auto_now_add=True)
    updated_on = models.DateField(auto_now=True)


    def __str__ (self):
        return self.title