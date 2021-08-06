
function Soma(){
    var num = document.getElementById('Resultado');
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value); 
    var soma = (n1) + (n2);
    num.innerHTML = soma;

}

function Subitracao(){

    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value); 
    var Subitracao =(n1) -(n2);
    document.getElementById('Resultado').innerHTML = Subitracao;

}


function multiplicacao(){
    var num = document.getElementById('Resultado');
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2'); 
    var multiplicacao = (parseInt(n1.value) * parseInt(n2.value));
    num.innerHTML = multiplicacao;

}

function divisao(){
    var num = document.getElementById('Resultado');
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2'); 
    var divisao = (parseInt(n1.value) / parseInt(n2.value));
    num = divisao;

}

