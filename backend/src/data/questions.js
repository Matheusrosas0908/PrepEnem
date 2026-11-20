// Quiz questions extracted from frontend HTML
// Organized by module and lesson

const questions = {
  "ciencia-natureza_lesson2": [
    {
      "id": 1,
      "text": "Em Genética, a manifestação observável de um gene, determinada também pelo ambiente, é chamada de:",
      "options": [
        "Genótipo",
        "Alelo",
        "Fenótipo",
        "Cromossomo"
      ],
      "answer": "Fenótipo"
    },
    {
      "id": 2,
      "text": "Um indivíduo com o genótipo 'Aa' é classificado como:",
      "options": [
        "Homozigoto Dominante",
        "Homozigoto Recessivo",
        "Heterozigoto",
        "Puro"
      ],
      "answer": "Heterozigoto"
    },
    {
      "id": 3,
      "text": "A Primeira Lei de Mendel (Lei da Segregação dos Fatores) afirma que:",
      "options": [
        "Os alelos sempre se unem nos gametas.",
        "Cada gameta carrega apenas um alelo para cada característica.",
        "Alelos de genes diferentes se segregam independentemente.",
        "O genótipo é sempre igual ao fenótipo."
      ],
      "answer": "Cada gameta carrega apenas um alelo para cada característica."
    },
    {
      "id": 4,
      "text": "Se um alelo é recessivo (a), ele só se manifesta no fenótipo quando o genótipo for:",
      "options": [
        "AA",
        "Aa",
        "aa",
        "Qualquer um dos anteriores"
      ],
      "answer": "aa"
    },
    {
      "id": 5,
      "text": "No cruzamento de dois heterozigotos (Aa x Aa), qual é a proporção de chance de nascer um indivíduo homozigoto recessivo (aa)?",
      "options": [
        "50% (1/2)",
        "75% (3/4)",
        "25% (1/4)",
        "100% (4/4)"
      ],
      "answer": "25% (1/4)"
    },
    {
      "id": 6,
      "text": "O conceito de 'Locus Gênico' se refere:",
      "options": [
        "Ao gene dominante.",
        "À separação dos alelos na meiose.",
        "À posição exata de um gene no cromossomo.",
        "Ao conjunto de características de um indivíduo."
      ],
      "answer": "À posição exata de um gene no cromossomo."
    },
    {
      "id": 7,
      "text": "Em um cruzamento entre 'AA' e 'aa', todos os descendentes (100%) terão o genótipo:",
      "options": [
        "AA",
        "Aa",
        "aa",
        "Metade AA e metade aa"
      ],
      "answer": "Aa"
    },
    {
      "id": 8,
      "text": "Para que a probabilidade de nascer um filho de olhos azuis (recessivo) E do sexo feminino ocorra, as probabilidades devem ser:",
      "options": [
        "Somadas",
        "Subtraídas",
        "Multiplicadas",
        "Divididas"
      ],
      "answer": "Multiplicadas"
    },
    {
      "id": 9,
      "text": "Qual é o termo utilizado para um indivíduo com alelos iguais (AA ou aa)?",
      "options": [
        "Híbrido",
        "Mestiço",
        "Heterozigoto",
        "Homozigoto"
      ],
      "answer": "Homozigoto"
    },
    {
      "id": 10,
      "text": "O que Mendel chamou de 'Fatores' em sua Primeira Lei, hoje é conhecido como:",
      "options": [
        "Cromossomos",
        "Gametas",
        "Genes",
        "RNA"
      ],
      "answer": "Genes"
    }
  ],
  "ciencia-natureza_lesson4": [
    {
      "id": 1,
      "text": "O que é o **Nicho Ecológico** de uma espécie?",
      "options": [
        "O local físico onde ela vive (habitat).",
        "O papel funcional que ela desempenha no ecossistema.",
        "O conjunto de indivíduos da mesma espécie.",
        "A soma das populações de uma região."
      ],
      "answer": "O papel funcional que ela desempenha no ecossistema."
    },
    {
      "id": 2,
      "text": "Em uma cadeia alimentar (Capim -> Coelho -> Cobra -> Gavião), qual organismo ocupa o **3º Nível Trófico**?",
      "options": [
        "Capim",
        "Coelho",
        "Cobra",
        "Gavião"
      ],
      "answer": "Cobra"
    },
    {
      "id": 3,
      "text": "Qual nível de organização ecológica é formado apenas por fatores **abióticos** e **bióticos** em interação?",
      "options": [
        "População",
        "Comunidade",
        "Ecossistema",
        "Biosfera"
      ],
      "answer": "Ecossistema"
    },
    {
      "id": 4,
      "text": "Qual é a principal forma de perda de energia entre os níveis tróficos?",
      "options": [
        "Por excreção de resíduos.",
        "Como calor metabólico.",
        "Pela atividade dos decompositores.",
        "Pela ingestão de água."
      ],
      "answer": "Como calor metabólico."
    },
    {
      "id": 5,
      "text": "Se uma população de coelhos tem o número de indivíduos aumentado, isso representa um estudo a nível de:",
      "options": [
        "Comunidade",
        "Ecossistema",
        "Biosfera",
        "População"
      ],
      "answer": "População"
    },
    {
      "id": 6,
      "text": "O que são organismos **produtores** em uma cadeia alimentar?",
      "options": [
        "Consumidores de primeira ordem.",
        "Organismos heterótrofos.",
        "Organismos que realizam fotossíntese ou quimiossíntese.",
        "Fungos e bactérias."
      ],
      "answer": "Organismos que realizam fotossíntese ou quimiossíntese."
    },
    {
      "id": 7,
      "text": "O que a **Biomagnificação** (ou Bioacumulação) representa nas cadeias alimentares?",
      "options": [
        "O aumento da biomassa em níveis tróficos superiores.",
        "O acúmulo de energia nos produtores.",
        "O aumento da concentração de poluentes não-biodegradáveis ao longo da cadeia.",
        "A perda de energia de 90% em cada nível."
      ],
      "answer": "O aumento da concentração de poluentes não-biodegradáveis ao longo da cadeia."
    },
    {
      "id": 8,
      "text": "Por que o fluxo de energia em um ecossistema é classificado como **unidirecional**?",
      "options": [
        "Porque a energia é ciclada pelos decompositores.",
        "Porque a energia entra no sistema e é gradualmente dissipada como calor.",
        "Porque os produtores não podem se alimentar dos consumidores.",
        "Porque a luz solar não atinge o fundo do oceano."
      ],
      "answer": "Porque a energia entra no sistema e é gradualmente dissipada como calor."
    },
    {
      "id": 9,
      "text": "Os fungos e bactérias, que são essenciais para a reciclagem de nutrientes, são classificados como:",
      "options": [
        "Consumidores primários",
        "Produtores",
        "Decompositores",
        "Herbívoro"
      ],
      "answer": "Decompositores"
    },
    {
      "id": 10,
      "text": "No contexto da Ecologia, o termo **Comunidade** refere-se a:",
      "options": [
        "Uma única espécie em uma área.",
        "Um conjunto de fatores abióticos.",
        "Populações de espécies diferentes interagindo.",
        "Uma população e seu meio físico."
      ],
      "answer": "Populações de espécies diferentes interagindo."
    }
  ],
  "ciencia-natureza_lesson5": [
    {
      "id": 1,
      "text": "Segundo a Organização Mundial da Saúde (OMS), o que é **Saúde**?",
      "options": [
        "A ausência de doenças e enfermidades.",
        "O bem-estar físico e mental apenas.",
        "Um estado de completo bem-estar físico, mental e social.",
        "A capacidade de realizar exercícios físicos de alta intensidade."
      ],
      "answer": "Um estado de completo bem-estar físico, mental e social."
    },
    {
      "id": 2,
      "text": "Qual dos seguintes não é um pilar do **Saneamento Básico** no Brasil?",
      "options": [
        "Abastecimento de água potável",
        "Esgotamento sanitário",
        "Transporte público de qualidade",
        "Manejo de resíduos sólidos"
      ],
      "answer": "Transporte público de qualidade"
    },
    {
      "id": 3,
      "text": "Qual é a principal consequência da falta de esgotamento sanitário adequado em áreas urbanas?",
      "options": [
        "Aumento da poluição atmosférica.",
        "Diminuição do custo da água.",
        "Aumento de doenças de veiculação hídrica.",
        "Melhora na drenagem de águas pluviais."
      ],
      "answer": "Aumento de doenças de veiculação hídrica."
    },
    {
      "id": 4,
      "text": "O **Sedentarismo** é considerado um fator de risco primário para:",
      "options": [
        "Doenças infecciosas como a dengue.",
        "Câncer de pele.",
        "Doenças Crônicas Não Transmissíveis (DCNTs), como hipertensão.",
        "Acidentes de trabalho."
      ],
      "answer": "Doenças Crônicas Não Transmissíveis (DCNTs), como hipertensão."
    },
    {
      "id": 5,
      "text": "O conceito de **Sustentabilidade** envolve a satisfação das necessidades atuais sem comprometer a capacidade das futuras gerações de satisfazerem as suas. Esse conceito está ligado a qual esfera?",
      "options": [
        "Apenas a esfera econômica.",
        "Apenas a esfera ambiental.",
        "Esferas ambiental, social e econômica.",
        "Apenas a esfera política."
      ],
      "answer": "Esferas ambiental, social e econômica."
    },
    {
      "id": 6,
      "text": "Qual é o termo utilizado para o conjunto de intervenções que visam o controle de fatores ambientais que podem afetar a saúde humana?",
      "options": [
        "Vigilância Sanitária",
        "Saneamento Ambiental",
        "Educação Sanitária",
        "Vigilância Epidemiológica"
      ],
      "answer": "Saneamento Ambiental"
    },
    {
      "id": 7,
      "text": "Uma dieta rica em **alimentos ultraprocessados** é criticada por qual motivo principal?",
      "options": [
        "Alto custo de produção.",
        "Baixo teor de sódio e açúcares.",
        "Alto teor de aditivos, gorduras e calorias vazias.",
        "Excesso de fibras e vitaminas."
      ],
      "answer": "Alto teor de aditivos, gorduras e calorias vazias."
    },
    {
      "id": 8,
      "text": "A prática regular de exercícios físicos, além dos benefícios cardiovasculares, contribui diretamente para a saúde mental, atuando na:",
      "options": [
        "Redução da inteligência motora.",
        "Diminuição dos níveis de estresse e ansiedade.",
        "Aumento da pressão arterial.",
        "Exclusiva prevenção de lesões ósseas."
      ],
      "answer": "Diminuição dos níveis de estresse e ansiedade."
    },
    {
      "id": 9,
      "text": "Qual a importância do tratamento da água e do esgoto para a qualidade de vida nas grandes cidades?",
      "options": [
        "Melhorar a estética dos rios.",
        "Reduzir a necessidade de drenagem pluvial.",
        "Prevenir a disseminação de epidemias e proteger o meio ambiente.",
        "Diminuir o volume de resíduos sólidos."
      ],
      "answer": "Prevenir a disseminação de epidemias e proteger o meio ambiente."
    },
    {
      "id": 10,
      "text": "O que significa o termo 'doença crônica não transmissível' (DCNT) e qual a sua relação com a qualidade de vida?",
      "options": [
        "Doenças causadas por vírus e bactérias; baixa relação.",
        "Doenças de longa duração, como diabetes e hipertensão; alta relação com o estilo de vida.",
        "Doenças transmitidas pela água; nenhuma relação.",
        "Doenças geneticamente hereditárias; pouca relação com o estilo de vida."
      ],
      "answer": "Doenças de longa duração, como diabetes e hipertensão; alta relação com o estilo de vida."
    }
  ],
  "matematica_lesson2": [
    {
      "id": 1,
      "text": "Em um conjunto de notas (5, 7, 8, 10), qual é a Média Aritmética?",
      "options": [
        "6",
        "7.5",
        "8",
        "9"
      ],
      "answer": "7.5"
    },
    {
      "id": 2,
      "text": "Qual é a Mediana do conjunto de dados ordenado (1, 3, 5, 8, 9)?",
      "options": [
        "1",
        "5",
        "8",
        "9"
      ],
      "answer": "5"
    },
    {
      "id": 3,
      "text": "Em um conjunto (10, 10, 15, 20, 20, 10), qual é a Moda?",
      "options": [
        "10",
        "15",
        "20",
        "Bimodal (10 e 20)"
      ],
      "answer": "10"
    },
    {
      "id": 4,
      "text": "Para calcular a nota de um aluno, onde a prova 1 tem peso 2 e a prova 2 tem peso 3, qual medida deve ser usada?",
      "options": [
        "Média Aritmética",
        "Mediana",
        "Moda",
        "Média Ponderada"
      ],
      "answer": "Média Ponderada"
    },
    {
      "id": 5,
      "text": "Qual medida de tendência central exige que os dados sejam obrigatoriamente ordenados?",
      "options": [
        "Média Aritmética",
        "Mediana",
        "Moda",
        "Desvio Padrão"
      ],
      "answer": "Mediana"
    },
    {
      "id": 6,
      "text": "A medida que é menos afetada por valores extremos (outliers) e melhor representa a realidade de distribuição de renda é a:",
      "options": [
        "Média Aritmética",
        "Mediana",
        "Moda",
        "Média Ponderada"
      ],
      "answer": "Mediana"
    },
    {
      "id": 7,
      "text": "Um conjunto de dados (3, 5, 7, 9) é classificado, em relação à Moda, como:",
      "options": [
        "Unimodal",
        "Bimodal",
        "Amodal",
        "Multimodal"
      ],
      "answer": "Amodal"
    },
    {
      "id": 8,
      "text": "Qual a Mediana do conjunto (2, 4, 6, 8)?",
      "options": [
        "4",
        "5",
        "6",
        "5.5"
      ],
      "answer": "5"
    },
    {
      "id": 9,
      "text": "No cálculo da Média Ponderada, o denominador da fórmula é a:",
      "options": [
        "Quantidade de elementos",
        "Soma dos valores",
        "Soma dos pesos",
        "Produto dos pesos"
      ],
      "answer": "Soma dos pesos"
    },
    {
      "id": 10,
      "text": "A Moda é a medida que indica:",
      "options": [
        "O valor mais central",
        "O valor mais frequente",
        "A soma dos valores",
        "O valor mais distante da média"
      ],
      "answer": "O valor mais frequente"
    }
  ],
  "matematica_lesson4": [
    {
      "id": 1,
      "text": "Em um conjunto de notas (5, 7, 8, 10), qual é a Média Aritmética?",
      "options": [
        "6",
        "7.5",
        "8",
        "9"
      ],
      "answer": "7.5"
    },
    {
      "id": 2,
      "text": "Qual é a Mediana do conjunto de dados ordenado (1, 3, 5, 8, 9)?",
      "options": [
        "1",
        "5",
        "8",
        "9"
      ],
      "answer": "5"
    },
    {
      "id": 3,
      "text": "Em um conjunto (10, 10, 15, 20, 20, 10), qual é a Moda?",
      "options": [
        "10",
        "15",
        "20",
        "Bimodal (10 e 20)"
      ],
      "answer": "10"
    },
    {
      "id": 4,
      "text": "Para calcular a nota de um aluno, onde a prova 1 tem peso 2 e a prova 2 tem peso 3, qual medida deve ser usada?",
      "options": [
        "Média Aritmética",
        "Mediana",
        "Moda",
        "Média Ponderada"
      ],
      "answer": "Média Ponderada"
    },
    {
      "id": 5,
      "text": "Qual medida de tendência central exige que os dados sejam obrigatoriamente ordenados?",
      "options": [
        "Média Aritmética",
        "Mediana",
        "Moda",
        "Desvio Padrão"
      ],
      "answer": "Mediana"
    },
    {
      "id": 6,
      "text": "A medida que é menos afetada por valores extremos (outliers) e melhor representa a realidade de distribuição de renda é a:",
      "options": [
        "Média Aritmética",
        "Mediana",
        "Moda",
        "Média Ponderada"
      ],
      "answer": "Mediana"
    },
    {
      "id": 7,
      "text": "Um conjunto de dados (3, 5, 7, 9) é classificado, em relação à Moda, como:",
      "options": [
        "Unimodal",
        "Bimodal",
        "Amodal",
        "Multimodal"
      ],
      "answer": "Amodal"
    },
    {
      "id": 8,
      "text": "Qual a Mediana do conjunto (2, 4, 6, 8)?",
      "options": [
        "4",
        "5",
        "6",
        "5.5"
      ],
      "answer": "5"
    },
    {
      "id": 9,
      "text": "No cálculo da Média Ponderada, o denominador da fórmula é a:",
      "options": [
        "Quantidade de elementos",
        "Soma dos valores",
        "Soma dos pesos",
        "Produto dos pesos"
      ],
      "answer": "Soma dos pesos"
    },
    {
      "id": 10,
      "text": "A Moda é a medida que indica:",
      "options": [
        "O valor mais central",
        "O valor mais frequente",
        "A soma dos valores",
        "O valor mais distante da média"
      ],
      "answer": "O valor mais frequente"
    }
  ],
  "matematica_lesson5": [
    {
      "id": 1,
      "text": "Uma matriz do tipo A(3 x 4) possui quantas linhas e colunas, respectivamente?",
      "options": [
        "3 linhas e 3 colunas",
        "4 linhas e 3 colunas",
        "3 linhas e 4 colunas",
        "4 linhas e 4 colunas"
      ],
      "answer": "3 linhas e 4 colunas"
    },
    {
      "id": 2,
      "text": "Em uma matriz A, o elemento a(1,3) está localizado na:",
      "options": [
        "3ª linha e 1ª coluna",
        "1ª linha e 3ª coluna",
        "1ª linha e 1ª coluna",
        "3ª linha e 3ª coluna"
      ],
      "answer": "1ª linha e 3ª coluna"
    },
    {
      "id": 3,
      "text": "Se A = [ [2, 1] / [0, 3] ], qual é o valor do seu Determinante?",
      "options": [
        "3",
        "6",
        "5",
        "4"
      ],
      "answer": "6"
    },
    {
      "id": 4,
      "text": "Qual das operações a seguir exige que as matrizes tenham a mesma ordem (m x n)?",
      "options": [
        "Multiplicação",
        "Cálculo de Determinante",
        "Adição (Soma)",
        "Matriz Transposta"
      ],
      "answer": "Adição (Soma)"
    },
    {
      "id": 5,
      "text": "Se uma matriz tem 5 linhas e 5 colunas, ela é classificada como uma:",
      "options": [
        "Matriz Coluna",
        "Matriz Linha",
        "Matriz Nula",
        "Matriz Quadrada"
      ],
      "answer": "Matriz Quadrada"
    },
    {
      "id": 6,
      "text": "O que acontece com as linhas e colunas de uma matriz ao calcular sua Transposta (At)?",
      "options": [
        "As linhas são somadas",
        "As linhas viram colunas e vice-versa",
        "Apenas a diagonal principal muda",
        "Todos os elementos são multiplicados por -1"
      ],
      "answer": "As linhas viram colunas e vice-versa"
    },
    {
      "id": 7,
      "text": "Dadas A = [ 1 / 2 ] e B = [ 3 / 4 ], qual é o resultado de A + B? (Note: Matrizes Coluna)",
      "options": [
        "[ 3 / 8 ]",
        "[ 4 / 6 ]",
        "[ [1, 3] / [2, 4] ]",
        "A operação é impossível"
      ],
      "answer": "[ 4 / 6 ]"
    },
    {
      "id": 8,
      "text": "A Regra de Sarrus é utilizada para calcular o Determinante de matrizes de qual ordem?",
      "options": [
        "2 x 2",
        "3 x 3",
        "4 x 4 ou maior",
        "1 x 1"
      ],
      "answer": "3 x 3"
    },
    {
      "id": 9,
      "text": "Para que o produto de matrizes A(m x p) * B(q x n) seja possível, qual condição deve ser satisfeita?",
      "options": [
        "m = n",
        "p = q",
        "m = q",
        "p = n"
      ],
      "answer": "p = q"
    },
    {
      "id": 10,
      "text": "Qual é o valor do Determinante de [ [5, 2] / [5, 2] ]?",
      "options": [
        "14",
        "10",
        "0",
        "-10"
      ],
      "answer": "0"
    }
  ],
  "portugues_lesson1": [
    {
      "id": 1,
      "text": "Qual figura de construção consiste na inversão da ordem direta dos termos da oração (Sujeito + Verbo + Complementos)?",
      "options": [
        "Elipse",
        "Zeugma",
        "Silepse",
        "Hipérbato",
        "Anáfora"
      ],
      "answer": "Hipérbato"
    },
    {
      "id": 2,
      "text": "Identifique a figura de construção presente em: 'Eu trouxe o vinho; ele, a cerveja.'",
      "options": [
        "Elipse",
        "Zeugma",
        "Assíndeto",
        "Hipérbole",
        "Catacrese"
      ],
      "answer": "Zeugma"
    },
    {
      "id": 3,
      "text": "O uso repetido e intencional da conjunção 'e' em: 'E a lua brincava, e os sinos tocavam, e as estrelas brilhavam...' é um exemplo de:",
      "options": [
        "Anáfora",
        "Polissíndeto",
        "Assíndeto",
        "Elipse",
        "Silepse"
      ],
      "answer": "Polissíndeto"
    },
    {
      "id": 4,
      "text": "Qual figura é caracterizada pela omissão de um termo que pode ser facilmente subentendido pelo contexto, mas que **não foi mencionado antes** na oração? Ex: 'Na sala, dois professores.' (Omissão de 'estavam').",
      "options": [
        "Silepse",
        "Zeugma",
        "Hipérbato",
        "Elipse",
        "Metonímia"
      ],
      "answer": "Elipse"
    },
    {
      "id": 5,
      "text": "Na frase 'A gente somos inseparáveis', a concordância feita com a ideia ('nós') e não com a forma gramatical ('a gente', no singular) é um caso de:",
      "options": [
        "Prosopopeia",
        "Catacrese",
        "Silepse",
        "Hipérbato",
        "Assíndeto"
      ],
      "answer": "Silepse"
    },
    {
      "id": 6,
      "text": "A ausência total de conjunções para ligar orações ou termos em uma enumeração rápida, como em 'Vim, vi, venci.', é chamada de:",
      "options": [
        "Polissíndeto",
        "Anacoluto",
        "Assíndeto",
        "Hipérbato",
        "Ironia"
      ],
      "answer": "Assíndeto"
    },
    {
      "id": 7,
      "text": "Qual figura de linguagem ocorre na repetição da mesma palavra ou grupo de palavras no início de frases ou versos sucessivos?",
      "options": [
        "Metonímia",
        "Eufemismo",
        "Assíndeto",
        "Anáfora",
        "Pleonasmo"
      ],
      "answer": "Anáfora"
    },
    {
      "id": 8,
      "text": "Identifique a figura de construção em: 'Os lusíadas, nascemos com o espírito aventureiro.' (Concordância com 'nós' implícito).",
      "options": [
        "Silepse de pessoa",
        "Hipérbato",
        "Zeugma",
        "Anacoluto",
        "Elipse"
      ],
      "answer": "Silepse de pessoa"
    },
    {
      "id": 9,
      "text": "A inversão radical dos termos que torna a frase mais complexa, como em 'Do vento, as folhas caíam leves', é classificada como:",
      "options": [
        "Anacoluto",
        "Pleonasmo",
        "Hipérbato",
        "Polissíndeto",
        "Elipse"
      ],
      "answer": "Hipérbato"
    },
    {
      "id": 10,
      "text": "Em qual das frases abaixo a figura de construção **Zeugma** está presente?",
      "options": [
        "Os políticos, não confio neles.",
        "Tudo passa, tudo se transforma.",
        "João lavou o carro, e Maria, a casa.",
        "E chove, e faz vento, e relampeja.",
        "Nós, a juventude, queremos paz."
      ],
      "answer": "João lavou o carro, e Maria, a casa."
    }
  ],
  "portugues_lesson2": [
    {
      "id": 1,
      "text": "Qual figura de construção consiste na inversão da ordem direta dos termos da oração (Sujeito + Verbo + Complementos)?",
      "options": [
        "Elipse",
        "Zeugma",
        "Silepse",
        "Hipérbato",
        "Anáfora"
      ],
      "answer": "Hipérbato"
    },
    {
      "id": 2,
      "text": "Identifique a figura em: 'Eu trouxe o vinho; ele, a cerveja.'",
      "options": [
        "Elipse",
        "Zeugma",
        "Assíndeto",
        "Hipérbole",
        "Catacrese"
      ],
      "answer": "Zeugma"
    },
    {
      "id": 3,
      "text": "O uso repetido de 'e' em: 'E a lua brincava, e os sinos tocavam, e as estrelas brilhavam...' é um exemplo de:",
      "options": [
        "Anáfora",
        "Polissíndeto",
        "Assíndeto",
        "Elipse",
        "Silepse"
      ],
      "answer": "Polissíndeto"
    },
    {
      "id": 4,
      "text": "Qual figura é caracterizada pela omissão de um termo que NÃO foi mencionado anteriormente? Ex: 'Na sala, dois professores.'",
      "options": [
        "Silepse",
        "Zeugma",
        "Hipérbato",
        "Elipse",
        "Metonímia"
      ],
      "answer": "Elipse"
    },
    {
      "id": 5,
      "text": "Na frase 'A gente somos inseparáveis', a concordância com a ideia ('nós') e não com a forma ('a gente') é um caso de:",
      "options": [
        "Prosopopeia",
        "Catacrese",
        "Silepse",
        "Hipérbato",
        "Assíndeto"
      ],
      "answer": "Silepse"
    },
    {
      "id": 6,
      "text": "A ausência total de conectivos para ligar termos em 'Vim, vi, venci.' é chamada de:",
      "options": [
        "Polissíndeto",
        "Anacoluto",
        "Assíndeto",
        "Hipérbato",
        "Ironia"
      ],
      "answer": "Assíndeto"
    },
    {
      "id": 7,
      "text": "'Todo mundo aqui sabia o que era mais respeitado naquela sala.' - Esta inversão da ordem sintática é um exemplo de:",
      "options": [
        "Anacoluto",
        "Elipse",
        "Hipérbato",
        "Silepse",
        "Zeugma"
      ],
      "answer": "Hipérbato"
    },
    {
      "id": 8,
      "text": "Qual opção NÃO é uma figura de construção de frase?",
      "options": [
        "Polissíndeto",
        "Assíndeto",
        "Anáfora",
        "Metáfora",
        "Anacoluto"
      ],
      "answer": "Metáfora"
    },
    {
      "id": 9,
      "text": "Em 'Não sei a ninguém vencer como tu', a omissão de 'quem' após 'como' caracteriza:",
      "options": [
        "Elipse",
        "Zeugma",
        "Silepse",
        "Hipérbato",
        "Anáfora"
      ],
      "answer": "Elipse"
    },
    {
      "id": 10,
      "text": "'Não é a toa que és minha fortuna.' - A inversão do verbo para posição inicial caracteriza:",
      "options": [
        "Anacoluto",
        "Hipérbato",
        "Polissíndeto",
        "Zeugma",
        "Silepse"
      ],
      "answer": "Hipérbato"
    }
  ],
  "portugues_lesson3": [
    {
      "id": 1,
      "text": "Complete: 'O tempo ______.' Esta frase é um exemplo de:",
      "options": [
        "Metáfora",
        "Comparação",
        "Hipérbole",
        "Anáfora",
        "Elipse"
      ],
      "answer": "Metáfora"
    },
    {
      "id": 2,
      "text": "Identifique a figura em: 'Meus olhos são dois pepinos.'",
      "options": [
        "Comparação",
        "Metáfora",
        "Eufemismo",
        "Litote",
        "Epíteto"
      ],
      "answer": "Metáfora"
    },
    {
      "id": 3,
      "text": "'Corre como o vento' é um exemplo de:",
      "options": [
        "Metáfora",
        "Comparação",
        "Hipérbole",
        "Antítese",
        "Ironia"
      ],
      "answer": "Comparação"
    },
    {
      "id": 4,
      "text": "Qual figura usa exagero para intensificar o sentido?",
      "options": [
        "Metáfora",
        "Comparação",
        "Hipérbole",
        "Litote",
        "Eufemismo"
      ],
      "answer": "Hipérbole"
    },
    {
      "id": 5,
      "text": "'A fome é uma tabela de prata' - qual figura está presente?",
      "options": [
        "Metáfora",
        "Comparação",
        "Eufemismo",
        "Epíteto",
        "Antítese"
      ],
      "answer": "Metáfora"
    },
    {
      "id": 6,
      "text": "Em 'Não é um absurdo o que fizeste', qual figura é usada?",
      "options": [
        "Litote",
        "Ironia",
        "Eufemismo",
        "Hipérbole",
        "Antítese"
      ],
      "answer": "Litote"
    },
    {
      "id": 7,
      "text": "'Essa moça é uma princesa' - esta afirmação é um exemplo de:",
      "options": [
        "Epíteto",
        "Metáfora",
        "Comparação",
        "Hipérbole",
        "Eufemismo"
      ],
      "answer": "Epíteto"
    },
    {
      "id": 8,
      "text": "Qual alternativa NÃO é uma figura de pensamento?",
      "options": [
        "Hipérbole",
        "Metáfora",
        "Epíteto",
        "Elipse",
        "Comparação"
      ],
      "answer": "Elipse"
    },
    {
      "id": 9,
      "text": "'Vamos combinar que nunca mais nos combinaremos' - qual figura está presente?",
      "options": [
        "Ironia",
        "Anáfora",
        "Eufemismo",
        "Litote",
        "Antítese"
      ],
      "answer": "Ironia"
    },
    {
      "id": 10,
      "text": "Assinale a alternativa que apresenta uma antítese:",
      "options": [
        "O tempo é inconstânte.",
        "É a partíria da vida, o éter da morte.",
        "Corre como o vento.",
        "Tenho mil problemas.",
        "Meus olhos são dois pepinos."
      ],
      "answer": "É a partíria da vida, o éter da morte."
    }
  ],
  "portugues_lesson4": [
    {
      "id": 1,
      "text": "Qual figura reproduz sons da natureza? Ex: 'O cão late, o gato mia, o vento uiva.'",
      "options": [
        "Onomatopeia",
        "Imagem",
        "Aliteração",
        "Assonância",
        "Epíteto"
      ],
      "answer": "Onomatopeia"
    },
    {
      "id": 2,
      "text": "Em 'Pedra, pomba, pólvora', qual figura está presente?",
      "options": [
        "Aliteração",
        "Assonância",
        "Onomatopeia",
        "Metáfora",
        "Eufemismo"
      ],
      "answer": "Aliteração"
    },
    {
      "id": 3,
      "text": "Qual figura repete sons vocais internos? Ex: 'Asma, rasteira, casta.'",
      "options": [
        "Aliteração",
        "Assonância",
        "Afonía",
        "Onomatopeia",
        "Imagem"
      ],
      "answer": "Assonância"
    },
    {
      "id": 4,
      "text": "'O rrrrr da chuva' é um exemplo de figura que reforça o som pela escrita:",
      "options": [
        "Onomatopeia",
        "Palavra Graphicamente",
        "Aliteração",
        "Imagem",
        "Epíteto"
      ],
      "answer": "Palavra Graphicamente"
    },
    {
      "id": 5,
      "text": "Em 'Seus olhos eram dois olhos de cisne', qual figura é usada?",
      "options": [
        "Imagem",
        "Onomatopeia",
        "Aliteração",
        "Hipérbole",
        "Metáfora"
      ],
      "answer": "Imagem"
    },
    {
      "id": 6,
      "text": "'Brilha, brilhosa, brilhantemente' é um exemplo de:",
      "options": [
        "Aliteração",
        "Assonância",
        "Afonía",
        "Onomatopeia",
        "Epíteto"
      ],
      "answer": "Afonía"
    },
    {
      "id": 7,
      "text": "Qual alternativa NÃO é uma figura de palavras?",
      "options": [
        "Onomatopeia",
        "Aliteração",
        "Hipérbope",
        "Assonância",
        "Imagem"
      ],
      "answer": "Hipérbope"
    },
    {
      "id": 8,
      "text": "Em 'Tinha uma vez uma gaivota que ia voando', qual figura está presente?",
      "options": [
        "Aliteração",
        "Onomatopeia",
        "Assonância",
        "Imagem",
        "Eufemismo"
      ],
      "answer": "Aliteração"
    },
    {
      "id": 9,
      "text": "Qual figura reúne a repetição de sons consonantis e vocais?",
      "options": [
        "Aliteração",
        "Assonância",
        "Onomatopeia",
        "Todas as anteriores",
        "Nenhuma das anteriores"
      ],
      "answer": "Todas as anteriores"
    },
    {
      "id": 10,
      "text": "Em 'O vento uiva, uivando, uivando...', a repetição do 'ui' indica:",
      "options": [
        "Onomatopeia",
        "Aliteração",
        "Assonância",
        "Imagem",
        "Afonía"
      ],
      "answer": "Assonância"
    }
  ],
  "portugues_lesson5": [
    {
      "id": 1,
      "text": "Qual figura estuda a organização sonora em prosa e verso?",
      "options": [
        "Rima",
        "Métrica",
        "Escalão",
        "Arte Maior",
        "Arte Menor"
      ],
      "answer": "Rima"
    },
    {
      "id": 2,
      "text": "Um verso de 8 sílabas com esquema de rima é chamado de arte ___",
      "options": [
        "Maior",
        "Menor",
        "Livre",
        "Branco",
        "Reduzido"
      ],
      "answer": "Menor"
    },
    {
      "id": 3,
      "text": "Qual alternativa apresenta um verso de 12 sílabas?",
      "options": [
        "Arte Menor",
        "Arte Maior",
        "Redonda",
        "Breve",
        "Livre"
      ],
      "answer": "Arte Maior"
    },
    {
      "id": 4,
      "text": "'Paz / traz' é um exemplo de:",
      "options": [
        "Rima Rica",
        "Rima Redunda",
        "Rima Obscura",
        "Rima Consoante",
        "Rima Exata"
      ],
      "answer": "Rima Redunda"
    },
    {
      "id": 5,
      "text": "Em poesia, o grupo de versos com a mesma métrica é chamado de:",
      "options": [
        "Rima",
        "Escalão",
        "Métrica",
        "Redação",
        "Estrofe"
      ],
      "answer": "Escalão"
    },
    {
      "id": 6,
      "text": "Qual alternativa NÃO é uma figura de som?",
      "options": [
        "Onomatopeia",
        "Rima",
        "Métrica",
        "Aliteração",
        "Escalão"
      ],
      "answer": "Aliteração"
    },
    {
      "id": 7,
      "text": "Em 'O sol brilha no céu azul', o som repetido no final dos versos é:",
      "options": [
        "Rima",
        "Assonância",
        "Aliteração",
        "Consoante",
        "Metáfora"
      ],
      "answer": "Rima"
    },
    {
      "id": 8,
      "text": "Quantas sílabas tem um verso de arte maior?",
      "options": [
        "7",
        "8",
        "10",
        "11",
        "12"
      ],
      "answer": "12"
    },
    {
      "id": 9,
      "text": "'Luz / cruz' é um exemplo de rima que repete vogais e consoantes finais:",
      "options": [
        "Rima Rica",
        "Rima Redunda",
        "Rima Consoante",
        "Rima Vogal",
        "Rima Total"
      ],
      "answer": "Rima Redunda"
    },
    {
      "id": 10,
      "text": "Em 'Ser ou não ser, eis a questão', o verso tem como métrica:",
      "options": [
        "8 sílabas",
        "10 sílabas",
        "11 sílabas",
        "12 sílabas",
        "14 sílabas"
      ],
      "answer": "11 sílabas"
    }
  ]
};

module.exports = questions;
