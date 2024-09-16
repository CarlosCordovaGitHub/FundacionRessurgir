// Función para redimensionar imágenes en la galería
function resizeGalleryImages() {
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(image => {
        image.style.width = '100%'; // Ajusta el ancho al 100% del contenedor
        image.style.height = 'auto'; // Mantiene la relación de aspecto
    });
}

// Función para mostrar u ocultar secciones de contenido
function toggleContent(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

// Función para aplicar efectos de animación en el contenido
function applyAnimation() {
    const sections = document.querySelectorAll('#about-us h2, #about-us p, #about-us ul');
    sections.forEach(section => {
        section.classList.add('animate');
    });
}

// Llama a las funciones cuando el documento esté cargado
document.addEventListener('DOMContentLoaded', () => {
    resizeGalleryImages();
    applyAnimation();

    // Ejemplo de cómo se puede usar la función toggleContent
    document.getElementById('toggle-mission').addEventListener('click', () => {
        toggleContent('mission-section');
    });
    document.getElementById('toggle-values').addEventListener('click', () => {
        toggleContent('values-section');
    });
});

