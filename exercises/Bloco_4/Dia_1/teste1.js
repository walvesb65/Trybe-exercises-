/* Questão 1
let a = 8;
let b = 5;

let soma = a + b;
let subtracao = a - b;
let divisao = a / b;
let multiplicacao = a * b;
let modulo = a % b;

 console.log(soma, subtracao, divisao, multiplicacao, modulo) 

Questão 2 
let num1 = 8;
let num2 = 5;

 if(num1 > num2){
  console.log(num1) 
}else{
  console.log(num2) 
} 

   Questão 3 
let num3 = 8;
let num4 = 5;
let num5 = 29;

if(num3 > num4 && num3 > num5){
  console.log(num3) 
}else if(num4 > num3 && num4 > num5){
  console.log(num4) 
}else{
  console.log(num5) 
}

/*Questão 4

let numero = 10;

if(numero > 20){
  console.log('positivo');
} else if (numero < 20) {
  console.log('negativo');
} else { 
  console.log('zero');
}

 Quateão 5 

 let lado1 = 40;
 let lado2 = 100;
 let lado3 = 40;
 
 let somalados = lado1 + lado2 + lado3;
 
 if (somalados === 180) {
   console.log(true);
 } else {
   console.log(false);
 };

  Questão 6 

let peca = 'torre';

switch(peca){
  case 'rei':
    console.log('Pode mover-se em qualquer direção');
    break;
  case 'rainha':
    console.log('pode mover-se em qualquer direção varias vezes');
    break;
  case 'torre':
    console.log('Move-se em linha reta, tanto na vertical quanto na horizonta');
    break;
  case 'bispo':
    console.log('Move-se na diagonal, quantas casas quiser');
    break;
  case 'cavalo':
    console.log('O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L');
    break;
  case 'peão':
    console.log('É o que morre');
    break;
   default:
    console.log('nenhuma peça valida');
}

 Questão 7 

 let nota = 110;

 if(nota>=0 && nota <=100){
 if(nota >= 90){
    console.log('A')
  }else if (nota >=80){
    console.log('B')
  }else if (nota >= 70){
    console.log ('C')
  }else if (nota >= 60){
    console.log('D')
  }else if (nota >= 50){
    console.log('E')
  }else{
    console.log('F')
  }
}else{
  console.log('nosta invalida')
}

 Questão 8
let num1 = 20;
let num2 = 10;
let num3 = 40;

if (num1 %2 === 0|| num2 %2 === 0|| num3 %2 ===0){
  console.log(true);
}else{
  console.log(false);
}

Questão 9 

let num1 = 30;
let num2 = 20;
let num3 = 40;

if (num1 %2 !== 0|| num2 %2 !== 0|| num3 %2 !==0){
  console.log(true);
}else{
  console.log(false);
}
Questão 10

Questão 10 
let custoProduto = 5;
let valorVenda = 8;
let valorCustoTotal;
let lucro;

if(custoProduto < 0 || valorVenda < 0){
  console.log("Pane no sistema! Erro!");
}else{
  valorCustoTotal = custoProduto + (0.2 * custoProduto);
  lucro = valorVenda - valorCustoTotal
  console.log(lucro * 1000);
} */