let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
let qtdSuperior = document.getElementById("qtd-superior").textContent;
let qtdInferior = document.getElementById("qtd-inferior").textContent;

function comprar() {
  let tipoDeIngreso = document.getElementById("tipo-ingresso").value;
  let quantidade = parseInt(document.getElementById("qtd").value);

  if (tipoDeIngreso == "pista") {
    comprarPista(quantidade);
  } else if (tipoDeIngreso == "superior") {
    comprarSuperior(quantidade);
  } else {
    comprarInferior(quantidade);
  }

  let lista = document.getElementById("lista");

  lista.innerHTML = `
    <li>Pista<span id="qtd-pista">${qtdPista}</span></li>
    <li>Cadeira superior<span id="qtd-superior">${qtdSuperior}</span></li>
    <li>Cadeira inferior<span id="qtd-inferior">${qtdInferior}</span></li>
  `;
}

function comprarPista(quantidade) {
  if (quantidade > qtdPista) {
    alert("Quantidade indisponível para pista");
  } else {
    qtdPista = qtdPista - quantidade;
    qtdPista.textContent = qtdPista;
  }
}

function comprarSuperior(quantidade) {
  if (quantidade > qtdSuperior) {
    alert("Quantidade indisponível para cadeira superior");
  } else {
    qtdSuperior = qtdSuperior - quantidade;
    qtdSuperior.textContent = qtdSuperior;
  }
}

function comprarInferior(quantidade) {
  if (quantidade > qtdInferior) {
    alert("Quantidade indisponível para cadeira inferior");
  } else {
    qtdInferior = qtdInferior - quantidade;
    qtdInferior.textContent = qtdInferior;
  }
}


/* function comprar() {
  let tipoDeIngreso = document.getElementById("tipo-ingresso").value;
  let quantidade = document.getElementById("qtd").value;
  let qtdPista = document.getElementById("qtd-pista").textContent;
  let qtdSuperior = document.getElementById("qtd-superior").textContent;
  let qtdInferior = document.getElementById("qtd-inferior").textContent;

  if (tipoDeIngreso == "pista") {
    qtdPista = qtdPista - quantidade;
  } else if (tipoDeIngreso == "superior") {
    qtdSuperior = qtdSuperior - quantidade;
  } else {
    qtdInferior = qtdInferior - quantidade;
  }

  let lista = document.getElementById("lista");

  lista.innerHTML = `
    <li>Pista<span id="qtd-pista">${qtdPista}</span></li>
    <li>Cadeira superior<span id="qtd-superior">${qtdSuperior}</span></li>
    <li>Cadeira inferior<span id="qtd-inferior">${qtdInferior}</span></li>
  `;
} */
