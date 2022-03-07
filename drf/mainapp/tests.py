from django.test import TestCase
from mixer.auto import mixer
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate

from .models import Project, TODO
from .views import ProjectModelViewSet
from authapp.models import UserDRF


class TestProjectModelViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post('/api/projects/', {'name': 'Project', 'repository': 'link', 'users': [1]}, format='json')
        view = ProjectModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_admin(self):
        admin = UserDRF.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')

        factory = APIRequestFactory()
        request = factory.post('/api/projects/', {'name': 'Project', 'repository': 'link', 'users': [1]}, format='json')
        force_authenticate(request, admin)
        view = ProjectModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class TestTODOModelViewSet(TestCase):
    def test_get_list(self):
        response = self.client.get('/api/todo/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_admin(self):
        admin = UserDRF.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
        self.client.login(username='admin', password='admin123456')

        todo = mixer.blend(TODO)
        response = self.client.put(f'/api/todo/{todo.id}/',
                                   data={
                                       'id': todo.id,
                                       'text': 'Руслан и Людмила',
                                       'is_active': True,
                                       'project': todo.project.id,
                                       'creater': admin.id
                                   }, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        todo = TODO.objects.get(id=todo.id)

        self.assertEqual(todo.creater, 'Руслан и Людмила')
        self.client.logout()
