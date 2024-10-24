document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    const soma = document.getElementById('soma');
    const subtracao = document.getElementById('subtracao');
    const multiplicacao = document.getElementById('multiplicacao');
    const divisao = document.getElementById('divisao');

    form.addEventListener('submit', function(e){
        e.preventDefault();
    });

    function getValues() {
        const numeroUm = Number(document.getElementById('valor-um').value);
        const numeroDois = Number(document.getElementById('valor-dois').value);
        return { numeroUm, numeroDois };
    }

    soma.addEventListener('click', function(){
        const { numeroUm, numeroDois } = getValues();
        let resultado = numeroUm + numeroDois;
        mostrarResultado(resultado);
    });

    subtracao.addEventListener('click', function(){
        const { numeroUm, numeroDois } = getValues();
        let resultado = numeroUm - numeroDois;
        mostrarResultado(resultado);
    });

    multiplicacao.addEventListener('click', function(){
        const { numeroUm, numeroDois } = getValues();
        let resultado = numeroUm * numeroDois;
        mostrarResultado(resultado);
    });

    divisao.addEventListener('click', function(){
        const { numeroUm, numeroDois } = getValues();
        if (numeroDois === 0) {
            alert('Não é possível dividir por zero!');
            return;
        }
        let resultado = numeroUm / numeroDois;
        mostrarResultado(resultado.toFixed(1));
    });
});

function mostrarResultado(valor) {
    document.getElementById('resultado-equacao').innerText = valor;
    document.querySelector('.resultado').style.display ='block'
}