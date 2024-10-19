function comprar() {
  let tipo = document.getElementById("tipo-ingresso");
  let qtdInput = document.getElementById("qtd");
  let qtd = parseInt(qtdInput.value);

  if (isNaN(qtd) || qtd <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  if (tipo.value == "pista") {
    comprarPista(qtd);
  } else if (tipo.value == "superior") {
    comprarSuperior(qtd);
  } else {
    comprarInferior(qtd);
  }
}

function comprarPista(qtd) {
  let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
  if (qtd > qtdPista) {
    alert("Quantidade indisponível para tipo pista");
  } else {
    qtdPista = qtdPista - qtd;
    document.getElementById("qtd-pista").textContent = qtdPista;
    alert("Compra realizada com sucesso!");
  }
}

function comprarSuperior(qtd) {
  let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
  if (qtd > qtdSuperior) {
    alert("Quantidade indisponível para tipo superior");
  } else {
    qtdSuperior = qtdSuperior - qtd;
    document.getElementById("qtd-superior").textContent = qtdSuperior;
    alert("Compra realizada com sucesso!");
  }
}

function comprarInferior(qtd) {
  let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
  if (qtd > qtdInferior) {
    alert("Quantidade indisponível para tipo inferior");
  } else {
    qtdInferior = qtdInferior - qtd;
    document.getElementById("qtd-inferior").textContent = qtdInferior;
    alert("Compra realizada com sucesso!");
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
