from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter

from authapp.views import UserDRFViewSet
from mainapp.views import TODOModelViewSet, ProjectModelViewSet

router = DefaultRouter()
router.register('users', UserDRFViewSet, basename='users')
router.register('projects', ProjectModelViewSet, basename='projects')
router.register('todo', TODOModelViewSet, basename='todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api-token-auth/', obtain_auth_token),

    path('', TemplateView.as_view(template_name='index.html'))
]
