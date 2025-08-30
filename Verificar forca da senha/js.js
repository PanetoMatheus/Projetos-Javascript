let checkbox = document.querySelectorAll(".caixa");

checkbox.forEach((e) =>{
    e.addEventListener("click", () =>{
        e.checked = false
    })
})

let input = document.querySelector("#password");
let escritos = document.querySelectorAll(".texto");
input.addEventListener("input", () =>{
    let i = 0;
   input = document.querySelector("#password").value;
  
         if(input.length >= 8){
         i++;
         checkbox[0].checked = true;
         escritos[0].style.color = "green"
        }else{
            checkbox[0].checked =false;
            escritos[0].style.color = "black"
        }

        if(input.match(/[A-Z]/)){
        i++;
        checkbox[1].checked = true;
         escritos[1].style.color = "green"

         }else{
            checkbox[1].checked = false;
            escritos[1].style.color = "black"
         }

         if(input.match(/[a-z]/)){
        i++;
        checkbox[2].checked = true;
         escritos[2].style.color = "green"

         }else{
            checkbox[2].checked = false;
            escritos[2].style.color = "black"
         }

         
         if(input.match(/[0-9]/)){
        i++;
        checkbox[3].checked = true;
         escritos[3].style.color = "green"

         }else{
            checkbox[3].checked = false;
            escritos[3].style.color = "black"
         }

          if(input.match(/[^a-zA-Z0-9]/)){
          i++;
        checkbox[4].checked = true;
         escritos[4].style.color = "green"
         }else{
            checkbox[4].checked = false;
            escritos[4].style.color = "black"
         }

         calcForca(i);
} )


function calcForca(i){
    let mudar = document.querySelector("#forca-senha");
    switch(i){
        case 1:
             mudar.innerHTML = "Senha muito fraca"
             mudar.style.color = "#e70b0b"; break; 
        
        case 2:
             mudar.innerHTML = "Senha fraca"
             mudar.style.color = "orange"; break; 
        
        case 3:
             mudar.innerHTML = "Senha moderada"
             mudar.style.color = "#EEAD2D"; break; 

        case 4:
             mudar.innerHTML = "Senha forte"
             mudar.style.color = "#009929"; break; 

        case 5:
             mudar.innerHTML = "Senha muito forte"
             mudar.style.color = "#006414"; break; 
    
    default:
         mudar.style.color = "transparent"; break; 
    }
}

