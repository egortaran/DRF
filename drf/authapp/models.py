from django.db import models
from django.contrib.auth.models import AbstractUser


class UserDRF(AbstractUser):
    email = models.EmailField(unique=True)
