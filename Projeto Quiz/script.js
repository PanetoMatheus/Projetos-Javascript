const data = [
    {
        pergunta: "Em JavaScript, qual operador é usado para comparação estrita (valor e tipo)?",
        A: "==",
        B: "===",
        C: "!=",
        D: "!==",
        correto: "B",
    },
    {
        pergunta: "Qual a principal função do comando git commit?",
        A: "Salvar alterações no repositório remoto",
        B: "Criar um ponto de verificação local",
        C: "Baixar mudanças de outro repositório",
        D: "Deletar arquivos versionados",
        correto: "A",
    },
    
     {
        pergunta: "Qual é a função do comando git init?",
        A: "Inicializar um novo repositório Git",
        B: "Baixar um repositório remoto",
        C: "Enviar alterações para o GitHub",
        D: "Reiniciar as configurações do Git",
        correto: "A",
    },
    {
        pergunta: "Qual é o resultado de 2 == '2' em JavaScript?",
        A: "undefined",
        B: "false",
        C: "true",
        D: "erro de sintaxe",
        correto: "C",
    },
    {
        pergunta: "Qual estrutura de dados segue o princípio FIFO (First In, First Out)?",
        A: "Pilha",
        B: "Fila",
        C: "Árvore",
        D: "Grafo",
        correto: "B",
    },
    {
        pergunta: "Qual palavra-chave em Java define uma classe herdando de outra?",
        A: "inherit",
        B: "extends",
        C: "super",
        D: "implements",
        correto: "B",
    },
    {
        pergunta: "Em SQL, qual comando é usado para excluir uma tabela inteira?",
        A: "DELETE",
        B: "TRUNCATE",
        C: "REMOVE",
        D: "DROP",
        correto: "D",
    },
    {
    pergunta: "Em CSS, qual propriedade é usada para mudar a cor de fundo do elemento?",
    A: "background-color",
    B: "font-color",
    C: "color",
    D: "text-style",
    correto: "A",
    },
    {
        pergunta: "No HTML5, qual atributo é usado para definir um texto alternativo em imagens?",
        A: "src",
        B: "href",
        C: "title",
        D: "alt",
        correto: "D",
    },
    {
        pergunta: "Qual a complexidade de tempo da busca binária em uma lista ordenada?",
        A: "O(n)",
        B: "O(n^2)",
        C: "O(log n)",
        D: "O(1)",
        correto: "C",
    },
]

let botaoA = '<span id="botaoA" class="alteranativas">A</span>'
let botaoB = '<span id="botaoB" class="alteranativas">B</span>'
let botaoC = '<span id="botaoC" class="alteranativas">C</span>'
let botaoD = '<span id="botaoD" class="alteranativas">D</span>'

let quiz = document.querySelector("#quiz");
let menu = document.querySelector("#menu");
let comecar = document.querySelector("#comecar");
let acertos = 0;
let i =0;

comecar.addEventListener("click", (event) => {
event.preventDefault()
menu.setAttribute("class", "escondido" );
quiz.setAttribute("class", "");

 mostrarPergunta();

})



function mostrarPergunta(){
    if(i >= data.length){
    quiz.setAttribute("class", "escondido");
    document.querySelector("#resultado").setAttribute("class", "");
    document.querySelector("#porcentagem").innerHTML = `<strong>${(acertos*100)/10}% </strong>`
    document.querySelector("#acertos").innerHTML = `Você acertou ${acertos} de ${data.length} perguntas!`
    document.querySelector("#refazer").addEventListener("click", () =>{
        window.location.reload()
    })
          return;
    }

let pergunta = document.querySelector("#pergunta")
let A = document.querySelector("#A");
let B = document.querySelector("#B");
let C = document.querySelector("#C");
let D = document.querySelector("#D");

let vetor =[A,B,C,D];
    
pergunta.innerHTML = ` <strong>${i+1}</strong> -  ${data[i].pergunta}`;
A.innerHTML = `${botaoA} ${data[i].A}`;
B.innerHTML = `${botaoB} ${data[i].B}`;
C.innerHTML = `${botaoC} ${data[i].C}`;
D.innerHTML = `${botaoD} ${data[i].D}`;


let opcoes = document.querySelectorAll(".button");
opcoes.forEach((e) =>{
    e.onclick = () =>{
        let idElement = e.id;
     if(idElement == data[i].correto){
        acertos +=1;
       }
       
       for(let j=0;j<vetor.length;j++){
        if(vetor[j].id == data[i].correto){
            vetor[j].style.backgroundColor = "green"
        }
        else{
            vetor[j].style.backgroundColor = "red"
        }
       }
       
       setTimeout(function() {
         i+=1
         mostrarPergunta()
         for(j=0;j<vetor.length;j++){
            vetor[j].style.backgroundColor = "white";
         }
       },2000)
        
        console.log(i);
    }
})

}









