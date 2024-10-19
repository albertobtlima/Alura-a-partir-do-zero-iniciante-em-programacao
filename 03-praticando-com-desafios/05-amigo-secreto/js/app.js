let amigos = [];

function adicionar() {
  let nomeDoAmigo = document.getElementById("nome-amigo");
  let listaDeAmigos = document.getElementById("lista-amigos");

  amigos.push(nomeDoAmigo.value);

  nomeDoAmigo.value = "";
  listaDeAmigos.textContent = amigos.join(", ");
}

function embaralhar(amigos) {
  for (let i = amigos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
  }

  return amigos;
}

function sortear() {
  embaralhar(amigos);
  let sorteio = document.getElementById("lista-sorteio");

  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML += amigos[i] + " -> " + amigos[0] + "<br>";
    } else {
      sorteio.innerHTML += amigos[i] + " -> " + amigos[i + 1] + "<br>";
    }
  }
}
