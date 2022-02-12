from django.db import models

from authapp.models import UserDRF


class Project(models.Model):
    name = models.CharField(max_length=32)
    repository = models.CharField(max_length=128)
    users = models.ManyToManyField(UserDRF)

    def __str__(self):
        return self.name


class TODO(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField()
    creater = models.ForeignKey(UserDRF, on_delete=models.SET_NULL, null=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.text
