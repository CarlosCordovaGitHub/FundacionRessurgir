let currentSlideIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  // Ocultar todas las diapositivas
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });

  // Quitar la clase activa de todos los puntos
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  // Mostrar la diapositiva seleccionada
  dots[index].classList.add('active');

  currentSlideIndex = index;
}

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  let newIndex = (currentSlideIndex + direction + slides.length) % slides.length;
  showSlide(newIndex);
}

function currentSlide(index) {
  showSlide(index);
}

function autoSlide() {
  const slides = document.querySelectorAll('.slide');
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  // Iniciar el carrusel
  showSlide(currentSlideIndex);
  
  // Configurar intervalo de cambio automático
  autoSlideInterval = setInterval(autoSlide, 5000); // Cambia cada 5 segundos

  // Detener el cambio automático cuando el usuario interactúe
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
  carousel.addEventListener('mouseout', () => autoSlideInterval = setInterval(autoSlide, 5000));
});

document.addEventListener('DOMContentLoaded', () => {
  const chatbox = document.getElementById('chatbox');
  const userInput = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');
  const closeBtn = document.querySelector('.close-btn');
  const chatbot = document.getElementById('chatbot');
  const chatbotBubble = document.getElementById('chatbot-bubble');

  // Función para agregar un mensaje al chat
  function addMessage(sender, text) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.textContent = text;
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight; // Desplazarse al mensaje más reciente
  }

  // Manejar el clic en el botón de enviar
  sendBtn.addEventListener('click', () => {
    const text = userInput.value.trim();
    if (text) {
      addMessage('user', text);
      userInput.value = '';
      // Simulación de respuesta del chatbot
      setTimeout(() => {
        addMessage('bot', `Echo: ${text}`);
      }, 500);
    }
  });

  // Manejar la tecla Enter
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendBtn.click();
    }
  });

  // Manejar el clic en el botón de cerrar del chatbot
  closeBtn.addEventListener('click', () => {
    chatbot.style.display = 'none';
  });

  // Manejar el clic en la burbuja del chatbot
  chatbotBubble.addEventListener('click', () => {
    chatbot.style.display = chatbot.style.display === 'none' ? 'flex' : 'none';
  });
});
