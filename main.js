const inputname = document.querySelector('#name');
const inputmail = document.querySelector('#mail');
const inputsubject = document.querySelector('#subject');
const inputmensaje = document.querySelector('#men');
const inputphone = document.querySelector('#phone')
const btnEnviar = document.querySelector('#enviar')
const btnlimpiar = document.querySelector('clean')



const Formulario = ()=> {

    console.log('click');
    const inputname = document.querySelector('#name').value
    const inputmail = document.querySelector('#mail').value
    const inputsubject = document.querySelector('#subject').value
/*     const inputmensaje = document.querySelector('#men').value
    const inputphone = document.querySelector('#phone').value
 */
    if(inputname==="" || inputmail ==="" || inputsubject===""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Te falta completar el nombre, el correo y el asunto!',
            color: '#000',
            background: '#fff',
            confirmButtonText:'Aceptar',
           
          })

        }else {
            console.log('listo');
        }
  /*   }else {
        const spinner = document.querySelector('#spinner');
       
        spinner.classList.add('activo');
        spinner.classList.remove('inactivo');
        setTimeout (() => {
            spinner.classList.remove('activo');
            spinner.classList.add('inactivo');
            formulario.reset();
        },3000)
    } */
}

btnEnviar.addEventListener('click', Formulario)