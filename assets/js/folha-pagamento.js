const form = document.getElementById('calculo');
const nome = document.getElementById('nome');
const cpf = document.getElementById('cpf');
const funcao = document.getElementById('funcao');
const salario = document.getElementById('salario');
const diasTrabalhados = document.getElementById('diasTrabalhados');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const valorDia = salario/30
    const recibo = document.getElementById('recibo')
    recibo.innerHTML = ('<p> Teste </p>')
    /*alert(`O funcionário ${nome.value} inscrito no cpf: ${cpf.value} exercendo a função de ${funcao.value} com o salário mensal de ${salario.value} trabalhou um total de ${diasTrabalhados.value} dias.`) alert para testar se está puxando os valores certos*/
})
