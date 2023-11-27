document.addEventListener('DOMContentLoaded', () => {
    // Puedes agregar aquí la lógica específica para manejar eventos del formulario
    const form = document.querySelector('#formComponent form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Formulario Enviado!');
    });
});
