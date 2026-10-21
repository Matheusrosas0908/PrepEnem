/**
 * PrepEnem API Client
 * Provides a clean interface for the frontend to communicate with the backend API.
 * Usage: const api = new PrepEnemAPI(); await api.login(email, senha);
 */

class PrepEnemAPI {
  constructor(baseURL = 'http://localhost:3000/api', token = null) {
    this.baseURL = baseURL;
    this.token = token || localStorage.getItem('prepenem_token');
  }

  /**
   * Set the auth token (called after login/register)
   */
  setToken(token) {
    this.token = token;
    localStorage.setItem('prepenem_token', token);
  }

  /**
   * Clear the auth token (called after logout)
   */
  clearToken() {
    this.token = null;
    localStorage.removeItem('prepenem_token');
  }

  /**
   * Get auth headers
   */
  headers() {
    const headers = { 'Content-Type': 'application/json' };
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    return headers;
  }

  /**
   * Make a request to the API
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.headers(),
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw { status: response.status, ...data };
      }

      return data;
    } catch (error) {
      if (error.status) {
        throw error;
      }
      throw { status: 0, error: 'Erro de conexão com o servidor' };
    }
  }

  // === Auth Routes ===

  /**
   * Register a new user
   * @param {string} nome
   * @param {string} email
   * @param {string} senha
   * @param {string} telefone
   */
  async register(nome, email, senha, telefone) {
    const data = await this.request('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha, telefone }),
    });
    this.setToken(data.token);
    return data;
  }

  /**
   * Login with email and password
   * @param {string} email
   * @param {string} senha
   */
  async login(email, senha) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });
    this.setToken(data.token);
    return data;
  }

  /**
   * Get current user profile
   */
  async getProfile() {
    return this.request('/auth/me');
  }

  /**
   * Logout (clears token)
   */
  logout() {
    this.clearToken();
    return { success: true };
  }

  // === Module Routes ===

  /**
   * Get all available modules
   */
  async getModules() {
    return this.request('/modules');
  }

  /**
   * Get details for a specific module
   * @param {string} moduleId
   */
  async getModule(moduleId) {
    return this.request(`/modules/${moduleId}`);
  }

  /**
   * Get lessons for a module
   * @param {string} moduleId
   */
  async getLessons(moduleId) {
    return this.request(`/modules/${moduleId}/lessons`);
  }

  /**
   * Get a specific lesson
   * @param {string} moduleId
   * @param {number} lessonId
   */
  async getLesson(moduleId, lessonId) {
    return this.request(`/modules/${moduleId}/lessons/${lessonId}`);
  }

  // === Question Routes ===

  /**
   * Get questions for a module and lesson
   * @param {string} moduleId
   * @param {number} lessonId
   */
  async getQuestions(moduleId, lessonId) {
    return this.request(`/questions/${moduleId}/${lessonId}`);
  }

  /**
   * Submit quiz answers
   * @param {string} moduleId
   * @param {number} lessonId
   * @param {Object} answers - { questionId: chosenAnswer, ... }
   */
  async submitQuiz(moduleId, lessonId, answers) {
    return this.request(`/questions/${moduleId}/${lessonId}/submit`, {
      method: 'POST',
      body: JSON.stringify({ answers }),
    });
  }

  // === Progress Routes ===

  /**
   * Get all user progress
   */
  async getAllProgress() {
    return this.request('/progress');
  }

  /**
   * Get progress for a specific module
   * @param {string} moduleId
   */
  async getProgress(moduleId) {
    return this.request(`/progress/${moduleId}`);
  }

  /**
   * Save progress for a module
   * @param {string} moduleId
   * @param {Object} progress
   * @param {number} currentLessonId
   */
  async saveProgress(moduleId, progress, currentLessonId) {
    return this.request(`/progress/${moduleId}`, {
      method: 'POST',
      body: JSON.stringify({ progress, currentLessonId }),
    });
  }

  // === Health Tips Routes ===

  /**
   * Get all health tips
   */
  async getHealthTips() {
    return this.request('/health-tips');
  }

  /**
   * Get a specific health tip
   * @param {string} tipId
   */
  async getHealthTip(tipId) {
    return this.request(`/health-tips/${tipId}`);
  }

  // === Ranking Routes ===

  /**
   * Get user ranking
   */
  async getRanking() {
    return this.request('/ranking');
  }

  // === Achievements Routes ===

  /**
   * Get all achievements and challenges
   */
  async getAchievements() {
    return this.request('/achievements');
  }

  /**
   * Get challenges only
   */
  async getChallenges() {
    return this.request('/achievements/challenges');
  }

  /**
   * Get badges only
   */
  async getBadges() {
    return this.request('/achievements/badges');
  }

  // === Utility ===

  /**
   * Check API health
   */
  async healthCheck() {
    return this.request('/health');
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated() {
    return !!this.token;
  }
}

// Export for use in browser
if (typeof window !== 'undefined') {
  window.PrepEnemAPI = PrepEnemAPI;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PrepEnemAPI };
}
