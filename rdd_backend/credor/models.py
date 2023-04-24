from django.db import models
from endereco.models import Endereco



# Create your models here.
class Credor(models.Model): 
    nomeCredor = models.CharField(max_length=100)
    dataRegistro = models.DateTimeField(auto_now_add=True)
    telefone = models.DecimalField(max_digits=12, decimal_places=0, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    cnpjCpf = models.DecimalField(max_digits=14, decimal_places=0)
    usuario = models.CharField(max_length=20, null=True, blank=True)
    endereco = models.ForeignKey(Endereco, on_delete=models.CASCADE, null=True)

    def __str__(self): 
        return self.nomeCredor