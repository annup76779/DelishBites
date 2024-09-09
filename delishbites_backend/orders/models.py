from django.db import models

# Create your models here.
class Order(models.Model):
    MEAL_CHOICES = [
        ('breakfast', 'Breakfast'),
        ('lunch', 'Lunch'),
        ('dinner', 'Dinner'),
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    meal = models.CharField(max_length=10, choices=MEAL_CHOICES)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
