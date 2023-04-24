from rest_framework import serializers
from credor.models import Credor

# Serializers define the API representation.
class CredorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Credor
        fields = ['nomeCredor', 'cnpjCpf', 'email' ]

class CredorSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Credor
        fields = ['id', 'nomeCredor']