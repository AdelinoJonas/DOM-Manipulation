const abrirFaq = document.querySelector('.button img');
const modal = document.querySelector('.modal');
const fecharFaq = document.querySelector('.button img');

function abrirEfechar() {

    let botaoAberto = modal.classList.contains('escondido');

    console.log(botaoAberto);

    if (botaoAberto) {
        abrirFaq.addEventListener('click', () => {
            modal.classList.remove('escondido');

            console.log(abrirFaq);
        })
    } else {
        fecharFaq.addEventListener('click', () => {
            modal.classList.add('escondido');

            console.log(fecharFaq);
        })

    }
}