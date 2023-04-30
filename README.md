
# Recuperação de dívidas
Este pequeno projeto faz parte do material diático da Disciplina Desenvolvimento Full Stack Básico da Puc Rio, a idéia inicial do projeto como escopo era realizar cadastro de credores e dívidas relacionadas ao devedor, a amortização dessa dívida e a negativação do devedor, como esse projeto destina-se somente a apresentação inicial nesse primeiro momento faz parte do deadline apenas o cadatro de credores. Esse projeto divide-se em dois módulos descritos abaixo, um front-end e outro back-end.

# rdd_frontend
Projeto construído em angular 15.2.7
Rode os seguintes comandos na maquina local:
1 - Executar o npm install no prompt de comando para instalar as dependências do projeto front-end.
npm install

2- para executar o projeto digite no promp de comando o comando abaixo:
ng serve

# rdd_backend
Projeto back-end construído em python com o framework django, foram usados alguns recursos scaffolding que o django oferece e outros recursos foram customizados para se adequar a estrutura.

Rode os seguintes comandos na maquina local:

1 - Criar o ambiente virtual no venv para executar o projeto. Execute os seguintes comandos no console.
pip install virtualenv

2 - Criar o ambiente virtual
python -m venv virtualmachine

3 - Depois de instalado o ambiente virtual executar o activate para executar o ambiente virtual.
cd .\virtualmachine\Scripts\ 
Após isso execute o comando .\activate conforme imagem abaixo.
![image](https://user-images.githubusercontent.com/2296319/235370271-405abe30-2eaf-45f3-85d0-a4a93d3d12bb.png)

4 - Agora vamos instalar as dependências do projeto, para isso execute o comando abaixo: 
pip install -r .\requirements.txt
![image](https://user-images.githubusercontent.com/2296319/235370534-483774d5-1df3-44a8-8f0c-15ae2739ac6c.png)

5 - Execute o comando para executar as migrations e criar o banco.
python manage.py makemigrations
python manage.py migrate

6- Agora criar o usuário para que possa acessar a aplicação. Execute o seguinte comando:
python manage.py createsuperuser
![image](https://user-images.githubusercontent.com/2296319/235370580-e0144f5f-b8a0-47a1-9773-2deb92a58349.png)
 Vai pedir o usuário, email e a senha como abaixo:
![image](https://user-images.githubusercontent.com/2296319/235370635-a05f6eec-3b59-4bfd-b1ca-dcdd07f4673d.png)

7 - Execute o projeto:
python manage.py runserver















