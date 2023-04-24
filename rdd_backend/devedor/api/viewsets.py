from rest_framework import viewsets
from devedor.models import Credor, Devedor
from devedor.api.serializers import DevedorSerializer
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated


#Devedor
class DevedorViewSet(viewsets.ModelViewSet):
    queryset = Devedor.objects.all()
    serializer_class = DevedorSerializer
    authentication_classes = [TokenAuthentication,]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        id = self.request.query_params.get('id', None)
        cnpjCpf = self.request.query_params.get('cnpjCpf', None)
        nome = self.request.query_params.get('nome', None)
        baixada = self.request.query_params.get('baixada', None)
        queryset = Devedor.objects.all()
        
        if id:
            queryset = Devedor.objects.filter(pk=id)
        
        if cnpjCpf:
            queryset = Devedor.objects.filter(cnpjCpf=cnpjCpf)
        
        if nome:
            queryset = Devedor.objects.filter(nome__iexact=nome)
        
        if baixada:
            queryset = Devedor.objects.filter(baixada=baixada)
            
        return queryset


   