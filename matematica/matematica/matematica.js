/* =========================================================
   PrepEnem — Módulo 1 de Matemática (matematica.html)
   ---------------------------------------------------------
   Sequência obrigatória: cada aula só libera depois que a
   anterior é marcada como concluída. O progresso fica salvo
   no navegador (localStorage), com as mesmas chaves de antes.
   O menu lateral é controlado pelo ../menu/menu.js.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    const MODULE_NAME = 'Matemática';
    const CURRENT_MODULE_NUMBER = 1; // módulo atual
    const TOTAL_MODULES = 5;

    // ⚠️ Troque pelos seus vídeos. Aceita arquivo .mp4 ou link de incorporação do YouTube.
    // Enquanto o link for "LINK_DO_SEU_VIDEO…", a página mostra "Vídeo em breve".
    const lessonData = {
        1: { title: 'Grandezas proporcionais', duration: '04:22 min', videoUrl: '../imagen/Grandezas Porporcionais.mp4' },
        2: { title: 'Estatística', duration: '04:03 min', videoUrl: '../imagen/estetica.mp4' },
        3: { title: 'Aritmética', duration: '12 min', videoUrl: 'https://www.youtube.com/embed/LINK_DO_SEU_VIDEO_AULA_3?rel=0' },
        4: { title: 'Funções e equações', duration: '15 min', videoUrl: 'https://www.youtube.com/embed/LINK_DO_SEU_VIDEO_AULA_4?rel=0' },
        5: { title: 'Matrizes', duration: '8 min', videoUrl: 'https://www.youtube.com/embed/LINK_DO_SEU_VIDEO_AULA_5?rel=0' },
    };
    const TOTAL_LESSONS = Object.keys(lessonData).length;

    const CHAVE_PROGRESSO = `lessonProgress_${MODULE_NAME}`;
    const CHAVE_AULA = `currentLessonId_${MODULE_NAME}`;
    const CHAVE_MODULO = `module_${CURRENT_MODULE_NUMBER}_completed`;

    const $ = (id) => document.getElementById(id);

    // --- Progresso ---------------------------------------------------------

    // Deixa o progresso sempre na ordem certa: aulas concluídas, depois UMA aula
    // liberada ("current"), depois as bloqueadas. Isso também destrava quem ficou
    // preso com a versão antiga (ela podia concluir uma aula sem liberar a próxima).
    function organizar(salvo) {
        const estado = {};
        let liberou = false;
        for (let id = 1; id <= TOTAL_LESSONS; id++) {
            if (!liberou && salvo[id] === 'completed') {
                estado[id] = 'completed';
            } else if (!liberou) {
                estado[id] = 'current';
                liberou = true;
            } else {
                estado[id] = 'locked';
            }
        }
        return estado;
    }

    function carregarProgresso() {
        try {
            return organizar(JSON.parse(localStorage.getItem(CHAVE_PROGRESSO)) || {});
        } catch (erro) {
            return organizar({});
        }
    }

    let lessonState = carregarProgresso();

    const proximaAula = () => {
        for (let id = 1; id <= TOTAL_LESSONS; id++) {
            if (lessonState[id] === 'current') return id;
        }
        return TOTAL_LESSONS; // tudo concluído: fica na última
    };

    // Aula aberta no vídeo (pode ser uma já concluída, para revisar)
    let aulaAberta = parseInt(localStorage.getItem(CHAVE_AULA), 10);
    if (!lessonState[aulaAberta] || lessonState[aulaAberta] === 'locked') aulaAberta = proximaAula();

    const salvar = () => {
        localStorage.setItem(CHAVE_PROGRESSO, JSON.stringify(lessonState));
        localStorage.setItem(CHAVE_AULA, String(aulaAberta));
    };

    const concluidas = () => Object.values(lessonState).filter((s) => s === 'completed').length;

    // --- Aviso (no lugar dos alertas do navegador) -------------------------

    function mostrarAviso(texto) {
        let aviso = $('aviso');
        if (!aviso) {
            aviso = document.createElement('div');
            aviso.id = 'aviso';
            aviso.className = 'aviso';
            aviso.setAttribute('role', 'status');
            document.body.appendChild(aviso);
        }
        aviso.innerHTML = '<i class="fas fa-circle-info" aria-hidden="true"></i><span></span>';
        aviso.querySelector('span').textContent = texto;
        aviso.classList.add('visivel');
        clearTimeout(mostrarAviso.timer);
        mostrarAviso.timer = setTimeout(() => aviso.classList.remove('visivel'), 4500);
    }

    // --- Vídeo -------------------------------------------------------------

    let videoMostrado = null;

    function montarVideo(id) {
        const caixa = $('video-player');
        const { title, videoUrl } = lessonData[id];
        caixa.innerHTML = '';
        videoMostrado = id;

        if (!videoUrl || videoUrl.includes('LINK_DO_SEU_VIDEO')) {
            caixa.innerHTML = '<div class="video-placeholder"><i class="fas fa-circle-play" aria-hidden="true"></i><span>O vídeo desta aula estará disponível em breve.</span></div>';
            return;
        }

        if (/\.(mp4|webm|ogg)(\?|$)/i.test(videoUrl)) {
            const video = document.createElement('video');
            video.src = videoUrl;
            video.controls = true;
            video.preload = 'metadata';
            video.setAttribute('aria-label', `Videoaula: ${title}`);
            caixa.appendChild(video);
        } else {
            const iframe = document.createElement('iframe');
            iframe.src = videoUrl;
            iframe.title = `Videoaula: ${title}`;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            caixa.appendChild(iframe);
        }
    }

    // --- Tela --------------------------------------------------------------

    const ICONES = { completed: 'fa-check', current: 'fa-play', locked: 'fa-lock' };
    const TEXTOS = { completed: 'Concluída', current: 'Disponível', locked: 'Bloqueada' };

    function atualizarTela() {
        const feitas = concluidas();
        $('completed-lessons-count').textContent = feitas;
        $('total-lessons-count').textContent = TOTAL_LESSONS;
        $('module-progress-fill').style.width = `${(feitas / TOTAL_LESSONS) * 100}%`;

        for (let id = 1; id <= TOTAL_LESSONS; id++) {
            const status = lessonState[id];
            const item = $(`lesson-item-${id}`);
            if (!item) continue;
            item.classList.remove('current', 'locked', 'completed');
            item.classList.add(status);
            item.classList.toggle('selecionada', id === aulaAberta);

            const icone = $(`status-${id}`);
            icone.className = `lesson-icon lesson-status-${status}`;
            icone.innerHTML = `<i class="fas ${ICONES[status]}" aria-hidden="true"></i>`;

            const estado = $(`state-${id}`);
            if (estado) estado.textContent = id === aulaAberta ? `${TEXTOS[status]} · assistindo` : TEXTOS[status];

            const botaoAula = item.querySelector('.lesson-open');
            if (botaoAula) botaoAula.setAttribute('aria-disabled', status === 'locked' ? 'true' : 'false');

            const exercicio = item.querySelector('.lesson-item-actions');
            if (exercicio) exercicio.classList.toggle('bloqueado', status !== 'completed');
        }

        const data = lessonData[aulaAberta];
        $('lesson-kicker').textContent = `Aula ${aulaAberta} de ${TOTAL_LESSONS}`;
        $('lesson-title').textContent = data.title;
        $('lesson-duration').textContent = `Duração: ${data.duration}`;

        const btnComplete = $('btn-complete');
        const jaConcluida = lessonState[aulaAberta] === 'completed';
        btnComplete.disabled = jaConcluida;
        btnComplete.innerHTML = jaConcluida
            ? '<i class="fas fa-check" aria-hidden="true"></i> Aula concluída'
            : '<i class="fas fa-check" aria-hidden="true"></i> Marcar como concluída';

        if (videoMostrado !== aulaAberta) montarVideo(aulaAberta);
        verificarModulo();
    }

    // Mostra o botão do próximo módulo quando todas as aulas estão concluídas
    function verificarModulo() {
        const btnNextModule = $('btn-next-module');
        if (concluidas() < TOTAL_LESSONS) {
            btnNextModule.hidden = true;
            localStorage.removeItem(CHAVE_MODULO);
            return;
        }

        localStorage.setItem(CHAVE_MODULO, 'true');
        btnNextModule.hidden = false;

        if (CURRENT_MODULE_NUMBER < TOTAL_MODULES) {
            btnNextModule.disabled = false;
            btnNextModule.innerHTML = `<i class="fas fa-arrow-right" aria-hidden="true"></i> Ir para o módulo ${CURRENT_MODULE_NUMBER + 1} de ${TOTAL_MODULES}`;
            btnNextModule.onclick = () => {
                mostrarAviso(`Parabéns! Módulo ${CURRENT_MODULE_NUMBER} concluído. O módulo ${CURRENT_MODULE_NUMBER + 1} foi liberado.`);
                // Quando o próximo módulo existir: window.location.href = 'modulo2.html';
            };
        } else {
            btnNextModule.disabled = true;
            btnNextModule.innerHTML = '<i class="fas fa-medal" aria-hidden="true"></i> Curso concluído!';
        }
    }

    // --- Ações -------------------------------------------------------------

    function abrirAula(id) {
        if (lessonState[id] === 'locked') {
            mostrarAviso('Conclua a aula anterior para liberar esta.');
            return;
        }
        aulaAberta = id;
        salvar();
        atualizarTela();
        $('video-player').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function concluirAula() {
        if (lessonState[aulaAberta] === 'completed') return;

        const concluida = aulaAberta;
        lessonState[concluida] = 'completed';
        lessonState = organizar(lessonState);

        const proxima = concluida + 1;
        if (proxima <= TOTAL_LESSONS) {
            aulaAberta = proxima;
            mostrarAviso(`Aula ${concluida} concluída! A aula "${lessonData[proxima].title}" foi liberada.`);
        } else {
            mostrarAviso('Parabéns! Você concluiu todas as aulas deste módulo.');
        }

        salvar();
        atualizarTela();
    }

    document.querySelectorAll('.lesson-item').forEach((item) => {
        const id = parseInt(item.dataset.lessonId, 10);

        const botaoAula = item.querySelector('.lesson-open');
        if (botaoAula) botaoAula.addEventListener('click', () => abrirAula(id));

        // Conteúdo e exercícios só depois de concluir a videoaula
        const exercicio = item.querySelector('.lesson-item-actions');
        if (exercicio) {
            exercicio.addEventListener('click', (evento) => {
                if (lessonState[id] !== 'completed') {
                    evento.preventDefault();
                    mostrarAviso('Conclua a videoaula para liberar o conteúdo e os exercícios.');
                }
            });
        }
    });

    $('btn-complete').addEventListener('click', concluirAula);

    $('btn-restart').addEventListener('click', () => {
        montarVideo(aulaAberta);
        mostrarAviso('Vídeo reiniciado.');
    });

    atualizarTela();
});
