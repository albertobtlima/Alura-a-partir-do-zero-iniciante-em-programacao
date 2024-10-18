/* let totalGeral = 0;
let carrinho = document.getElementById("lista-produtos");
let valorTotal = document.getElementById("valor-total");

function adicionar() {
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorProduto = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  let valorTotalProduto = valorProduto * quantidade;

  carrinho.innerHTML =
    carrinho.innerHTML +
    `
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${valorProduto}</span>
    </section>
  `;

  totalGeral = totalGeral + valorTotalProduto;

  valorTotal.textContent = `R$${totalGeral}`;

  document.getElementById("quantidade").value = 0;
}

function limpar() {
  totalGeral = 0;
  carrinho = (document.getElementById("lista-produtos").innerHTML = "");
  valorTotal = (document.getElementById("valor-total").textContent = "R$0");
} */

let totalGeral;
limpar();

function adicionar() {
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  let preco = quantidade * valorUnitario;

  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;

  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$0";
}
