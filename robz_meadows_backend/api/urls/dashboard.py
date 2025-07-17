from django.urls import path
from api.views.cars.rental_cars import get_rental_cars


urlpatterns = [
    path('cars/', get_rental_cars, name='get_cars'),
]