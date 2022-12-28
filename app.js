localStorage.setItem (formulario, 10);

localStorage.setItem ('Nombre', 'Miguel')
localStorage.Apellido = 'Marquez Montoya'

var storage= "formuario";

let a = localStorage;

nombre.addEventListener ("focusout", function () {
    a.setItem ("nombre", nombre.value);
})

mail.addEventListener ("focusout", function () {
    a.setItem ("mail", mail.value);
})

mensaje.addEventListener ("focusout", function (){
    a.setItem ("mensaje", mensaje.value);
})


