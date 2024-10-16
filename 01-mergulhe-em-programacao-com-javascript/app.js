alert("Boas vindas ao jogo do número secreto");

const numeroMaximo = prompt("Digite o número maximo do intervalo")
const numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 0;

while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
  tentativas++;

  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Parabéns! Acertou o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`);
