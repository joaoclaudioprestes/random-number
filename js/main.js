const btnGerar = document.querySelector('#btn-gerar');

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btnGerar.addEventListener('click', (e) => {
    e.preventDefault();
    const min = parseInt(document.querySelector('#num-min').value);
    const max = parseInt(document.querySelector('#num-max').value);
    const result = document.querySelector('#result');

    if ((min >= max || max <= min) || !isNaN(min) || isNaN(max) || (min || max < 0)) {
        result.style.color = 'red';
        result.innerText = 'Inválido! Tente novamente.';
    } else {
        const numeroAleatorio = numAleatorio(min, max);
        result.style.color = '#fff';
        result.innerText = numeroAleatorio;
    }
});
