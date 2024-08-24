from django.db import models

class MenuItem(models.Model):
    CATEGORY_CHOICES = [
        ('Appetizers', 'Appetizers'),
        ('Main Courses', 'Main Courses'),
        ('Desserts', 'Desserts'),
    ]
    
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    image = models.URLField() 
    recipe = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

