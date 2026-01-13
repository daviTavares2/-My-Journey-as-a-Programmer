 //Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.
let a =  Number(prompt("Digite A valor"));
let b =  Number(prompt("Digite B valor"));
let c = Number(prompt("Digite C valor"));


if ( a < b && b < c ){
    alert("C ,B ,A" );
   
    if (  a < b && c < b ){
          
        alert("B ,C ,A" );
           
            else if (b < a &&  c < a && b < c){
                
                alert("A , C , B");
                
                else if (b < a &&  c > a && b < c ){
                     
                    alert("C , A , B");
                     
                    else if (c < a && c < b && b < a ){ 
                        
                        alert("A , B , C");
                        
                        else {
                           alert("B , A, C");
                        }
                    }
                }
           }
      }
}