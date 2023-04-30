
from endereco.api.serializers import EnderecoSerializer
from endereco.models import Endereco
from credor.models import Credor
from rest_framework import serializers
from devedor.models import Devedor
from credor.api.serializers import CredorSerializer
from django.contrib.auth.models import User
import logging
from get_username import get_username

class DevedorSerializer(serializers.ModelSerializer):
    cred = CredorSerializer()
    endereco = EnderecoSerializer()
    class Meta:
        model = Devedor
        fields = ['nome', 'cnpjCpf', 'email', 'cred', 'endereco', 'numeroContrato', 'valorDivida', 'usuario']
    
    def create(self, request):
        logging.getLogger().setLevel(logging.NOTSET)
        log = logging.getLogger("app." + __name__)
        log.info(request)
        credor = request['cred']
        del request['cred']
        end = request['endereco']
        del request['endereco']
        devedor = Devedor.objects.create(**request)
        end = Endereco.objects.create(**end)
        devedor.endereco = end
        cred = Credor.objects.create(**credor)
        devedor.cred = cred
        #print( self.request.user.id)

        devedor.save()
        return devedor

        
  