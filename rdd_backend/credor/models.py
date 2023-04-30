from django.db import models
from django.shortcuts import get_object_or_404
from endereco.models import Endereco
from users.models import User
from rest_framework.response import Response



# Create your models here.
class Credor(models.Model): 
    nomeCredor = models.CharField(max_length=100)
    dataRegistro = models.DateTimeField(auto_now_add=True)
    telefone = models.DecimalField(max_digits=12, decimal_places=0, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    cnpjCpf = models.CharField(max_length=14)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    endereco = models.ForeignKey(
        Endereco, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self): 
        return self.nomeCredor
    