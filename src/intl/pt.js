const pt = {
  home: 'Home',
  projects: 'Projetos',
  topics: 'Tópicos',
  signin: 'Iniciar sessão',
  signout: 'Fechar sessão',
  learningObjectives: 'Objetivos de aprendizagem',
  webDev: 'Desenvolvimento Web',
  ux: 'UX Design',
  submit: 'Enviar',
  reset: 'Resetar',
  here: 'aqui',

  'not-available-in-lang': 'Este conteúdo não está disponível atualmente em português.',

  'top-bar/hire': 'Contrate talento',

  'home/alert-info': `
    Neste site você encontrará conteúdo de referência e suporte que utilizamos
    em nossos bootcamps.
  `,

  'home/alert-apply': `
    Se estiver interessada em candidatar-se, pode encontrar mais informações
    {link}.
  `,

  'projects.web-dev.intro': `
    <p>
      Nossa proposta de aprendizagem se baseia em
      <strong>aprender fazendo</strong>. O foco central de nosso currículo
      é um catálogo de projetos de complexidade crescente,
      associados a objetivos de aprendizagem concretos.
    </p>
    <p>
      <strong>Tanto o percurso de projetos escolhido como a duração e escopo de
      cada um, dependerão das necessidades, interesses e ritmo de aprendizagem
      de cada estudante</strong>. Ou seja, não é esperado que todas façam
      a mesma quantidade e nem os mesmos projetos, porém espera-se
      que seja concluído pelo menos um projeto de cada nível (0 a 4),
      sendo alcançado a maioria dos objetivos de
      aprendizagem correspondente de cada projeto.
    </p>
  `,

  'projects.web-dev.level.0': `
    <p>
      Os projetos deste nível se caracterizam por ser <strong>apps vanilla,
      ainda sem backend, sem persistência e sem autenticação</strong>.
    </p>
    <p>
      O foco nesta etapa são <strong>fundamentos de JavaScript</strong>,
      incluindo conceitos como <strong>variáveis</strong>,
      <strong>condicionais</strong>, <strong>strings</strong> e
      <strong>funções</strong>, assim como
      <strong>manipulação básica do DOM</strong>,
      <strong>eventos do DOM</strong>, fundamentos de <strong>HTML</strong>
      (<em>semântico</em>) e <strong>CSS</strong> (<em>seletores</em> e
      <em>regras de estilo</em>).
    </p>
  `,

  'projects.web-dev.level.1': `
    <p>
      Os projetos deste nível continuam sendo <strong>apps de uma só tela ou
      página, vanilla, ainda sem backend, nem persistência, nem
      autenticação</strong>.
    </p>
    <p>
      Neste nível aprofundamos um pouco mais em
      <strong>fundamentos de JavaScript</strong>, exploramos
      <strong>ciclos</strong> e <em>iteração</em>, além de introduzir a ideia
      de <strong>testes unitários</strong>, <strong>linters</strong>,
      <strong>módulos</strong> (<code>import</code>/<code>export</code>),
      <strong>controle de versão</strong> e <code>deploy</code> no GitHub
      Pages. Também é introduzido em detalhe a ideia de
      <strong>modelo de caixa (box model) do CSS</strong>.
    </p>
  `,

  'projects.web-dev.level.2': `
    <p>
      Os projetos deste nível continuam sendo <strong>apps de uma só tela ou
      página, vanilla, ainda sem backend, nem persistência, nem
      autenticação</strong>, mas aos poucos, vamos agregando complexidade,
      <strong>mais interação com o DOM</strong>, tipos de dados mais complexos,
      <strong>listas</strong> (filtrada, ordenada, etc) e
      <strong>objetos</strong>, assim como <strong>colaboração</strong> no
      GitHub e integração de mudanças através de <strong>pull requests</strong>
      e <strong>code review</strong>.
    </p>
    <p>
      Neste momento também é introduzido <strong>flexbox</strong>, além de
      conceitos de UX como <strong>testes de usabilidade</strong>.
    </p>
  `,

  'projects.web-dev.level.3': `
    <p>
      Neste <em>nível</em> finalmente passamos para <strong>aplicações
      com múltiplas telas, ainda em vanilla</strong>. Também é incluso
      <strong>autenticação com Firebase Auth</strong>, <strong>persistência de
      dados com Firestore</strong> e <strong>encaminhamento (rotas) de páginas
      ou componentes</strong>, introduzindo o conceito de <strong>SPA (Single
      Page Application)</strong>.
    </p>
    <p>
      Neste nível se aprofunda em <strong>assicronia com callbacks e promessas
      </strong>, sendo introduzido também os <strong>testes unitários
      assíncronos</strong> e <strong>mocks</strong>.
    </p>
      Quanto a colaboração, é esperado o uso de <strong>issues</strong>,
      <strong>milestones</strong>, e acompanhamento do avanço com
      <strong>GitHub projects</strong>.
    </p>
  `,

  'projects.web-dev.level.4': `
    <p>
      Este <em>nível</em> é muito mais amplo. Aqui encontramos projetos de
      frontend usando <strong>frameworks como React, Angular ou Vue</strong>,
      assim como projetos que saem do escopo do próprio frontend, fazendo
      uso de <strong>Node.js</strong>. Portanto, encontramos projetos de
      <strong>CLI</strong>, de <strong>backend com express</strong>, incluindo
      alguns com <strong>bancos de dados</strong>.
    </p>
    <p>
      Neste ponto, espera-se que cada pessoa vá escolhendo projetos
      cada vez mais diferentes, e portanto adquirindo habilidades e
      objetivos de aprendizagem distintos.
    </p>
  `,

  'projects.web-dev.level.5': `
    <p>
      A medida que avançamos de nível, a variedade de opções vai ampliando.
      Neste nível teremos projetos variados que abrangem temas tanto de
      <strong>frontend</strong> como de <strong>backend</strong>. A maioria
      destes projetos ficam dentro do universo de
      <strong>JavaScript/Node.js</strong>, mas nem todos. Há também
      projetos implementados em outros linguagens de programação, como por
      exemplo <strong>PHP/WordPress</strong>.
    </p>
    <p>
      Neste nível veremos projetos que apresentam tecnologias como
      <strong>cloud functions</strong>, <strong>web sockets</strong>,
      <strong>React Native</strong> e <strong>Docker</strong> entre outros.
    </p>
    <p>
      Este <em>nível</em> é <em>opcional</em>, e não se espera que todas tenham
      tempo de chegar a estes projetos durante o período de bootcamp.
    </p>
  `,

  'projects.web-dev.level.6': `
    <p>
      Como último nível, temos un único projeto chamado
      <em>Job Application</em>. Este projeto está focado na preparação para
      sair a buscar emprego como desenvolvedora. Este projeto está listado no
      final, mas isso não significa que é iniciado após ser completado os
      <em>níveis</em> anteriores. <strong>Este <em>nível</em> é obrigatório, com
      diferença do anterior, que é <em>opcional</em></strong>.
    </p>
  `,

  'projects.ux.intro': `
    <p>
      Nossa proposta de aprendizagem se baseia em
      <strong>aprender fazendo</strong>. O foco central de nosso currículo
      é um catálogo de projetos de complexidade gradualmente crescente, e
      associados a objetivos de aprendizagem concretos.
    </p>
    <p>
      Os primeiros projetos da trilha de aprendizado são introdutórios ao design
      de experiência do usuário. E os seguintes projetos são mais aplicados nos
      quais as alunas poderão trabalhar com desafios reais de empresas. A
      escolha dos desafios para trabalhar dependerá das <strong>necessidades e
      interesses de cada aluna</strong>. Isso significa que nos projetos que
      envolvam empresas, elas poderão escolher com qual empresa e equipe
      trabalhar. Espera-se que isso seja concluído por pelo menos um projeto de
      cada um dos níveis 0 a 4, tendo-se cumprido com a maioria dos objetivos de
      aprendizagem correspondentes.
    </p>
  `,
  'projects.ux.level.0': `
    <p>
    É a primeira abordagem das estudantes ao Design Centrado no Humano. Se dá
    durante o processo de admissão.
    </p>
  `,

  'projects.ux.level.1': `
    <p>
    A mentalidade de design centrado no ser humano é aplicada a um projeto de
    UX Design, aventurando-se em conceitos como <strong>usabilidade</strong>,
    <strong>utilidade</strong>, <strong>pesquisa com usuarios</strong>,
    <strong>principios de design visual</strong>, entre otros.
    </p>
  `,

  'projects.ux.level.2': `
    <p>
    É o primeiro desafio em que se trabalha com um cliente real. Além dos
    conceitos básicos de UX Design, as alunas devem aprender a entender o
    negócio, se comunicar e negociar com os clientes. E definir o escopo de seus
    projetos.
    </p>
  `,

  'projects.ux.level.3': `
    <p>
    É um desafio focado em fortalecer as habilidades de UI Design. A ideia é se
    sentir mais confortáveis criando interfaces e trabalhando com conceitos
    próprios neste campo: <strong>alinhamentos</strong>,
    <strong>hierarquias</strong>, <strong>estilos</strong>,
    <strong>guias de componentes</strong>, <strong>design responsivo</strong>,
    <strong>variantes</strong>, <strong>autolayout</strong>, entre otros.
    </p>
  `,

  'projects.ux.level.4': `
    <p>
    Durante estes desafios as estudantes colocarão em práctica tudo o que
    aprenderam durante o bootcamp para realizar uma consultoria em UX a
    diferentes empresas da indústria. Estes desafios incluem temas como
    <strong>service design</strong>, <strong>gerenciamento de dados</strong>,
    <strong>definição de KPIs</strong>, entre outros.
    </p>
  `,

  'gym': 'Exercícios',

  'quiz-results': 'Respostas corretas: {success}/{total}',

  'app-title': 'Laboratoria Currículum',

  'trivia': 'Trivia',

  'card-validation': 'Cartão de Crédito Válido',

  'cipher': 'Cifra de César',

  'data-lovers': 'Data Lovers',

  'emergency-room': 'Sala de Emergências',

  'memory-match': 'Memory Match Game',

  'movie-challenge': 'Movie Challenge',

  'social-network': 'Criando uma Rede Social',

  'burger-queen-api': 'Burger Queen - API com Node.js',

  'burger-queen-api-client': 'Burger Queen (API Client)',

  'md-links': 'Markdown Links',

  'movie-challenge-fw': 'Desafio de Filmes com Framework',

  'text-analyzer': 'Analisador de texto',

  'job-application': 'Projeto Job Application',

  'browser': 'Browser JavaScript',

  'css': 'CSS',

  'html': 'HTML',

  'javascript': 'JavaScript',

  'scm': 'Source Code Management (SCM) - Git + GitHub',

  'shell': 'Unix Shell',

};

export default pt;
