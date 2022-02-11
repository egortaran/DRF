from django.contrib import admin

from mainapp.models import Project, TODO

admin.site.register(Project)
admin.site.register(TODO)
