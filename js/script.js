// ==============================
// KIMONO FIGHT - SCRIPT PRINCIPAL
// ==============================

// 🌐 Scroll suave para links internos
// Este bloco faz com que, ao clicar em um link que leva a uma parte da mesma página (ex: #contato),
// a rolagem até o destino aconteça de forma suave em vez de "pular" direto.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    const target = document.querySelector(this.getAttribute('href')); // Seleciona o destino do link
    if (target) {
      // Faz o scroll até o destino de forma suave
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 🧭 Navbar dinâmica (adiciona sombra ao rolar)
// Quando o usuário rola a página, este código adiciona uma sombra na barra de navegação,
// criando um efeito visual de destaque para indicar que houve rolagem.
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { // Se o scroll for maior que 50px
    navbar.classList.add('navbar-shadow'); // Adiciona a classe que cria a sombra
  } else {
    navbar.classList.remove('navbar-shadow'); // Remove a sombra se o usuário voltar ao topo
  }
});

// 💬 Confirmação de envio no formulário de contato
// Este trecho intercepta o envio do formulário e exibe um alerta de confirmação.
// Serve como simulação de envio, já que o formulário não está conectado a um servidor real.
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio real do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.'); // Exibe mensagem de sucesso
    form.reset(); // Limpa os campos do formulário após o envio
  });
}

// ✨ Animação suave na entrada dos elementos (Scroll Reveal simples)
// Este bloco faz com que elementos apareçam com uma animação quando entram na área visível da tela.
const elements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', revealElements); // Executa a função ao rolar a página

function revealElements() {
  const windowHeight = window.innerHeight; // Altura da janela visível
  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top; // Posição do topo do elemento
    const visiblePoint = 100; // Ponto em que o elemento começa a aparecer

    // Se o elemento estiver dentro da área visível da tela, adiciona a classe 'active'
    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add('active'); // Ativa a animação definida no CSS
    }
  });
}

// 🪄 Adiciona a classe 'reveal' automaticamente
// Este comando adiciona a classe 'reveal' em seções, cartões e no rodapé,
// garantindo que todos participem da animação ao rolar.
document.querySelectorAll('section, .card, footer').forEach(el => {
  el.classList.add('reveal');
});

// 🚀 Executa a animação logo ao carregar a página
// Garante que elementos já visíveis apareçam com o efeito mesmo sem rolar.
revealElements();
