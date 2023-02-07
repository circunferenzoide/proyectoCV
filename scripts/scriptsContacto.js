//evento de cierre de alerta al presionar escape
document.addEventListener('keydown',  e => {
    if (e.key == 'Escape') {
        if (document.getElementById('alerta-exito').style.display == "block") {
            cerrarAlerta();
        }
    }
});

//funcion de mostrar alerta de formulario enviado
abrirAlerta = () => {
    document.getElementById('alerta-exito').style.display = "block";
}

//funcion de cierre de alerta de formulario enviado
cerrarAlerta = () => {
    document.getElementById('alerta-exito').style.display = "none";
}

const formContacto = document.getElementById('formContacto');
const inputNombre = document.getElementById('inputNombre');
const inputTelefono = document.getElementById('inputTelefono');
const inputEmail = document.getElementById('inputEmail');

//evento de campo de nombre en formulario no valido por falta de ingreso de datos en campo obligatorio
inputNombre.addEventListener('invalid', () => {
    if (inputNombre.validity.valueMissing) {
        inputNombre.setCustomValidity('Este campo es obligatorio');
    } else {
        inputNombre.setCustomValidity('');
    }
});

//evento de campo de telefono en formulario no valido por falta de ingreso de datos en campo obligatorio o formato incorrecto
inputTelefono.addEventListener('invalid', () => {
    if(inputTelefono.validity.valueMissing) {
        inputTelefono.setCustomValidity('Este campo es obligatorio');
    } else if (inputTelefono.validity.patternMismatch) {
        inputTelefono.setCustomValidity('El número de teléfono debe tener el siguiente formato: 123-456-7890');
    } else {
        inputTelefono.setCustomValidity('');
    }
});

//evento de campo de email en formulario no valido por falta de ingreso de datos en campo obligatorio o formato incorrecto
inputEmail.addEventListener('invalid', () => {
    if (inputEmail.validity.valueMissing) {
        inputEmail.setCustomValidity('Este campo es obligatorio');
    } else if (inputEmail.validity.typeMismatch) {
        inputEmail.setCustomValidity('Debe introducir un email válido');
    } else {
        inputEmail.setCustomValidity('');
    }
});

//evento de envio de formulario que muestra alerta de exito
formContacto.addEventListener('submit', (e) => {
    e.preventDefault();
    const valoresEnviados = Array.from(e.target.elements);
    valoresEnviados.map(elemento => {
        console.log(`Input: ${elemento.name}, valor: ${elemento.value}`);
    });
    abrirAlerta();
    e.target.reset();;
});