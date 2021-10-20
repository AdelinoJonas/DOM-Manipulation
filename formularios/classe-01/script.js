const formulario = document.querySelector('form');
const submit = document.querySelector('input');

formulario.addEventListener('submit',event=>{
    if(!submit.value){
        event.preventDefault();
    }
})