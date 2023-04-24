from rest_framework import viewsets
from credor.models import Credor
from credor.api.serializers import CredorSerializer, CredorSimpleSerializer
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


# Credor
class CredorViewSet(viewsets.ModelViewSet):
    queryset = Credor.objects.all()
    serializer_class = CredorSerializer
    authentication_classes = [TokenAuthentication,]
    permission_classes = [IsAuthenticated]


def list(self, request, *args, **kwargs):
    queryset = Credor.objects.all()
    serializer = CredorSimpleSerializer(queryset, many=True)
    return Response(serializer.data)