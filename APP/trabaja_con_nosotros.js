function validarFormulario() {
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;

// Validar nombre (3 letras o más)
if (nombre.length < 3) {
    alert('El nombre debe tener al menos 3 letras.');
    return false;
}

// Validar correo electrónico
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (!emailPattern.test(email)) {
    alert('El correo electrónico no es válido.');
    return false;
}

// Validar teléfono (números solamente)
const telefonoPattern = /^[0-9]+$/;
if (!telefonoPattern.test(telefono)) {
    alert('El teléfono debe contener solo números.');
    return false;
}

return true; // Si todo es válido, se envía el formulario
}