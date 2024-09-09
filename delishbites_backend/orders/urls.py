from django.urls import path

from orders.views import SaveNewOrder

urlpatterns = [
    path("submit-form", SaveNewOrder.as_view(), name="submit-form"),
]
