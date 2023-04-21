from rest_framework import viewsets
from .models import Credor, Devedor
from .serializers import CredorSerializer, CredorSimpleSerializer, DevedorSerializer, DevedorSimpleSerializer
from rest_framework.response import Response


# Credor
class CredorViewSet(viewsets.ModelViewSet):
    queryset = Credor.objects.all()
    serializer_class = CredorSerializer

def list(self, request, *args, **kwargs):
    queryset = Credor.objects.all()
    serializer = CredorSimpleSerializer(queryset, many=True)
    return Response(serializer.data)

#Devedor
class DevedorViewSet(viewsets.ModelViewSet):
    queryset = Devedor.objects.all()
    serializer_class = DevedorSerializer

def list(self, request, *args, **kwargs):
    queryset = Devedor.objects.all()
    serializer = DevedorSimpleSerializer(queryset, many=True)
    return Response(serializer.data)
