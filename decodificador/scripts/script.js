function validateText(texto) {
  return !/[A-ZÀ-ü0-9]/.test(texto);
}

let criptografar = function () {
  let inputText = document.querySelector("textarea.input-texto").value;

  if (validateText(inputText)) {
    let teste = inputText
      .replaceAll("a", "ai")
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");

    console.log(teste);

    return teste;
  } else {
    console.log("Deu errado");
  }
};

let descriptografar = function () {
  let textoCriptografado = document.querySelector(
    "div.resultado-texto"
  ).innerHTML;

  if (validateText(textoCriptografado)) {
    let teste = textoCriptografado
      .replaceAll("ai", "a")
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");

    console.log(teste);
    return teste;
  } else {
    console.log("Há algo errado no texto");
  }
};
