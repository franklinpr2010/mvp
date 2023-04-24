from django.db import models
from django.contrib.auth.models import User


class Endereco(models.Model): 
    bairro = models.CharField(max_length=100)
    numero = models.CharField(max_length=5)
    estado = models.CharField(max_length=2, null=True, blank=True)
    endereco = models.CharField(max_length=100)
    cep = models.DecimalField(max_digits=8, decimal_places=0, null=True, blank=True)
    complemento = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self): 
        return self.endereco
