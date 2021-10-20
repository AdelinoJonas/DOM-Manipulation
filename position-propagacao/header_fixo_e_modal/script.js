const imagensGaleria = document.querySelectorAll(".album img");
const imagemModal = document.querySelector(".modal img");
const modal = document.querySelector(".modal");

function abrirModal(src) {
    modal.style.display = 'flex';
    imagemModal.src = src;
}

imagensGaleria.forEach(imagem => {

    imagem.addEventListener('click', event => {
        abrirModal(event.target.src);
    })
});

modal.addEventListener('click', function(){
    modal.style.display = 'none';
})