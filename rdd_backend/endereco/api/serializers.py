from rest_framework import serializers
from endereco.models import Endereco

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ('linha', 'numero', 'bairro', 'estado', 'cep', 'complemento')

class EnderecoSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ['linha', 'numero', 'bairro']
