

const criarLinha = (num, mult,tabela) => {

    for(let i = 0; i<=mult; i++){
       let myText = document.createTextNode(num + " "+ "X" +" "+ i + " "+"="+" "+ num*i);
        let tr  = document.createElement("tr");
        tr.appendChild(myText);
        tabela.appendChild(tr);
    }
}


let botao = document.querySelector("#botao");

botao.addEventListener("click", () =>{
   let num = document.querySelector("#num").value;
    let mult = document.querySelector("#mult").value;
    let informe = document.querySelector("#informe");
    let mostrar = document.querySelector("#mostrar");
    let tabela = document.querySelector("table");

    if(num == '' || mult == ''){
        alert("Você não digitou os valores corretamente");
    }

    let valor = document.querySelector(".numerodigitado");
    valor.innerHTML = 'Taboada do número'+ " "+ num;

    informe.remove();

      criarLinha(num, mult, tabela);

    criaReiniciar(mostrar, tabela, num, mult);
});

const criaReiniciar = (mostrar, tabela, num, mult) => {
    let mySecondText = document.createTextNode("Reiniciar");
    let botaoDois = document.createElement("button");
    botaoDois.appendChild(mySecondText);
    mostrar.appendChild(botaoDois);
    botaoDois.id = "botaoDois";

    let enviar = document.getElementById("botaoDois");
   
     enviar.addEventListener("click", () => {
    let table = document.querySelector("table");
       table.innerHTML = "";
    myThirdiText = document.createTextNode("Informe um número para calcular uma taboada");
    let voltar= document.createElement("p");
    voltar.appendChild(myThirdiText);
    tabela.appendChild(voltar);
    voltar.id = "informe";
    enviar.remove();
});
}
   



