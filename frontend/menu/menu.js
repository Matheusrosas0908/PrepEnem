     document.addEventListener('DOMContentLoaded', () => {
            // --- Controle do Menu Lateral (Sidebar) ---
            const sidebar = document.getElementById('sidebar');
            const menuToggle = document.getElementById('menu-toggle');
            const overlay = document.getElementById('overlay');

            const openSidebar = () => {
                sidebar.classList.add('open');
                overlay.classList.add('active');
            };

            const closeSidebar = () => {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            };

            if (menuToggle) {
                menuToggle.addEventListener('click', openSidebar);
            }

            if (overlay) {
                overlay.addEventListener('click', closeSidebar);
            }

            // Opcional: Fechar ao clicar em um item de menu
            const menuItems = document.querySelectorAll('.sidebar-menu li');
            menuItems.forEach(item => {
                item.addEventListener('click', closeSidebar);
            });
            
            // --- Funcionalidade de Dicas (Accordion/Expansão) ---
            const tipCards = document.querySelectorAll('.tip-card');

            tipCards.forEach(card => {
                card.addEventListener('click', () => {
                    // Encontra a lista de detalhes dentro do cartão clicado
                    const detailsList = card.querySelector('.tip-details-list');

                    if (detailsList) {
                        // Verifica se o item está visível
                        const isVisible = detailsList.classList.contains('visible');

                        // 1. Fecha todas as outras listas visíveis
                        document.querySelectorAll('.tip-details-list.visible').forEach(list => {
                            if (list !== detailsList) {
                                list.classList.remove('visible');
                                // Reverter o estado visual do card pai
                                list.parentElement.classList.remove('expanded'); 
                            }
                        });

                        // 2. Alterna a visibilidade da lista clicada
                        if (isVisible) {
                            detailsList.classList.remove('visible');
                            card.classList.remove('expanded');
                        } else {
                            detailsList.classList.add('visible');
                            card.classList.add('expanded');
                        }
                    }
                });
            });
        });