// Conteúdo dos módulos de aprendizagem de redação (migrado de frontend/Redacao.html).
// As aulas são servidas pelo backend; o progresso fica em redacao_progress (MySQL).
const modules = [
  {
    "id": "modulo-1",
    "number": 1,
    "title": "Introdução à redação do ENEM",
    "icon": "book-open",
    "color": "#2b6de0",
    "lessons": [
      {
        "id": "aula-1-1",
        "moduleIndex": 0,
        "number": 1,
        "title": "O que é uma redação dissertativo-argumentativa?",
        "explanation": "É um texto em que você defende uma opinião (a tese) sobre um tema e a sustenta com argumentos. Não é um relato nem uma lista de problemas: é um raciocínio organizado.",
        "incorrectExample": "O Brasil tem muitos problemas e todos precisam melhorar.",
        "correctExample": "A desigualdade de acesso à internet limita o aprendizado dos jovens, pois...",
        "tip": "Pergunte a si mesmo: o que defendo, por que defendo e o que fazer?",
        "question": "Qual é o objetivo desse tipo de texto?",
        "options": [
          "Contar uma história",
          "Defender um ponto de vista com argumentos",
          "Listar fatos sem opinião"
        ],
        "correctIndex": 1
      },
      {
        "id": "aula-1-2",
        "moduleIndex": 0,
        "number": 2,
        "title": "Como funciona a redação do ENEM?",
        "explanation": "Você recebe um tema com textos de apoio e escreve de 7 a 30 linhas. A nota vai de 0 a 1.000: são cinco competências de 200 pontos cada.",
        "incorrectExample": "Escrever um único parágrafo enorme.",
        "correctExample": "Quatro parágrafos: introdução, dois de desenvolvimento e conclusão.",
        "tip": "Reserve tempo para passar o rascunho a limpo.",
        "question": "Quantos pontos vale a redação?",
        "options": [
          "500",
          "1.000",
          "200"
        ],
        "correctIndex": 1
      },
      {
        "id": "aula-1-3",
        "moduleIndex": 0,
        "number": 3,
        "title": "O que os avaliadores esperam do estudante?",
        "explanation": "Eles avaliam escrita formal, compreensão do tema, organização dos argumentos, coesão e proposta de intervenção. Fugir totalmente do tema zera a redação.",
        "incorrectExample": "Falar de um assunto parecido, mas não do tema pedido.",
        "correctExample": "Responder exatamente ao recorte do tema proposto.",
        "tip": "Releia o tema e sublinhe as palavras-chave antes de começar.",
        "question": "O que acontece se o texto fugir totalmente do tema?",
        "options": [
          "Perde só alguns pontos",
          "A redação recebe nota zero",
          "Nada, o tema é livre"
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "modulo-2",
    "number": 2,
    "title": "Aprendendo a fazer uma introdução",
    "icon": "play",
    "color": "#4f46e5",
    "lessons": [
      {
        "id": "aula-2-1",
        "moduleIndex": 1,
        "number": 1,
        "title": "Como começar uma redação?",
        "explanation": "A introdução tem três passos: contextualizar o assunto, apresentar o tema e deixar clara a sua opinião (tese). Dois a quatro períodos bastam.",
        "incorrectExample": "Desde o começo dos tempos, o ser humano sempre...",
        "correctExample": "No Brasil, o acesso desigual à internet ainda afasta jovens da escola.",
        "tip": "Evite frases genéricas e vá direto ao assunto.",
        "question": "A introdução deve:",
        "options": [
          "Conter a solução completa",
          "Contextualizar e apresentar a tese",
          "Repetir os textos de apoio"
        ],
        "correctIndex": 1
      },
      {
        "id": "aula-2-2",
        "moduleIndex": 1,
        "number": 2,
        "title": "Como apresentar o tema?",
        "explanation": "Apresente o tema com as suas palavras. Use um fato, um dado ou uma citação que se conecte ao assunto, sem copiar os textos de apoio.",
        "incorrectExample": "Copiar o enunciado e os textos motivadores.",
        "correctExample": "Diante da digitalização, a educação enfrenta o desafio de incluir todos os estudantes.",
        "tip": "Parafrasear é dizer a mesma ideia com outras palavras.",
        "question": "Como usar os textos de apoio?",
        "options": [
          "Copiar trechos",
          "Inspirar-se e reescrever com suas palavras",
          "Ignorá-los totalmente"
        ],
        "correctIndex": 1
      },
      {
        "id": "aula-2-3",
        "moduleIndex": 1,
        "number": 3,
        "title": "Como construir uma tese?",
        "explanation": "A tese é a sua opinião em uma frase, junto dos motivos que você vai desenvolver. Fórmula: problema + causa A + causa B.",
        "incorrectExample": "Este tema é muito importante.",
        "correctExample": "A evasão escolar persiste devido à desigualdade social e à falta de apoio às famílias.",
        "tip": "Cada motivo da tese vira um parágrafo de desenvolvimento.",
        "question": "Uma boa tese apresenta:",
        "options": [
          "Uma opinião e seus motivos",
          "Apenas uma pergunta",
          "Uma definição de dicionário"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "modulo-3",
    "number": 3,
    "title": "Construindo o desenvolvimento",
    "icon": "layers",
    "color": "#0891b2",
    "lessons": [
      {
        "id": "aula-3-1",
        "moduleIndex": 2,
        "number": 1,
        "title": "Como criar argumentos?",
        "explanation": "Argumento é um motivo que sustenta a tese. Estrutura simples: afirmação, explicação e exemplo.",
        "incorrectExample": "A violência é ruim porque é ruim.",
        "correctExample": "A falta de oportunidades empurra jovens para a violência, pois sem escola e emprego o futuro parece fechado.",
        "tip": "Pergunte \"por quê?\" duas vezes à sua própria ideia.",
        "question": "Qual item faz parte de um argumento?",
        "options": [
          "Explicação do motivo",
          "Apenas adjetivos",
          "Apenas a conclusão"
        ],
        "correctIndex": 0
      },
      {
        "id": "aula-3-2",
        "moduleIndex": 2,
        "number": 2,
        "title": "Como defender suas ideias?",
        "explanation": "Defender é provar: use causa e consequência, dados, comparações ou exemplos reais. Cada ideia precisa ser explicada, não só citada.",
        "incorrectExample": "Muitos jovens não estudam.",
        "correctExample": "Pesquisas oficiais mostram que o abandono escolar reduz as chances de emprego e renda.",
        "tip": "Dados e exemplos fortalecem mais do que opiniões soltas.",
        "question": "Para defender uma ideia, o melhor é:",
        "options": [
          "Repeti-la várias vezes",
          "Explicar com causa, consequência e exemplo",
          "Usar frases bem longas"
        ],
        "correctIndex": 1
      },
      {
        "id": "aula-3-3",
        "moduleIndex": 2,
        "number": 3,
        "title": "Como utilizar repertório sociocultural?",
        "explanation": "Repertório é o conhecimento que você traz de fora: livros, filmes, história, filosofia, leis e notícias. Ele deve ser pertinente ao tema e explicado.",
        "incorrectExample": "Como diria Platão, a vida é difícil.",
        "correctExample": "Para o sociólogo Zygmunt Bauman, as relações modernas são \"líquidas\"; assim, a exclusão digital...",
        "tip": "Citar sem ligar ao tema não vale: explique a relação.",
        "question": "Um bom repertório é:",
        "options": [
          "Qualquer citação decorada",
          "Relacionado ao tema e bem explicado",
          "Sempre uma frase famosa"
        ],
        "correctIndex": 1
      },
      {
        "id": "aula-3-4",
        "moduleIndex": 2,
        "number": 4,
        "title": "Como construir parágrafos argumentativos?",
        "explanation": "Modelo: tópico frasal (a ideia principal), argumentação (explicação e repertório) e fechamento que retoma a ideia.",
        "incorrectExample": "Um parágrafo com três ideias misturadas.",
        "correctExample": "Um parágrafo = uma ideia principal bem desenvolvida.",
        "tip": "Use conectivos como \"além disso\", \"pois\" e \"portanto\".",
        "question": "O tópico frasal serve para:",
        "options": [
          "Apresentar a ideia principal do parágrafo",
          "Encerrar o texto",
          "Listar fontes"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "modulo-4",
    "number": 4,
    "title": "Aprendendo a fazer uma conclusão",
    "icon": "flag",
    "color": "#059669",
    "lessons": [
      {
        "id": "aula-4-1",
        "moduleIndex": 3,
        "number": 1,
        "title": "Como finalizar uma redação?",
        "explanation": "A conclusão retoma a tese e apresenta a proposta de intervenção. Não traga ideias novas sem desenvolvimento.",
        "incorrectExample": "Enfim, é isso.",
        "correctExample": "Portanto, para reduzir a evasão escolar, é necessário que...",
        "tip": "Retome as palavras-chave do tema.",
        "question": "A conclusão deve:",
        "options": [
          "Retomar a tese e propor uma solução",
          "Abrir um novo assunto",
          "Apenas agradecer ao leitor"
        ],
        "correctIndex": 0
      },
      {
        "id": "aula-4-2",
        "moduleIndex": 3,
        "number": 2,
        "title": "O que é proposta de intervenção?",
        "explanation": "É a solução para o problema. Tem cinco elementos: agente (quem), ação (o quê), meio (como), finalidade (para quê) e detalhamento.",
        "incorrectExample": "O governo deve resolver isso.",
        "correctExample": "O Ministério da Educação deve ampliar bolsas, por meio de parcerias com prefeituras, a fim de manter jovens na escola.",
        "tip": "Confira: quem, o quê, como, para quê e detalhe.",
        "question": "O \"agente\" da proposta responde a qual pergunta?",
        "options": [
          "Quem vai agir?",
          "Quando foi criado?",
          "Qual é o título?"
        ],
        "correctIndex": 0
      },
      {
        "id": "aula-4-3",
        "moduleIndex": 3,
        "number": 3,
        "title": "Como apresentar uma solução completa?",
        "explanation": "Una os cinco elementos em um ou dois períodos, ligados por conectivos. Respeite sempre os direitos humanos.",
        "incorrectExample": "Deve-se fazer campanhas.",
        "correctExample": "A mídia deve promover campanhas educativas nas redes sociais, a fim de conscientizar a população sobre o tema.",
        "tip": "Evite soluções vagas, como apenas \"conscientizar\".",
        "question": "Uma solução completa:",
        "options": [
          "Tem agente, ação, meio, finalidade e detalhe",
          "Diz apenas \"melhorar tudo\"",
          "Pode ferir direitos humanos"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "modulo-5",
    "number": 5,
    "title": "As cinco competências do ENEM",
    "icon": "award",
    "color": "#7c3aed",
    "lessons": [
      {
        "id": "aula-5-1",
        "moduleIndex": 4,
        "number": 1,
        "title": "Competência 1: domínio da escrita formal",
        "explanation": "Avalia ortografia, acentuação, pontuação, concordância e linguagem formal. Evite gírias e abreviações.",
        "incorrectExample": "Os jovem tá sem acesso.",
        "correctExample": "Os jovens estão sem acesso.",
        "tip": "Releia o texto procurando vírgulas e concordância.",
        "question": "Qual frase segue a norma formal?",
        "options": [
          "A gente vamos resolver",
          "Nós vamos resolver",
          "Nóis vai resolver"
        ],
        "correctIndex": 1
      },
      {
        "id": "aula-5-2",
        "moduleIndex": 4,
        "number": 2,
        "title": "Competência 2: compreensão do tema e repertório",
        "explanation": "Verifica se você entendeu o tema, seguiu o tipo de texto dissertativo-argumentativo e usou repertório legítimo.",
        "incorrectExample": "Um texto narrativo sobre a sua vida.",
        "correctExample": "Um texto dissertativo com argumentos e repertório.",
        "tip": "Use repertório de áreas variadas.",
        "question": "Para ir bem na C2, é preciso:",
        "options": [
          "Seguir o tema e usar repertório",
          "Escrever sobre qualquer assunto",
          "Só copiar os textos de apoio"
        ],
        "correctIndex": 0
      },
      {
        "id": "aula-5-3",
        "moduleIndex": 4,
        "number": 3,
        "title": "Competência 3: seleção e organização dos argumentos",
        "explanation": "Avalia se suas ideias têm um projeto de texto: tese clara, argumentos conectados e coerentes.",
        "incorrectExample": "Ideias soltas e contraditórias.",
        "correctExample": "Tese, dois argumentos ligados e proposta coerente.",
        "tip": "Faça um esquema antes de escrever.",
        "question": "Projeto de texto significa:",
        "options": [
          "Planejar a ordem das ideias",
          "Escrever sem rascunho",
          "Mudar de assunto a cada parágrafo"
        ],
        "correctIndex": 0
      },
      {
        "id": "aula-5-4",
        "moduleIndex": 4,
        "number": 4,
        "title": "Competência 4: mecanismos linguísticos de coesão",
        "explanation": "Avalia o uso de conectivos e referências para ligar frases e parágrafos.",
        "incorrectExample": "A educação é importante. A educação ajuda. A educação...",
        "correctExample": "A educação é importante e, por isso, transforma vidas. Além disso, ela...",
        "tip": "Varie: portanto, contudo, ademais, dessa forma.",
        "question": "Qual conectivo indica oposição?",
        "options": [
          "Portanto",
          "Contudo",
          "Além disso"
        ],
        "correctIndex": 1
      },
      {
        "id": "aula-5-5",
        "moduleIndex": 4,
        "number": 5,
        "title": "Competência 5: proposta de intervenção",
        "explanation": "Avalia se a proposta tem os cinco elementos, se está ligada ao problema discutido e se respeita os direitos humanos.",
        "incorrectExample": "Uma proposta sem agente nem meio.",
        "correctExample": "Uma proposta completa, detalhada e respeitosa.",
        "tip": "Cada elemento vale pontos: não pule nenhum.",
        "question": "A C5 exige:",
        "options": [
          "Proposta completa e respeitosa",
          "Apenas críticas ao problema",
          "Texto em versos"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "modulo-6",
    "number": 6,
    "title": "Construindo sua primeira redação",
    "icon": "pen-tool",
    "color": "#2b6de0",
    "lessons": [
      {
        "id": "aula-6-1",
        "moduleIndex": 5,
        "number": 1,
        "title": "Como juntar introdução, desenvolvimento e conclusão",
        "explanation": "Monte: 1º parágrafo (contexto e tese), 2º e 3º (um argumento em cada) e 4º (retomada e proposta). Depois, revise a coesão entre eles.",
        "incorrectExample": "Parágrafos sem ligação entre si.",
        "correctExample": "Cada parágrafo começa com um conectivo que o liga ao anterior.",
        "tip": "Leia em voz alta para perceber a fluidez.",
        "question": "Quantos parágrafos tem a estrutura sugerida?",
        "options": [
          "Dois",
          "Quatro",
          "Dez"
        ],
        "correctIndex": 1
      },
      {
        "id": "aula-6-2",
        "moduleIndex": 5,
        "number": 2,
        "title": "Análise de exemplos de redações",
        "explanation": "Exemplo resumido. Tese: a desigualdade digital prejudica a educação. Argumento 1: falta de acesso à internet. Argumento 2: falta de formação dos professores. Proposta: o MEC deve oferecer conectividade e cursos.",
        "incorrectExample": "Texto sem tese e sem proposta.",
        "correctExample": "Texto com tese clara, argumentos ligados e proposta completa.",
        "tip": "Marque cada parte com uma cor ao analisar um texto.",
        "question": "No exemplo, qual é a tese?",
        "options": [
          "A desigualdade digital prejudica a educação",
          "O MEC deve agir",
          "Professores precisam de cursos"
        ],
        "correctIndex": 0
      },
      {
        "id": "aula-6-3",
        "moduleIndex": 5,
        "number": 3,
        "title": "Exercício final: sua primeira redação",
        "explanation": "Chegou a hora: escolha um tema na área Praticar e escreva uma redação completa usando tudo o que aprendeu.",
        "incorrectExample": "Escrever sem planejar.",
        "correctExample": "Planejar tese, dois argumentos e proposta antes de escrever.",
        "tip": "Use 30 minutos para planejar e escrever e depois revise.",
        "question": "Qual é o primeiro passo antes de escrever?",
        "options": [
          "Planejar tese e argumentos",
          "Escrever a conclusão",
          "Contar as linhas"
        ],
        "correctIndex": 0
      }
    ]
  }
];

const lessons = modules.flatMap(module => module.lessons);
const findLesson = id => lessons.find(lesson => lesson.id === id) || null;
const findModule = id => modules.find(module => module.id === id) || null;

module.exports = { modules, lessons, findLesson, findModule };
