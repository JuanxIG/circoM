document.getElementById('contactoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario si hay errores

    // Limpiar mensajes de error previos
    document.querySelectorAll('.error-message').forEach(error => error.style.display = 'none');

    // Variables de control
    let isValid = true;

    // Validación del correo
    const email = document.getElementById('correoContacto').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Ingrese un correo electrónico válido.';
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validación del teléfono
    const telefono = document.getElementById('telefonoContacto').value;
    const telefonoError = document.getElementById('telefonoError');
    const telefonoRegex = /^[0-9]{7,}$/;
    if (!telefonoRegex.test(telefono)) {
        telefonoError.textContent = 'Ingrese un teléfono válido (solo números, mínimo 7 dígitos).';
        telefonoError.style.display = 'block';
        isValid = false;
    }

    // Validación del mensaje
    const mensaje = document.getElementById('descripcionPuesto').value;
    const mensajeError = document.getElementById('mensajeError');
    if (mensaje.trim() === '') {
        mensajeError.textContent = 'Por favor ingrese un mensaje.';
        mensajeError.style.display = 'block';
        isValid = false;
    }

    // Validación del monto ofrecido
    const monto = document.getElementById('montoOfrecido').value;
    const montoError = document.getElementById('montoError');
    if (isNaN(monto) || monto <= 0) {
        montoError.textContent = 'Ingrese un monto válido (número positivo).';
        montoError.style.display = 'block';
        isValid = false;
    }

    // Si todas las validaciones son correctas, enviar el formulario
    if (isValid) {
        alert('Formulario enviado con éxito.');
        document.getElementById('contactoForm').submit(); // Enviar el formulario
    }
});

