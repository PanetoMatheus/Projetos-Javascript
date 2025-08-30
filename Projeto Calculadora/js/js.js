function insert(num) {
    document.getElementById("resultado").innerHTML+=num;
}

function clean() {
    document.getElementById("resultado").innerHTML = "";
}

function back() {
    let resultado = document.getElementById("resultado").innerHTML;

    let valor = resultado.substring(0, resultado.lenght -1);
    document.getElementById("resultado").innerHTML=valor;
}

function calcular() {
    let resultado = document.getElementById("resultado").innerHTML;
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);
    }
}