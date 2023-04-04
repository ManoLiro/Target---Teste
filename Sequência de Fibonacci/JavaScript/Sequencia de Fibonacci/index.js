let number = parseInt(prompt("Digite um número: "));
while(isNaN(number)){
    window.alert("Digite um Valor Valido!")
    number = parseInt(prompt("Digite um número: "));
}
let a = 0, b = 1, c;
while (a <= number) {
  if (a === number) {
    window.alert(`${number} pertence à sequência de Fibonacci!`);
    break;
  }
  c = a + b;
  a = b;
  b = c;
}

if (a !== number) {
    window.alert(`${number} não pertence à sequência de Fibonacci!`);
}
