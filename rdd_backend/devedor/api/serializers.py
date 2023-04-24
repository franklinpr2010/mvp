from endereco.api.serializers import EnderecoSerializer
from endereco.models import Endereco
from credor.models import Credor
from rest_framework import serializers
from devedor.models import Devedor
from credor.api.serializers import CredorSerializer
import logging

class DevedorSerializer(serializers.ModelSerializer):
    cred = CredorSerializer()
    endereco = EnderecoSerializer()
    class Meta:
        model = Devedor
        fields = ['nome', 'cnpjCpf', 'email', 'cred', 'endereco', 'numeroContrato', 'valorDivida']
    
    def create(self, validated_data):
        logging.getLogger().setLevel(logging.NOTSET)
        log = logging.getLogger("app." + __name__)
        log.info(validated_data)
        credor = validated_data['cred']

        del validated_data['cred']
        end = validated_data['endereco']
        del validated_data['endereco']
        devedor = Devedor.objects.create(**validated_data)
        end = Endereco.objects.create(**end)
        devedor.endereco = end
        cred = Credor.objects.create(**credor)
        devedor.cred = cred
        devedor.save()
        return devedor

        
  