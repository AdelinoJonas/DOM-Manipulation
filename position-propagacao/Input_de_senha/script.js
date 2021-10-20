const input = document.querySelector("#input .mostrarSenha");
const img = document.querySelector("#input img");

img.addEventListener('click', function (src) {

    input.type = input.type == 'text' ? 'password' : 'text';

    if(input.type === 'text'){
        img.src = src = 'assets/olho-aberto.svg';
    } else {
        img.src = src = 'assets/olho-fechado.svg';
    }

})
