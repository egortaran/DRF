from django.test import TestCase
from mixer.auto import mixer
from requests import request
from rest_framework import status
from rest_framework.test import APIClient, force_authenticate

from .models import UserDRF


class TestUserDRFViewSet(TestCase):
    def test_get_detail(self):
        admin = UserDRF.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
        client = APIClient()
        client.login(username='admin', password='admin123456')

        user = mixer.blend(UserDRF)
        response = client.get(f'/api/users/{user.id}/')
        client.logout()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
