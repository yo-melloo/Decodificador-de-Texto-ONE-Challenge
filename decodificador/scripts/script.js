let divResultadoDireita = document.querySelector("div.resultado-texto");
let inputText = document.querySelector("textarea.input-texto");
let htmlNaoEncontrado = document.querySelector("div.resultado-texto").innerHTML;
let htmlNaoValido = `<img
                src="src/images/waiting_for_text/336 x 304.png"
                width="220px"
                height="200px"
                alt=""
              />
              <h3>Mensagem inválida</h3>
              <p>O conteúdo da mensagem não pode ser vazio ou conter acentos, números, e letras maiúsculas.</p>`;

function validarTexto(texto) {
  return !/[A-ZÀ-ü0-9]/.test(texto);
}

function escreverLadoDireito(texto) {
  /* Escreve no lado direito */
  divResultadoDireita.innerHTML = texto;

  /* Limpa o texto no lado esquerdo e retorna o placeholder padrão */
  inputText.value = "";
  inputText.placeholder = "Digite seu texto...";
}

function escreverLadoEsquerdo(texto) {
  /* Escreve no lado esquerdo */
  inputText.value = texto;

  /* Limpa o texto no lado direito */
  divResultadoDireita.innerHTML = htmlNaoEncontrado;
}

let criptografar = function () {
  let mensagem = inputText.value; // <-- já pega valor atualizado

  if (validarTexto(mensagem) && mensagem != "") {
    /* Só realiza a criptografia se a mensagem não for vazio ('') e o seu valor for válido */
    let mensagemCriptografada = mensagem
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");

    escreverLadoDireito(mensagemCriptografada);
    console.log(mensagemCriptografada);
    return mensagemCriptografada;
  } else {
    let errMsg = "Deu errado";
    console.log(errMsg);
    // alert(errMsg)
    divResultadoDireita.innerHTML = htmlNaoValido;
  }
};

let descriptografar = function () {
  /* Pega texto da direita */
  let textoDireita = document.querySelector("div.resultado-texto").innerHTML;
  /* Pega texto da esquerda */
  let textoEsquerda = document.querySelector("textarea.input-texto").value;

  if (
    validarTexto(textoDireita) &&
    textoDireita != htmlNaoEncontrado &&
    textoDireita != htmlNaoValido
  ) {
    let mensagemDescriptografada = textoDireita
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    console.log(mensagemDescriptografada);
    escreverLadoEsquerdo(mensagemDescriptografada);
    return mensagemDescriptografada;
  } else if (textoEsquerda != "") {
    let mensagemDescriptografada = textoEsquerda
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    console.log(mensagemDescriptografada);
    escreverLadoEsquerdo(mensagemDescriptografada);
    return mensagemDescriptografada;
  } else {
    console.log("Há algo errado no texto");
    inputText.placeholder =
      "Nenhuma mensagem a ser descriptografada, digite seu texto...";
  }
};
