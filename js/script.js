// ==============================
// KIMONO FIGHT - SCRIPT PRINCIPAL
// ==============================

// 🌐 Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 🧭 Navbar dinâmica (adiciona sombra ao rolar)
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-shadow');
  } else {
    navbar.classList.remove('navbar-shadow');
  }
});

// 💬 Confirmação de envio no formulário de contato
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // impede envio real
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    form.reset();
  });
}

// ✨ Animação suave na entrada dos elementos (Scroll Reveal simples)
const elements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', revealElements);

function revealElements() {
  const windowHeight = window.innerHeight;
  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add('active');
    }
  });
}

// Adiciona a classe 'reveal' em elementos importantes automaticamente
document.querySelectorAll('section, .card, footer').forEach(el => {
  el.classList.add('reveal');
});
// Executa a animação logo ao carregar a página
revealElements();
