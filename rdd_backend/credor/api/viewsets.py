from django.shortcuts import get_object_or_404
from endereco.models import Endereco
from pagination.custompag import CustomPagination
from rest_framework import viewsets
from credor.models import Credor
from credor.api.serializers import CredorSerializer, CredorSimpleSerializer
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from datetime import date

# Credor
class CredorViewSet(viewsets.ModelViewSet):
    queryset = Credor.objects.all()
    serializer_class = CredorSerializer
    authentication_classes = [TokenAuthentication,]
    permission_classes = [IsAuthenticated]
    pagination_class = CustomPagination


    def create(self, request, *args, **kwargs):
        print('teste', self, request, args, kwargs)
        return super(CredorViewSet, self).create(request, *args, **kwargs)
    
    def get(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            result = self.get_paginated_response(serializer.data)
            data = result.data # pagination data
        else:
            serializer = self.get_serializer(queryset, many=True)
            data = serializer.data
        payload = {
            'return_code': '0000',
            'return_message': 'Success',
            'data': data
        }
        return Response(data)
    

    

   
