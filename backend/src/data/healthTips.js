// Health and wellness tips for students
const healthTips = {
  alimentacao: {
    id: 'alimentacao',
    icon: 'fa-utensils',
    title: 'Alimentação',
    focus: 'refeições balanceadas e evite estudar com fome.',
    details: [
      'Faça refeições balanceadas e evite estudar com fome.',
      'Beba água regularmente, mantendo uma garrafa por perto.',
      'Evite excesso de cafeína, carboidratos e gorduras.',
      'Faça pequenos lanches entre as refeições principais.',
    ],
    color: '#E0FFF0',
  },
  sono: {
    id: 'sono',
    icon: 'fa-moon',
    title: 'Sono',
    focus: 'dormir 7-8 horas por noite para melhor memorização.',
    details: [
      'Durma 7-8 horas por noite para melhor memorização.',
      'Mantenha horários regulares para dormir e acordar.',
      'Evite telas antes de dormir.',
      'Faça cochilos curtos (até 30 min) se necessário.',
    ],
    color: '#E0FFFF',
  },
  organizacao: {
    id: 'organizacao',
    icon: 'fa-clipboard-list',
    title: 'Organização',
    focus: 'crie um cronograma de estudos para seguir as regras.',
    details: [
      'Crie um cronograma de estudos para seguir as regras.',
      'Estude em blocos (ex: 50 min de estudo + 10 min de pausa).',
      'Faça um planejamento a cada 7 dias para revisar o foco.',
      'Defina metas diárias realistas e recompense quando alcançadas.',
    ],
    color: '#FFFBE0',
  },
};

const allTips = Object.values(healthTips);

module.exports = { healthTips, allTips };
