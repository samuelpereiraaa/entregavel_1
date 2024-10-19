///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Calculadora(number1, number2, operador) {
      let number1 = parseInt
      let number2 = parseInt
      
      operador = prompt('digite o operador para seu cálculo: (+), (-), (*), (/), (e)')
      let resultado
      
     switch (operador) {

        case '+':
          resultado = number1 + number2
          console.log ('soma: ' + resultado)
          break

        case '-':
          resultado = number1 - number2
          console.log ('subtração: ' + resultado)
          break
        
        case '*':
          resultado = number1 * number2
          console.log ('multiplicação: ' + resultado)
          break
        
        case '/':
          resultado = number1 / number2
          console.log ('divisão: ' + resultado)
          break
          
        case 'e':
          resultado = 1
          let i = 0
          
          for(i; i<number2; i++){
            resultado *= number1
          }
      default :
        console.log('Operador inválido!')
      }
      
      if(resultado === undefined || resultado >=1.0000){
            resulado === "ERRO"
            console.log(resultado)      
      }
 }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}