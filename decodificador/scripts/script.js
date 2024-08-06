const divResultadoDireita = document.querySelector("div.resultado-texto");
const inputText = document.querySelector("textarea.input-texto");
const alertText = document.querySelector("span.info");
const htmlNaoEncontrado = divResultadoDireita.innerHTML;
const defaultPlaceholder = "Digite seu texto...";
const errorPlaceholder =
  "Nenhuma mensagem a ser descriptografada, digite seu texto...";

const htmlNaoValido = `
    <img src="src/images/waiting_for_text/336 x 304.png" width="220px" height="200px" alt="" class="imagem-conteudo" />
    <h3>Mensagem inválida</h3>
    <p>O conteúdo da mensagem não pode ser vazio ou conter acentos, números, e letras maiúsculas.</p>`;

const btnCopiar = `
    <div class="btn-acao-texto">
        <button type="button" onclick="copiar()" class="btn botao-copiar">COPIAR</button>
    </div>`;

function validarTexto(texto) {
  return !/[A-ZÀ-ü0-9]/.test(texto);
}

function escreverLadoDireito(texto) {
  divResultadoDireita.innerHTML = `<p class="mensagem"><strong>${texto}</strong></p>`;
  divResultadoDireita.innerHTML += btnCopiar;
  inputText.value = "";
  inputText.placeholder = defaultPlaceholder;
}

function criptografar() {
  const mensagem = inputText.value;
  if (validarTexto(mensagem) && mensagem !== "") {
    const mensagemCriptografada = mensagem
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    alertText.classList.remove("alert");
    escreverLadoDireito(mensagemCriptografada);
    return mensagemCriptografada;
  } else {
    alertText.classList.add("alert");
    divResultadoDireita.innerHTML = htmlNaoValido;
  }
}

function descriptografar() {
  const textoEsquerda = inputText.value;
  if (validarTexto(textoEsquerda) && textoEsquerda !== "") {
    const mensagemDescriptografada = textoEsquerda
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    alertText.classList.remove("alert");
    escreverLadoDireito(mensagemDescriptografada);
    return mensagemDescriptografada;
  } else {
    inputText.placeholder = defaultPlaceholder;
    divResultadoDireita.innerHTML = htmlNaoValido;
  }
}

function copiar() {
  const mensagemParaCopia = document.querySelector("p.mensagem").textContent;
  navigator.clipboard
    .writeText(mensagemParaCopia)
    .then(() => {
      alert(`O texto "${mensagemParaCopia}" foi copiado com sucesso.`);
    })
    .catch((error) => {
      console.error(
        "Falha ao copiar texto para a área de transferência:",
        error
      );
    });
}
