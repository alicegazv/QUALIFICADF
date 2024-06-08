// Inicializa a variável para acompanhar o índice do slide atual
let currentSlide = 0;

/**
 * Função para mostrar um slide específico.
 * @param {number} index - O índice do slide a ser exibido.
 */
function showSlide(index) {
    // Seleciona todos os elementos que representam os slides
    const slides = document.querySelectorAll('.carousel-slide');
    // Obtém o número total de slides
    const totalSlides = slides.length;

    // Se o índice fornecido for maior ou igual ao número total de slides, redefine para o primeiro slide
    if (index >= totalSlides) {
        currentSlide = 0;
    }
    // Se o índice fornecido for menor que zero, redefine para o último slide
    else if (index < 0) {
        currentSlide = totalSlides - 1;
    }
    // Caso contrário, define o slide atual para o índice fornecido
    else {
        currentSlide = index;
    }

    // Seleciona o contêiner do carrossel
    const carouselContainer = document.querySelector('.carousel-container');
    // Calcula o deslocamento para mover o contêiner de slides
    const offset = -currentSlide * 100;
    // Aplica a transformação ao contêiner para mostrar o slide correto
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

/**
 * Função para avançar para o próximo slide.
 */
function nextSlide() {
    // Chama a função showSlide com o índice do próximo slide
    showSlide(currentSlide + 1);
}

/**
 * Função para voltar ao slide anterior.
 */
function prevSlide() {
    // Chama a função showSlide com o índice do slide anterior
    showSlide(currentSlide - 1);
}

//Inicializa o carrossel exibindo o slide atual (inicialmente o primeiro slide)
showSlide(currentSlide);
