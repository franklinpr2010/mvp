from rest_framework.fields import SerializerMethodField
from endereco.models import Endereco
from endereco.api.serializers import EnderecoSerializer
from rest_framework import serializers
from credor.models import Credor
from rest_framework.response import Response

# Serializers define the API representation.
class CredorSerializer(serializers.ModelSerializer):
    endereco = EnderecoSerializer()

    class Meta:
        model = Credor
        fields = ('id', 'nomeCredor', 'dataRegistro', 'telefone', 'email', 'cnpjCpf', 'endereco')
    
    def create(self, validated_data):
        print('saving credor', validated_data)
        endereco = validated_data['endereco']
        del validated_data['endereco']
        print('endereco', endereco)
        #usuario = validated_data['usuario']
        end = Endereco.objects.create(**endereco)
        print('endereco', end)
        credor = Credor.objects.create(**validated_data) 
        credor.endereco = end
        
        #credor.usuario = usuario
        credor.save()
        return credor
        

class CredorSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Credor
        fields = ['id', 'nomeCredor']
        
        
    