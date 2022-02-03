from rest_framework.serializers import HyperlinkedModelSerializer
from .models import UserDRF


class UserDRFModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = UserDRF
        fields = ['username', 'first_name', 'last_name', 'email', ]
