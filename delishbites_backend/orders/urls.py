from django.urls import path
from .views import submit_order

urlpatterns = [
    path('submit-order', submit_order, name='submit-order'),
]
