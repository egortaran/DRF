from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from authapp.views import UserDRFModelViewSet
from mainapp.views import TODOModelViewSet, ProjectModelViewSet

router = DefaultRouter()
router.register('users', UserDRFModelViewSet)
router.register('projects', ProjectModelViewSet)
router.register('todo', TODOModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
]
