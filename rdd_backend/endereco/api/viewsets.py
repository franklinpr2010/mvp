from rest_framework import viewsets
from endereco.models import Endereco, Devedor
from api.serializers import EnderecoSerializer, EnderecoSimpleSerializer
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated


#Devedor
class EnderecoViewSet(viewsets.ModelViewSet):
    queryset = Endereco.objects.all()
    serializer_class = EnderecoSerializer

def list(self, request, *args, **kwargs):
    queryset = Endereco.objects.all()
    serializer = EnderecoSimpleSerializer(queryset, many=True)
    return Response(serializer.data)