# Generated by Django 4.2 on 2023-04-21 21:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_rename_cpnjcpf_credor_cnpjcpf'),
    ]

    operations = [
        migrations.RenameField(
            model_name='devedor',
            old_name='cpnjCpf',
            new_name='cnpjCpf',
        ),
    ]
