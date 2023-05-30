const inputname = document.querySelector('#name');
const inputmail = document.querySelector('#mail');
const inputsubject = document.querySelector('#subject');
const inputmensaje = document.querySelector('#men');
const inputphone = document.querySelector('#phone')
const btnEnviar = document.querySelector('#enviar')
const btnlimpiar = document.querySelector('clean')



const Formulario = (e)=> {
    e.preventDefault();

    const inputname = document.querySelector('#name').value
    const inputmail = document.querySelector('#mail').value
    const inputsubject = document.querySelector('#subject').value
    const inputmensaje = document.querySelector('#men').value
    const inputphone = document.querySelector('#phone').value

    if(inputname==="" || inputmail ==="" || inputsubject==="" || inputmensaje===""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Te falta completar el nombre, el correo y el asunto!',
            color: '#000',
            background: '#fff',
            confirmButtonText:'Aceptar',
           
          })

    }else {
        Toastify({
            text: "Mensaje enviado correctamente!",
            className: "info",
            style: {
              background: "linear-gradient(to right, #053714, #229730)",
            }
          }).showToast();
          console.log('listo');
    }
}
btnEnviar.addEventListener('click', Formulario)