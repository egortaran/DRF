from django.core.management import BaseCommand
from authapp.models import UserDRF


class Command(BaseCommand):
    def handle(self, *args, **options):
        UserDRF.objects.create_superuser(username='admin', password='admin', email='admin@mail.ru')
