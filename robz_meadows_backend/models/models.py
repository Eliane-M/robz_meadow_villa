from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from base.models import BaseModel

class Account(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=100)
    def __str__(self):
        return str(self.user.first_name)
    

class AccountEmail(models.Model):
    email = models.EmailField(max_length=255)
    # user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return str(self.email)


class ResetPassword(models.Model):
    email = models.EmailField(max_length=255)
    code = models.CharField(max_length=6)
    expires = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return str(self.email)
    
class ResetPasswordConfirmation(models.Model):
    email = models.EmailField(max_length=255)
    user = models.ForeignKey(User, blank=True, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return str(self.email)

class Category(BaseModel):
    image = models.ImageField(upload_to='category_images/', null=True, blank=True, editable=True)
    def __str__(self):
        return str(self.name)
    
class RentalCars(BaseModel):
    image = models.ImageField(upload_to='car_images/', null=True, blank=True, editable=True)

    def __str__(self):
        return str(self.name)
    
class Cars(BaseModel):
    image = models.ImageField(upload_to='car_images/', null=True, blank=True, editable=True)

    def __str__(self):
        return str(self.name)
    
class Apartment(BaseModel):
    image = models.ImageField(upload_to='apartment_images/', null=True, blank=True, editable=True)

    def __str__(self):
        return str(self.name)