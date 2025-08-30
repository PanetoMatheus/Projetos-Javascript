const  data =[
    {
        min: 0,
        max: 18.4,
        info: "Magreza",
        color: "yellow"
    },

     {
        min: 18.5,
        max: 24.9,
        info: "Normal",
        color: "green"
    },

     {
        min: 25.0,
        max: 29.9,
        info: "Sobrepeso",
        color: "yellow"
    },

     {
        min: 30.0,
        max: 39.9,
        info: "Obesidade",
        color: "red"
    },

     {
        min: 40,
        max: 99,
        info: "Obesidade grave",
        color: "maroon"
    },
];

/////////////////////////////////////////////

function calcImc(peso, altura){
     const cimc = (peso/(altura*altura)).toFixed(2);
     return cimc;
}
///////////////////////////////////////////////////
let botaoUm = document.querySelector("#but1");
botaoUm.addEventListener("click", (e) =>{
    e.preventDefault();
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;

    
    let alturaF = parseFloat(altura.replace(',','.'));  
   let pesoF =parseFloat(peso.replace(',','.'));

   if(!pesoF|| !alturaF){
    alert("Digite os valores corretamente")
    return
   }


   const imc =  calcImc(pesoF, alturaF);
  

   let faixa;
   let color;
   data.forEach((item) => {
    if(imc >= item.min && imc <= item.max){
        faixa = item.info;
        color = item.color;
    }
   })

    if(!faixa){
        alert("Valores incorretos")
        return
    }



    mostarResult(imc,faixa, color);
   
    })

 

/////////////////////////////////////////////////////////////////////////

function limpar(){
    let altura = document.querySelector("#altura").value="";
     let peso = document.querySelector("#peso").value="";
}
/////////////////////////////////////////////////////////////////////////////

 function digitosValidos(text){
        return text.replace(/[^0-9,.]/g, "");
       }

    [altura,peso].forEach((el) =>{
        el.addEventListener("input", (e) =>{
            const valorAtualizado = digitosValidos(e.target.value);
            e.target.value =valorAtualizado;
        })
    })

    /////////////////////////////////////////////////////////////////////////
    function mostarResult(imc, faixa, color) {
        divUm = document.querySelector("#div1");
         divDois = document.querySelector("#div2");
         spnImc = document.querySelector("#imc");
         spnSituacao=document.querySelector("#spnsituacao");


         divUm.setAttribute("class", "hide");
         divDois.setAttribute("class", " ");

        
         spnImc.innerHTML = imc;
         spnImc.style.color = color;

         spnSituacao.innerHTML = " "+faixa;
         spnSituacao.style.color = color;
    }

/////////////////////////////////////////////////////////////////////////
   function reiniciar(){
      divUm = document.querySelector("#div1");
     divDois = document.querySelector("#div2");

      divDois.setAttribute("class", "hide");
     divUm.setAttribute("class", " ");

     let altura = document.querySelector("#altura").value="";
     let peso = document.querySelector("#peso").value="";
   }