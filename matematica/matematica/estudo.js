/* =========================================================
   PrepEnem — Páginas de estudo (questão1.html … questão5.html)
   ---------------------------------------------------------
   Cada página define, antes de carregar este arquivo:

     window.ESTUDO = {
         questoes: [ { text: '…', options: ['…', '…'], answer: '…' } ],
         notaBoa: 7,
         mensagens: { boa: '…', revisar: '…' }
     };

   - "answer" precisa ser igual a uma das "options".
   - Sem "questoes", o botão final abre o resumo (#resultado).
   - Os tópicos são os elementos .content-section (pode ter quantos quiser).
   O menu lateral é controlado pelo ../menu/menu.js.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    const config = window.ESTUDO || {};
    const questoes = Array.isArray(config.questoes) ? config.questoes : [];
    const temQuiz = questoes.length > 0;
    const notaBoa = config.notaBoa || Math.ceil(questoes.length * 0.7);
    const mensagens = config.mensagens || {};

    const $ = (id) => document.getElementById(id);
    const conteudo = $('content-view');
    const formulario = $('question-form');
    const resultado = $('resultado');
    const btnFinal = $('btn-start-quiz');

    // Avisa no console se alguma resposta não bate com as opções (erro de digitação)
    questoes.forEach((q, i) => {
        if (!q.options.includes(q.answer)) {
            console.warn(`Questão ${i + 1}: a resposta "${q.answer}" não está entre as opções.`);
        }
    });

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

    const irPara = (elemento) => {
        const topo = elemento.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top: Math.max(topo, 0), behavior: 'smooth' });
    };

    // --- Leitura dos tópicos -----------------------------------------------

    const secoes = Array.from(document.querySelectorAll('.content-section'));
    const lidas = new Set();

    function atualizarLeitura() {
        secoes.forEach((secao, i) => {
            const lida = lidas.has(i);
            secao.classList.toggle('lida', lida);
            const botao = secao.querySelector('.btn-read');
            if (!botao) return;
            botao.disabled = lida;
            botao.classList.toggle('lido', lida);
            botao.innerHTML = lida
                ? '<i class="fas fa-check" aria-hidden="true"></i> Lido'
                : `Marcar tópico ${i + 1} como lido`;
        });

        const faltam = secoes.length - lidas.size;
        const status = $('progress-status');
        status.classList.toggle('done', faltam === 0);
        status.textContent = faltam === 0
            ? (temQuiz ? 'Leitura concluída! O quiz está liberado.' : 'Leitura concluída! O resumo está liberado.')
            : `Faltam ${faltam} ${faltam === 1 ? 'tópico' : 'tópicos'}`;

        const barra = $('progress-fill');
        if (barra) barra.style.width = `${(lidas.size / secoes.length) * 100}%`;

        btnFinal.disabled = faltam > 0;
        if (faltam > 0) {
            btnFinal.innerHTML = `<i class="fas fa-lock" aria-hidden="true"></i> Termine a leitura para liberar ${temQuiz ? 'o quiz' : 'o resumo'}`;
        } else if (temQuiz) {
            btnFinal.innerHTML = `<i class="fas fa-pencil" aria-hidden="true"></i> Começar o quiz de ${questoes.length} questões`;
        } else {
            btnFinal.innerHTML = '<i class="fas fa-chart-line" aria-hidden="true"></i> Ver resumo final';
        }
    }

    secoes.forEach((secao, i) => {
        const botao = secao.querySelector('.btn-read');
        if (botao) {
            botao.addEventListener('click', () => {
                lidas.add(i);
                atualizarLeitura();
            });
        }
    });

    btnFinal.addEventListener('click', () => {
        if (lidas.size < secoes.length) return;
        conteudo.hidden = true;
        if (temQuiz) {
            montarQuiz();
            formulario.hidden = false;
            irPara(formulario);
        } else {
            resultado.hidden = false;
            irPara(resultado);
        }
    });

    // --- Quiz --------------------------------------------------------------

    function montarQuiz() {
        const lista = $('quiz-questions');
        lista.innerHTML = '';
        formulario.classList.remove('quiz-corrigido');

        questoes.forEach((q, i) => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.dataset.indice = i;
            card.setAttribute('role', 'radiogroup');
            card.setAttribute('aria-labelledby', `pergunta-${i}`);

            const pergunta = document.createElement('p');
            pergunta.className = 'question-text';
            pergunta.id = `pergunta-${i}`;
            pergunta.innerHTML = `<span class="question-num">${i + 1}</span><span>${q.text}</span>`;
            card.appendChild(pergunta);

            q.options.forEach((opcao, j) => {
                const label = document.createElement('label');
                label.className = 'option-label';
                label.innerHTML = `<input type="radio" name="q${i}" value="${j}"><span>${opcao}</span>`;
                card.appendChild(label);
            });

            card.addEventListener('change', () => card.classList.remove('faltando'));
            lista.appendChild(card);
        });

        $('btn-submit-quiz').hidden = false;
        $('quiz-fim').hidden = true;
    }

    function corrigirQuiz(evento) {
        evento.preventDefault();
        const cards = Array.from(formulario.querySelectorAll('.question-card'));

        // 1. Todas respondidas?
        const semResposta = cards.filter((card) => !card.querySelector('input:checked'));
        cards.forEach((card) => card.classList.toggle('faltando', semResposta.includes(card)));
        if (semResposta.length > 0) {
            mostrarAviso(semResposta.length === 1
                ? 'Falta responder 1 questão.'
                : `Faltam responder ${semResposta.length} questões.`);
            irPara(semResposta[0]);
            return;
        }

        // 2. Corrige comparando a posição da opção (funciona com acentos, vírgulas e símbolos)
        let acertos = 0;
        cards.forEach((card) => {
            const q = questoes[card.dataset.indice];
            const certa = q.options.indexOf(q.answer);
            const marcada = card.querySelector('input:checked');
            const labels = card.querySelectorAll('.option-label');

            if (Number(marcada.value) === certa) acertos++;
            else marcada.closest('.option-label').classList.add('incorrect-selection');
            if (labels[certa]) labels[certa].classList.add('correct-answer');

            card.querySelectorAll('input').forEach((input) => { input.disabled = true; });
        });

        formulario.classList.add('quiz-corrigido');
        const aviso = $('aviso');
        if (aviso) aviso.classList.remove('visivel');
        $('btn-submit-quiz').hidden = true;
        $('quiz-fim').hidden = false;
        mostrarResultado(acertos);
    }

    function mostrarResultado(acertos) {
        const total = questoes.length;
        $('score-num').textContent = `${acertos}/${total}`;
        $('score-titulo').textContent = `Você acertou ${acertos} de ${total} ${total === 1 ? 'questão' : 'questões'}`;
        $('score-mensagem').textContent = acertos >= notaBoa ? (mensagens.boa || '') : (mensagens.revisar || '');
        resultado.hidden = false;
        irPara(resultado);
    }

    if (formulario) formulario.addEventListener('submit', corrigirQuiz);

    const btnRefazer = $('btn-refazer');
    if (btnRefazer) {
        btnRefazer.addEventListener('click', () => {
            resultado.hidden = true;
            montarQuiz();
            irPara(formulario);
        });
    }

    atualizarLeitura();
});
