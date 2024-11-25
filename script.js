// Validación simple para el formulario de contacto
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (nombre && email && mensaje) {
        alert('¡Mensaje enviado con éxito!');
        // Aquí podrías agregar una función para enviar los datos a un servidor
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
