// Inicializa as animações AOS
AOS.init({
    duration: 1200,
    once: true,
});

// Scroll suave para as seções ao clicar nos links da Navbar
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Alterna a exibição do conteúdo das perguntas frequentes (FAQ)
$(document).ready(function () {
    $('.faq-card-header').click(function () {
        $(this).next('.faq-card-body').toggleClass('show');
    });
});

// Função para abrir e fechar o menu hamburguer (para dispositivos móveis)
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('show');
});
