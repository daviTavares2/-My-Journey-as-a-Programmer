function conversor(C){
  let f = C * 1.8 + 32;
  alert("O Valor é " + f + " Fahrenheit");
}

function main(){
  let celsius = prompt("Qual a temperatura em Celsius?");
  conversor(celsius);
}

main();
