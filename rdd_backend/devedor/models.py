from django.db import models
from credor.models import Credor
from users.models import User
from endereco.models import Endereco


class Devedor(models.Model): 
    credor = models.ForeignKey(Credor, on_delete=models.CASCADE)
    numeroContrato = models.CharField(max_length=10)
    dataRegistro = models.DateTimeField(auto_now_add=True)
    cnpjCpf =models.DecimalField(max_digits=14, decimal_places=0)
    telefone =models.DecimalField(max_digits=12, decimal_places=0, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    valorDivida =models.DecimalField(max_digits=10, decimal_places=2)
    descricaoDivida = models.CharField(max_length=100, null=True, blank=True)
    nome = models.CharField(max_length=100)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    baixada = models.BooleanField(default=False)
    dataBaixa = models.DateTimeField(null=True, blank=True)
    endereco = models.ForeignKey(Endereco, on_delete=models.CASCADE)

    def __str__(self): 
        return self.nome
    
    
    
