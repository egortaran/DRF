from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import UserDRF
from .serializers import UserDRFModelSerializer


class UserDRFModelViewSet(ModelViewSet):
    queryset = UserDRF.objects.all()
    serializer_class = UserDRFModelSerializer
