from rest_framework.serializers import ModelSerializer
from .models import UserDRF


class UserDRFModelSerializer(ModelSerializer):
    class Meta:
        model = UserDRF
        fields = ['username', 'first_name', 'last_name', 'email', ]
