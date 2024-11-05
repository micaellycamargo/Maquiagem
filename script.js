// Script para a rolagem automática dos vídeos e imagens na galeria
const gallery = document.querySelector('.gallery');
let scrollInterval;

// Função para iniciar a rolagem automática
function startScrolling() {
  scrollInterval = setInterval(() => {
    gallery.scrollLeft += 2; // Ajuste a velocidade de rolagem
  }, 20);
}

// Função para parar a rolagem automática
function stopScrolling() {
  clearInterval(scrollInterval);
}

// Inicia a rolagem quando o mouse não estiver sobre a galeria
gallery.addEventListener('mouseenter', stopScrolling);
gallery.addEventListener('mouseleave', startScrolling);

// Inicia a rolagem automática ao carregar a página
startScrolling();

// Função para revelar seções ao rolar a página
const sections = document.querySelectorAll('section');

const revealSection = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add('reveal');
    }
  });
};

// Adiciona a classe de animação inicialmente escondida
sections.forEach(section => {
  section.classList.add('hidden');
});

// Evento de scroll para revelar as seções
window.addEventListener('scroll', revealSection);

// Chama a função para revelar as seções ao carregar a página
revealSection();

// Efeito de escala nas imagens e vídeos da galeria
const images = document.querySelectorAll('.gallery img, .gallery video');
images.forEach((image) => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.05)';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});
