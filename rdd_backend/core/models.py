from django.db import models
from decimal import Decimal



# Create your models here.
class Credor(models.Model): 
    endereco = models.CharField(max_length=100)
    cidade = models.CharField(max_length=50)
    nomeCredor = models.CharField(max_length=100)
    complemento = models.CharField(max_length=100)
    telefone = models.DecimalField(max_digits=12, decimal_places=0)
    email = models.EmailField()
    cnpjCpf = models.DecimalField(max_digits=14, decimal_places=0)
    bairro = models.CharField(max_length=100)
    numero = models.CharField(max_length=5)
    estado = models.CharField(max_length=2)
    usuario = models.CharField(max_length=20)
    cep = models.DecimalField(max_digits=8, decimal_places=0)


    def __str__(self): 
        return self.nomeCredor


class Devedor(models.Model): 
    credorId = models.CharField(max_length=10)
    numeroContrato = models.CharField(max_length=10)
    dataRegistro = models.DateField()
    cnpjCpf =models.DecimalField(max_digits=14, decimal_places=0)
    nome = models.CharField(max_length=14)
    telefone =models.DecimalField(max_digits=12, decimal_places=0)
    email = models.EmailField()
    valorDivida =models.DecimalField(max_digits=10, decimal_places=2)
    descricaoDivida = models.CharField(max_length=100)
    nome = models.CharField(max_length=14)
    bairro = models.CharField(max_length=100)
    numero = models.CharField(max_length=5)
    estado = models.CharField(max_length=2)
    usuario = models.CharField(max_length=20)
    address = models.CharField(max_length=100)
    cep = models.DecimalField(max_digits=8, decimal_places=0)


    def __str__(self): 
        return self.nome



