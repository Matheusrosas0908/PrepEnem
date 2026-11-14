document.addEventListener('DOMContentLoaded', () => {
    // --- Controle do menu lateral ---
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('overlay');

    // Torna um elemento clicável também pelo teclado (Enter / Espaço),
    // caso ele não seja um <button> de verdade.
    const tornarAcessivel = (elemento, rotulo) => {
        if (!elemento || elemento.tagName === 'BUTTON') return;
        elemento.setAttribute('role', 'button');
        elemento.setAttribute('tabindex', '0');
        if (rotulo) elemento.setAttribute('aria-label', rotulo);
        elemento.addEventListener('keydown', (evento) => {
            if (evento.key === 'Enter' || evento.key === ' ') {
                evento.preventDefault();
                elemento.click();
            }
        });
    };

    if (sidebar && menuToggle) {
        tornarAcessivel(menuToggle, 'Abrir menu');
        menuToggle.setAttribute('aria-controls', 'sidebar');
        menuToggle.setAttribute('aria-expanded', 'false');

        const menuAberto = () => sidebar.classList.contains('open');

        const openSidebar = () => {
            sidebar.classList.add('open');
            if (overlay) overlay.classList.add('active');
            document.body.classList.add('menu-aberto');
            menuToggle.setAttribute('aria-expanded', 'true');
            // Leva o foco para o primeiro link do menu
            const primeiroLink = sidebar.querySelector('a, button');
            if (primeiroLink) primeiroLink.focus();
        };

        const closeSidebar = () => {
            if (!menuAberto()) return;
            sidebar.classList.remove('open');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('menu-aberto');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus();
        };

        menuToggle.addEventListener('click', () => {
            menuAberto() ? closeSidebar() : openSidebar();
        });

        if (overlay) {
            overlay.addEventListener('click', closeSidebar);
        }

        // Fecha com a tecla Esc
        document.addEventListener('keydown', (evento) => {
            if (evento.key === 'Escape') closeSidebar();
        });

        // Fecha ao clicar em um item do menu
        sidebar.querySelectorAll('.sidebar-menu li').forEach((item) => {
            item.addEventListener('click', closeSidebar);
        });
    }

    // --- Dicas (abre uma por vez) ---
    const tipCards = document.querySelectorAll('.tip-card');

    const fecharDica = (card) => {
        const lista = card.querySelector('.tip-details-list');
        if (lista) lista.classList.remove('visible');
        card.classList.remove('expanded');
        card.setAttribute('aria-expanded', 'false');
    };

    tipCards.forEach((card) => {
        const detailsList = card.querySelector('.tip-details-list');
        if (!detailsList) return;

        tornarAcessivel(card);
        card.setAttribute('aria-expanded', 'false');

        card.addEventListener('click', (evento) => {
            // Clicar em um link dentro da dica não deve fechar/abrir a dica
            if (evento.target.closest('a')) return;

            const estavaAberta = detailsList.classList.contains('visible');

            // 1. Fecha as outras dicas abertas
            tipCards.forEach((outro) => {
                if (outro !== card) fecharDica(outro);
            });

            // 2. Abre ou fecha a dica clicada
            if (estavaAberta) {
                fecharDica(card);
            } else {
                detailsList.classList.add('visible');
                card.classList.add('expanded');
                card.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
