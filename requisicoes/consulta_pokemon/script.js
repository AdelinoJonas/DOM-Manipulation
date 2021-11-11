const pokemonInput = document.querySelector('#poke')
const nome = document.querySelector('.nome');
const img = document.querySelector('.img');


pokemonInput.addEventListener('change', () => {

    const promiseResposta = fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonInput.value);

    console.log(promiseResposta);

    promiseResposta.then(function (resposta) {
        const promiseBody = resposta.json();
    console.log(promiseBody);
        promiseBody.then(function (body) {
            nome.textContent = body.name;
            img.src = body.sprites.front_default;
            img.alt = body.name; 
        })
    });
})

