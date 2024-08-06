let divResultadoDireita = document.querySelector("div.resultado-texto");
let inputText = document.querySelector("textarea.input-texto");
let htmlNaoEncontrado = document.querySelector("div.resultado-texto").innerHTML;
let defaultPlaceholder = "Digite seu texto...";
let alertText = document.querySelector("span.info");
let errorPlaceholder =
  "Nenhuma mensagem a ser descriptografada, digite seu texto...";

let htmlNaoValido = `<img
                src="src/images/waiting_for_text/336 x 304.png"
                width="220px"
                height="200px"
                alt=""
              />
              <h3>Mensagem inválida</h3>
              <p>O conteúdo da mensagem não pode ser vazio ou conter acentos, números, e letras maiúsculas.</p>`;

let btnCopiar = `<div class="btn-acao-texto">
<button type="button" onclick="copiar()" class="btn botao-copiar">COPIAR</button>
</div>`;

function validarTexto(texto) {
  return !/[A-ZÀ-ü0-9]/.test(texto);
}

function escreverLadoDireito(texto) {
  /* Escreve no lado direito */
  divResultadoDireita.innerHTML = `<p class="mensagem"><strong>${texto}</strong></p>`;
  divResultadoDireita.innerHTML += btnCopiar;

  /* Limpa o texto no lado esquerdo e retorna o placeholder padrão */
  inputText.value = "";
  inputText.placeholder = "Digite seu texto...";
}

// function escreverLadoEsquerdo(texto) {
//   /* Escreve no lado esquerdo */
//   inputText.value = texto;

//   /* Limpa o texto no lado direito */
//   divResultadoDireita.innerHTML = htmlNaoEncontrado;
// }

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
    alertText.classList.remove("alert");
    escreverLadoDireito(mensagemCriptografada);
    console.log(mensagemCriptografada);
    return mensagemCriptografada;
  } else {
    let errMsg = "Deu errado";
    console.log(errMsg);
    // alert(errMsg)
    alertText.classList.add("alert");
    divResultadoDireita.innerHTML = htmlNaoValido;
  }
};

let descriptografar = function () {
  let textoEsquerda = document.querySelector("textarea.input-texto").value;

  if (validarTexto(textoEsquerda) && textoEsquerda != "") {
    let mensagemDescriptografada = textoEsquerda
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    alertText.classList.remove("alert");
    console.log(mensagemDescriptografada);
    escreverLadoDireito(mensagemDescriptografada);
    return mensagemDescriptografada;
  } else {
    console.log("Há algo errado no texto");
    inputText.placeholder = defaultPlaceholder;
    divResultadoDireita.innerHTML = htmlNaoValido;
  }
};

function copiar(texto) {
  let mensagemParaCopia = document.querySelector("p.mensagem").textContent;

  navigator.clipboard
    .writeText(mensagemParaCopia)
    .then(() => {
      // console.log(mensagemParaCopia);
      // console.log("Texto copiado para a área de transferência!");
      let stringAlerta = `O texto "${mensagemParaCopia}" foi copiado com sucesso.`;
      alert(stringAlerta);
    })
    .catch((error) => {
      console.error(
        "Falha ao copiar texto para a área de transferência:",
        error
      );
    });
}
