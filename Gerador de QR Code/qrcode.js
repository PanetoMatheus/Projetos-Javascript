const criarImagem = (texto, color) => {
 
    const container = document.getElementById("paraimagem");
    const imagem = document.createElement("img");
    container.appendChild(imagem);
   
    const semhashtag = (color) =>{

        let str = color.split("");
        if(str[0] === '#'){
             str.shift();
              str.join("");
        }else{
                str.join("");
        }
    }
    
     let newColor = semhashtag(color)
    imagem.src = "https://api.qrserver.com/v1/create-qr-code/?data="+texto+"&size=130x130&bgcolor="+newColor;


}

const botao = document.getElementById("botao");
let i =0;

botao.addEventListener("click", () =>{
  
let texto = document.getElementById("texto").value;
let color = document.getElementById("color").value;

console.log(texto)

if(texto == ""){
    alert("Digite um texto ou link");
    return
}
else if(i>0) {
return
}
  i++;
criarImagem(texto, color);


     let entrada = document.querySelector("#texto");
     entrada.addEventListener("focus", () => {
        let imagem = document.querySelector("img");
        if(imagem ){
            imagem.remove();
            i=0;
        } 
    })

})





