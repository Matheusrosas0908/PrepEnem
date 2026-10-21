/* =========================================
   PrepEnem - Shared JavaScript
   Centralizes all common JS used across pages
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initBackButton();
});

/* --- Sidebar (Lateral Menu) Toggle --- */
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('overlay');

    if (!sidebar || !menuToggle || !overlay) return;

    const openSidebar = () => {
        sidebar.classList.add('open');
        overlay.classList.add('active');
    };

    const closeSidebar = () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    };

    menuToggle.addEventListener('click', openSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Close sidebar when clicking a menu item
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', closeSidebar);
    });
}

/* --- Back Button (returns to menu) --- */
function initBackButton() {
    const backBtn = document.getElementById('btn-back-module');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.href = '../menu/menu.html';
        });
    }
}

/* --- Helper: Get active subject module name from current path --- */
function getCurrentModuleName() {
    const path = window.location.pathname;
    if (path.includes('cienciasdanatureza') || path.includes('natureza')) return 'CienciaNatureza';
    if (path.includes('matematica')) return 'Matematica';
    if (path.includes('portugues')) return 'Linguagens';
    return 'General';
}

/* --- Helper: Get total lessons for current module --- */
function getModuleConfig() {
    const path = window.location.pathname;
    if (path.includes('cienciasdanatureza') || path.includes('natureza')) {
        return {
            name: 'CienciaNatureza',
            total: 5,
            currentModuleNum: 1,
            totalModules: 5,
            accentClass: 'nature'
        };
    }
    if (path.includes('matematica')) {
        return {
            name: 'Matematica',
            total: 5,
            currentModuleNum: 1,
            totalModules: 5,
            accentClass: 'math'
        };
    }
    if (path.includes('portugues')) {
        return {
            name: 'Linguagens',
            total: 5,
            currentModuleNum: 1,
            totalModules: 5,
            accentClass: 'linguagem'
        };
    }
    return { name: 'General', total: 5, currentModuleNum: 1, totalModules: 5, accentClass: 'general' };
}

/* --- Lesson Progress Management --- */
class LessonProgress {
    constructor(moduleName, totalLessons) {
        this.moduleName = moduleName;
        this.totalLessons = totalLessons;
        this.storageKey = `lessonProgress_${moduleName}`;
        this.currentLessonKey = `currentLessonId_${moduleName}`;
    }

    loadState() {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
            return JSON.parse(saved);
        }
        // Default: first lesson is current, rest are locked
        const state = {};
        for (let i = 1; i <= this.totalLessons; i++) {
            state[i] = i === 1 ? 'current' : 'locked';
        }
        return state;
    }

    saveState(state) {
        localStorage.setItem(this.storageKey, JSON.stringify(state));
    }

    getCurrentLessonId(state) {
        const savedId = localStorage.getItem(this.currentLessonKey);
        if (state[this.totalLessons] === 'completed') return this.totalLessons;
        return savedId ? parseInt(savedId) : 1;
    }

    getCompletedCount(state) {
        return Object.values(state).filter(status => status === 'completed').length;
    }

    markCompleted(state, lessonId) {
        state[lessonId] = 'completed';
        const nextLesson = lessonId + 1;
        if (state[nextLesson]) {
            state[nextLesson] = 'current';
        }
        this.saveState(state);
        return nextLesson <= this.totalLessons ? nextLesson : null;
    }

    markCurrent(state, lessonId) {
        if (state[lessonId] !== 'completed') {
            state[lessonId] = 'current';
        }
        this.saveState(state);
        localStorage.setItem(this.currentLessonKey, lessonId);
    }
}

/* --- Question/Quiz Logic (shared for exercise pages) --- */
class QuizManager {
    constructor(questions, optionsAreaId, questionNumberId, questionTextId, btnNextId, paginationId, formId) {
        this.questions = questions;
        this.currentIndex = 0;
        this.userAnswers = new Array(questions.length).fill(null);
        this.quizActive = false;
    }

    renderQuestion() {
        const letters = ['a', 'b', 'c', 'd', 'e'];
        const optionsArea = document.getElementById(optionsAreaId);
        const btnNext = document.getElementById(btnNextId);

        const q = this.questions[this.currentIndex];
        document.getElementById(questionNumberId).textContent = `0${this.currentIndex + 1}`.slice(-2);
        document.getElementById(questionTextId).textContent = q.text;

        optionsArea.innerHTML = q.options.map((option, index) => {
            const isSelected = this.userAnswers[this.currentIndex] &&
                this.userAnswers[this.currentIndex].chosenText === option ? 'selected' : '';
            return `
                <div class="option-item ${isSelected}" data-option-text="${option}">
                    <span class="option-letter">${letters[index]})</span>
                    <p class="option-text">${option}</p>
                </div>
            `;
        }).join('');

        const hasAnswered = !!this.userAnswers[this.currentIndex];
        btnNext.textContent = this.currentIndex === this.questions.length - 1 ? 'Finalizar' : 'Próxima';
        btnNext.classList.toggle('finish', this.currentIndex === this.questions.length - 1);
        btnNext.disabled = !hasAnswered;

        this.attachOptionListeners();
        this.renderPagination();
    }

    renderPagination() {
        const container = document.getElementById(paginationId);
        let html = '';
        for (let i = 0; i < this.questions.length; i++) {
            let cls = '';
            if (i === this.currentIndex) {
                cls = 'active';
            } else if (this.userAnswers[i]) {
                cls = this.userAnswers[i].isCorrect ? 'correct-dot' : 'incorrect-dot';
            }
            html += `<span class="${cls}">${i + 1}</span>`;
        }
        html += `<span>&raquo;</span>`;
        container.innerHTML = html;
    }

    handleSelection(element) {
        if (this.userAnswers[this.currentIndex] !== null) return;

        const selectedText = element.getAttribute('data-option-text');
        const correctAnswer = this.questions[this.currentIndex].answer;
        const isCorrect = selectedText === correctAnswer;

        this.userAnswers[this.currentIndex] = {
            chosenText: selectedText,
            isCorrect: isCorrect
        };

        document.querySelectorAll('.option-item').forEach(item => {
            item.classList.remove('selected');
        });
        element.classList.add('selected');
        document.getElementById('btn-next').disabled = false;

        this.renderPagination();
    }

    attachOptionListeners() {
        const self = this;
        document.querySelectorAll('.option-item').forEach(option => {
            option.addEventListener('click', function() {
                if (self.userAnswers[self.currentIndex] === null) {
                    self.handleSelection(this);
                }
            });
        });
    }

    handleNext() {
        if (this.userAnswers[this.currentIndex] === null) {
            alert('Por favor, selecione uma alternativa antes de avançar.');
            return;
        }
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
        } else {
            this.renderResults();
        }
    }

    renderResults() {
        const correct = this.userAnswers.filter(a => a && a.isCorrect).length;
        const total = this.questions.length;
        const incorrect = total - correct;

        const container = document.querySelector('.container');
        let html = `
            <div class="results-container">
                <h2>Resultados do Desafio!</h2>
                <div class="summary">
                    Você acertou <strong>${correct}</strong> de ${total} questões (${(correct/total*100).toFixed(1)}%).<br>
                    Erros: ${incorrect}.
                </div>
                <h3>Detalhes por Questão:</h3>
        `;

        this.questions.forEach((q, i) => {
            const ua = this.userAnswers[i];
            const cls = ua && ua.isCorrect ? 'correct' : 'incorrect';
            const status = ua && ua.isCorrect ? 'CORRETA' : 'INCORRETA';
            html += `
                <div class="result-item ${cls}">
                    <p><strong>Questão ${i+1}:</strong> ${q.text.substring(0, 80)}...</p>
                    <p>Sua Resposta: ${ua ? ua.chosenText : 'Não respondida'}</p>
                    <p>Resposta Correta: ${q.answer}</p>
                    <p><strong>Status: ${status}</strong></p>
                </div>
            `;
        });

        html += `<a href="../menu/menu.html" class="btn-next finish">Voltar as Atividades</a></div>`;
        container.innerHTML = html;
    }
}

/* --- Study Progress Tracker (for exercise pages) --- */
class StudyProgress {
    constructor(sectionIds, startBtnId, statusId) {
        this.sections = {};
        sectionIds.forEach(id => {
            this.sections[id] = false;
        });
        this.totalSections = sectionIds.length;
        this.remaining = this.totalSections;
    }

    markDone(sectionId) {
        if (!this.sections[sectionId]) {
            this.sections[sectionId] = true;
            this.remaining--;
        }
        this.updateUI();
    }

    updateUI() {
        const statusEl = document.getElementById('progress-status');
        const quizBtn = document.getElementById('btn-start-quiz');

        if (this.remaining === 0) {
            if (statusEl) {
                statusEl.textContent = 'Estudo Completo! Pode Iniciar o Quiz.';
                statusEl.classList.add('done');
            }
            if (quizBtn) quizBtn.disabled = false;
        } else {
            if (statusEl) {
                statusEl.textContent = `Faltam ${this.remaining} tópico(s)`;
                statusEl.classList.remove('done');
            }
            if (quizBtn) quizBtn.disabled = true;
        }
    }
}
