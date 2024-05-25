from django.shortcuts import render
from PI.models import FormInsert
from django.contrib import messages

def Insertrecord(request):
    if request.method == 'POST':
        if request.POST.get('atividade') and request.POST.get('oficineiro') and request.POST.get('data') and request.POST.get('local') and request.POST.get('qtd_pessoas'):
            saverecord = FormInsert()
            saverecord.atividade = request.POST.get('atividade')
            saverecord.oficineiro = request.POST.get('oficineiro')
            saverecord.data = request.POST.get('data')
            saverecord.local = request.POST.get('local')
            saverecord.qtd_pessoas = request.POST.get('qtd_pessoas')
            saverecord.save()
            messages.success(request, "Formulário salvo com sucesso!")
            return render(request, 'formulario.html')
    else:
        return render(request, 'formulario.html')

def capa(request):
    return render(request, 'capaa.html')
