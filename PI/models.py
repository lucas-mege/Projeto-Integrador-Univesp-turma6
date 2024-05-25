from django.db import models

class FormInsert(models.Model):
    class Meta:
        db_table="Atividades"
    atividade = models.CharField(max_length=255)
    oficineiro = models.CharField(max_length=255)
    data = models.DateField()
    local = models.CharField(max_length=511)
    qtd_pessoas = models.IntegerField()
    def __str__(self):
        return self.atividade