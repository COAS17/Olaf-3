// Función para abrir la carta
function abrirCarta() {
    const carta = document.getElementById('carta');
    carta.style.display = 'block';

    // Generar corazones flotantes
    generarCorazones();
}

// Función para generar corazones flotantes
function generarCorazones() {
    const heartsContainer = document.getElementById('heartsContainer');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.opacity = Math.random();
        heartsContainer.appendChild(heart);

        // Remover el corazón una vez que la animación termine
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// Función para mostrar el mensaje final
function mostrarMensajeFinal() {
    const carta = document.getElementById('carta');
    carta.style.display = 'none';

    const mensajeFinal = document.getElementById('mensajeFinal');
    mensajeFinal.style.display = 'block';
}
