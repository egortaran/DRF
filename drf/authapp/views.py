from django.shortcuts import get_object_or_404
from rest_framework import permissions
from rest_framework.decorators import permission_classes
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .models import UserDRF
from .serializers import UserDRFModelSerializer


@permission_classes((permissions.IsAuthenticated,))
class UserDRFViewSet(ViewSet):
    def list(self, request):
        users = UserDRF.objects.all()
        serializer = UserDRFModelSerializer(users, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        users = get_object_or_404(UserDRF, pk=pk)
        serializer = UserDRFModelSerializer(users)
        return Response(serializer.data)

    def update(self, request, pk=None):
        user = get_object_or_404(UserDRF, pk=pk)
        serializer = UserDRFModelSerializer(user)
        return Response(serializer.data)
