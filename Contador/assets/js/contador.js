let incremento=document.querySelector('#incremento');
let decremento=document.querySelector('#decremento');
let reset=document.querySelector('#reset');
let valorContador=document.querySelector('#valorContador');

let contador=0;


incremento.addEventListener('click', ()=>{

    contador++;
    if(contador>0){
        valorContador.style.color='#198754';
    }

    valorContador.innerHTML=contador;

  

});

decremento.addEventListener('click', ()=>{

    contador--;
    if(contador<0){
        valorContador.style.color='#dc3545';
    }

    valorContador.innerHTML=contador;

});


reset.addEventListener('click', ()=>{

    contador=0;
    if(contador===0){
        valorContador.style.color='#ffc107';
    }
    Swal.fire(
        'Contador resetado!',
  '',
  'success'
      )
    valorContador.innerHTML=contador;

});





