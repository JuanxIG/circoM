
document.getElementById('totalAmount').textContent = `Total: $${sessionStorage.getItem('totalPrice') || '0'}`;


function handlePayment() {
    // Primero, ejecuta la validación
    if (validateForm()) {
        // Si la validación es exitosa, ejecuta la otra función
        processPayment();
    }
}

function validateForm() {
    let isValid = true;

    // Limpiar mensajes de error previos
    document.querySelectorAll('.form-error').forEach(error => error.textContent = '');

    // Validación de Nombre en la Tarjeta
    const cardName = document.getElementById('cardName');
    const nameError = document.getElementById('nameError');
    if (!/^[a-zA-Z\s]+$/.test(cardName.value)) {
        nameError.textContent = 'Por favor, ingresa solo letras en el nombre.';
        isValid = false;
    }

    // Validación de Número de Tarjeta
    const cardNumber = document.getElementById('cardNumber');
    const numberError = document.getElementById('numberError');
    if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber.value)) {
        numberError.textContent = 'El número de tarjeta debe tener el formato 1234 5678 9012 3456.';
        isValid = false;
    }



    // Validación de CVV
    const cvv = document.getElementById('cvv');
    const cvvError = document.getElementById('cvvError');
    if (!/^\d{3}$/.test(cvv.value)) {
        cvvError.textContent = 'El CVV debe tener exactamente 3 dígitos.';
        isValid = false;
    }

    // Devuelve `true` si el formulario es válido, `false` si no lo es
    return isValid;
}

function processPayment() {

    alert('Procesando el pago...');

    window.location.href = 'index.html';
}


