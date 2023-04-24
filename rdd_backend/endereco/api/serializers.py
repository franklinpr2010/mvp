from rest_framework import serializers
from endereco.models import Endereco

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ['endereco', 'numero', 'bairro']

class EnderecoSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ['endereco', 'numero', 'bairro']
