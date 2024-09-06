from django.contrib import admin
from .models import Order

class OrderAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'meal', 'timestamp')

admin.site.register(Order, OrderAdmin)