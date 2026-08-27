
function abrirPopup(texto) {
    document.getElementById('popup-texto').innerText = texto;
    document.getElementById('popup').style.display = 'flex';
}

function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    // --- Funções existentes para Popup e FAQ ---

    // Função para abrir o popup de "Saiba mais"
    window.abrirPopup = function(texto) { // Usamos window.abrirPopup para torná-la global e acessível pelo onclick no HTML
        document.getElementById('popup-texto').innerText = texto;
        document.getElementById('popup').style.display = 'flex';
    };

    // Função para fechar o popup
    window.fecharPopup = function() { // Usamos window.fecharPopup para torná-la global
        document.getElementById('popup').style.display = 'none';
    };

    // Lógica para expandir/colapsar as perguntas do FAQ
    document.querySelectorAll('.faq-pergunta').forEach(btn => {
        btn.addEventListener('click', () => {
            const resposta = btn.nextElementSibling;
            // Alterna a exibição entre 'block' (visível) e 'none' (invisível)
            resposta.style.display = (resposta.style.display === 'block') ? 'none' : 'block';
            const isExpanded = btn.getAttribute('aria-expanded') === 'true' || false;
            btn.setAttribute('aria-expanded', !isExpanded);

            // Gira a seta 
            const faqItem = btn.closest('.faq-item'); // Encontra o elemento pai .faq-item
            faqItem.classList.toggle('open'); // Alterna a classe 'open' no .faq-item
            // Alterna o atributo aria-expanded para acessibilidade
            
        });
    });

    //Modo Claro/Escuro 

    const toggleButton = document.getElementById("toggle-dark");
    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");
    const body = document.body;

    // Função para aplicar o tema (claro ou escuro) e atualizar o botão
    function applyTheme(isDarkMode) {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            themeIcon.src = 'img/Sol.PNG';
            themeIcon.alt = 'Ícone de Sol';
       
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            themeIcon.src = 'img/Lua.PNG';
            themeIcon.alt = 'Ícone de Lua';

        }
    }

    // Tenta carregar a preferência do usuário do localStorage ao carregar a página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    // Event listener para o clique no botão
    toggleButton.addEventListener("click", function() {
        const isCurrentlyDarkMode = body.classList.contains("dark-mode");
        if (isCurrentlyDarkMode) {
            applyTheme(false);
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme(true);
            localStorage.setItem('theme', 'dark');
        }
    });
});

// Menu Hamburguer
const toggleMenuBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav.menu');

toggleMenuBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('show');
    toggleMenuBtn.setAttribute('aria-expanded', isOpen);
});

// Fecha o menu ao clicar em qualquer item
document.querySelectorAll('nav.menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        toggleMenuBtn.setAttribute('aria-expanded', false);
    });
});


/*Antigo código

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("toggle-dark");
    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        btn.textContent = document.body.classList.contains("dark-mode")
        ? "Sol Modo Claro"
        : "Lua Modo Escuro";
    });
});
*/
