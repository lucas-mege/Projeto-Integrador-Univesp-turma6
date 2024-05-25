// script.js

document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    // Verificar se todos os campos foram preenchidos
    var inputs = this.querySelectorAll('input, textarea');
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            alert('Por favor, preencha todos os campos!');
            event.preventDefault(); // Impede o envio do formulário
            return;
        }
    }

    // Verificar se a data é válida
    var dataInput = this.querySelector('#data');
    var data = new Date(dataInput.value);
    if (isNaN(data.getTime())) {
        alert('Por favor, insira uma data válida!');
        event.preventDefault();
        return;
    }

    // Verificar se a quantidade de pessoas é um número positivo
    var qtdPessoasInput = this.querySelector('#qtd_pessoas');
    if (parseInt(qtdPessoasInput.value) <= 0) {
        alert('Por favor, insira uma quantidade válida de pessoas!');
        event.preventDefault();
        return;
    }

    var obrigadoDiv = document.getElementById('obrigado');
    obrigadoDiv.style.display = 'block';

    // Ocultar o formulário após o envio
    this.style.display = 'none';

    // Impedir o envio padrão do formulário
    event.preventDefault();
});
