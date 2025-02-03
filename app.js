let amigos = [];

function adicionarAmigo() {
  let nomesDigitados = document.querySelector("input").value;
  amigos.push(nomesDigitados);
  limparCampo();
  console.log(amigos);

  if (nomesDigitados == 0) {
    alert("Por favor, digite um nome válido.");
    amigos = [];
  }

  let listaAmigos = document.querySelector("ul");
  listaAmigos.innerHTML = amigos;
}

function limparCampo() {
  nomesDigitados = document.querySelector("input");
  nomesDigitados.value = "";
}

function atualizarLista() {
  let lista = document.querySelector("ul");
  lista.innerHTML = "";
  amigos = [];
}

function sortearAmigo() {
  let res = document.getElementById("resultado");
  let nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  console.log(nomeSorteado);
  
  if (amigos.length == 0) {
    alert("Por favor, Adicione nomes ao campo para realizar o sorteio.");
  } else if (amigos.length == 1) {
    alert(
      "Adicione pelo menos dois nomes à lista para o sorteio ser realizado."
    );
  } else {
    res.innerHTML = `O amigo sorteado é: ${nomeSorteado}`;
    atualizarLista();
  }
  
}
