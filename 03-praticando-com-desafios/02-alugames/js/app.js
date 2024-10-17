function alterarStatus(id) {
  let jogoClicado = document.getElementById(`game-${id}`);
  let imagemJogo = jogoClicado.querySelector(".dashboard__item__img");
  let botao = jogoClicado.querySelector(".dashboard__item__button");
  let nomeJogo = jogoClicado.querySelector(".dashboard__item__name");

  if (botao.classList.contains("dashboard__item__button--return")) {
    if (confirm(`Devolver o jogo ${nomeJogo.textContent}?`)) {
      botao.classList.remove("dashboard__item__button--return");
      botao.textContent = "Alugar";
      imagemJogo.classList.remove("dashboard__item__img--rented");
    }
  } else {
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";
    imagemJogo.classList.add("dashboard__item__img--rented");
  }
}
