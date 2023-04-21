from rest_framework import serializers
from .models import Credor, Devedor

# Serializers define the API representation.
class CredorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Credor
        fields = ['nomeCredor', 'cnpjCpf', 'email']

class CredorSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Credor
        fields = ['id', 'nomeCredor']

class DevedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devedor
        fields = ['nome', 'cnpjCpf', 'email']

class DevedorSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Devedor
        fields = ['id', 'nome']