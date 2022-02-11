from django.db import models

from authapp.models import UserDRF


class Project(models.Model):
    name = models.CharField(max_length=32)
    repository = models.CharField(max_length=128)
    users = models.ManyToManyField(UserDRF)

    def __str__(self):
        return self.name
