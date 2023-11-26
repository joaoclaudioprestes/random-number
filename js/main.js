const btnGerar = document.querySelector("#btn-gerar");
const spanResult = document.querySelector("#result");

function erro(mensagem) {
  alert(`ERRO: ${mensagem}`);
  spanResult.innerText = "00";
}

function numAleatorio(min, max) {
  let numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return numRandom;
}

btnGerar.addEventListener("click", (e) => {
  e.preventDefault();
  const min = document.querySelector("#num-min").value;
  const max = document.querySelector("#num-max").value;

  if (!isNaN(min) && !isNaN(max)) {
    let result = numAleatorio(parseInt(min), parseInt(max));
    spanResult.innerText = result < 10 ? `0${result}` : result;
  } else {
    erro("Preencha os dois campos com valores numéricos válidos.");
  }
});
