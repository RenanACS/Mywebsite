/* global React */
const { createContext, useContext, useState: useStateI } = React;

const LangContext = createContext({ lang: 'pt', setLang: () => {} });

const T = {
  en: {
    nav: {
      about: 'about',
      projects: 'projects',
      skills: 'skills',
    },
    hero: {
      status: 'Available — heading toward red team',
      line2: 'I break things',
      line3: 'on purpose.',
      bio: [
        'Red teamer and bug hunter by day, drummer by night, learning to break into systems on weekends. I write code, read manpages, and keep a list of ',
        ' tabs open.',
      ],
      ctaPrimary: 'See projects',
      ctaSecondary: 'Say hi',
      comment: '// hover the buttons — they pull back',
    },
    about: {
      title: 'ABOUT',
      kicker1: 'A few facts.',
      kicker2: 'About me.',
      bio1a: "I'm ",
      bio1b: ', a Red teamer and bug hunter from Brazil. I came up writing application code and got hooked on the layer underneath — kernels, networks, the shape of how things actually run.',
      bio2a: "I'm pivoting into ",
      bio2b: 'offensive security',
      bio2c: ' — red team, pentest, the kind of work where you read a system long enough to find the seams. Studying for ',
      bio2d: ', sharpening tooling in CTFs, building things that put me closer to the metal.',
      bio3: "When I'm not at the keyboard I'm at a kit. Drums have been the longest-running thing in my life — patience, listening, repetition — and they show up in everything else I do.",
      keys: {
        based: 'based',
        dayJob: 'day job',
        studying: 'studying',
        instrument: 'instrument',
        companions: 'companions',
        editor: 'editor',
        shell: 'shell',
        reading: 'reading',
      },
      vals: {
        based: 'Brazil',
        dayJob: 'Red teamer & bug hunter',
        studying: 'Ethical Hacking - CISCO',
        instrument: 'Drums · 12 years and counting',
        companions: '2 cats, 1 dog',
      },
    },
    projects: {
      title: 'PROJECTS',
      kicker1: "What I'm building.",
      kicker2: 'From music to malware analysis.',
      viewCase: 'view case',
      items: [
        {
          category: 'music',
          statusLabel: 'WIP',
          blurb: 'A playable drum kit in the browser. Web Audio for the sounds, Canvas for the kit, keyboard + MIDI input. Built because nothing online felt like a real kit.',
        },
        {
          category: 'security',
          statusLabel: 'live',
          blurb: 'A broken-access-control training lab. Node/Express app with 15 challenges — IDOR, BFLA, and logic bugs — across three pluggable domains. Built to look and feel like a real product, not a flag grid.',
        },
      ],
    },
    skills: {
      title: 'SKILLS',
      kicker1: 'The stack.',
      kicker2: 'Two lists: shipping, studying.',
      groups: [
        { eyebrow: 'shipping', headline: 'What I reach for first.' },
        { eyebrow: 'studying', headline: "Where I'm headed." },
      ],
    },
    contact: {
      label: 'CONTACT',
      cta: "Let's talk.",
      footer: 'built · 0 frameworks · 1 cursor',
    },
  },

  pt: {
    nav: {
      about: 'sobre',
      projects: 'projetos',
      skills: 'habilidades',
    },
    hero: {
      status: 'Disponível — rumo ao red team',
      line2: 'Eu quebro coisas',
      line3: 'de propósito.',
      bio: [
        'Red teamer e bughunter de dia, baterista à noite, aprendendo a invadir sistemas nos fins de semana. Escrevo código, leio manpages e mantenho uma lista de abas de ',
        ' abertas.',
      ],
      ctaPrimary: 'Ver projetos',
      ctaSecondary: 'Fala comigo',
      comment: '// passe o mouse nos botões — eles puxam',
    },
    about: {
      title: 'SOBRE',
      kicker1: 'Alguns fatos.',
      kicker2: 'Sobre mim.',
      bio1a: 'Sou ',
      bio1b: ', um Red teamer e bughunter do Brasil. Comecei escrevendo código de aplicação e fui fisgado pela camada de baixo — kernels, redes, a forma como as coisas realmente funcionam.',
      bio2a: 'Estou migrando para ',
      bio2b: 'segurança ofensiva',
      bio2c: ' — red team, pentest, o tipo de trabalho onde você lê um sistema por tempo suficiente para encontrar as brechas. Estudando para ',
      bio2d: ', aprimorando ferramentas em CTFs, construindo coisas que me aproximam do metal.',
      bio3: 'Quando não estou no teclado, estou na bateria. A bateria tem sido a coisa mais duradoura na minha vida — paciência, escuta, repetição — e aparece em tudo o que faço.',
      keys: {
        based: 'localização',
        dayJob: 'trabalho',
        studying: 'estudando',
        instrument: 'instrumento',
        companions: 'companheiros',
        editor: 'editor',
        shell: 'shell',
        reading: 'lendo',
      },
      vals: {
        based: 'Brasil',
        dayJob: 'Red teamer e bughunter',
        studying: 'Ethical Hacking - CISCO',
        instrument: 'Bateria · 12 anos e contando',
        companions: '2 gatos, 1 cachorro',
      },
    },
    projects: {
      title: 'PROJETOS',
      kicker1: 'O que estou construindo.',
      kicker2: 'De música à análise de malware.',
      viewCase: 'ver projeto',
      items: [
        {
          category: 'música',
          statusLabel: 'WIP',
          blurb: 'Uma bateria tocável no navegador. Web Audio para os sons, Canvas para o kit, entrada por teclado + MIDI. Construído porque nada online parecia um kit de verdade.',
        },
        {
          category: 'segurança',
          statusLabel: 'live',
          blurb: 'Um lab de broken access control que parece um app de verdade. Node/Express com 15 desafios — IDOR, BFLA e bugs de lógica — em três domínios plugáveis. Feito para treinar o olho em superfície normal.',
        },
      ],
    },
    skills: {
      title: 'HABILIDADES',
      kicker1: 'O stack.',
      kicker2: 'Duas listas: usando, estudando.',
      groups: [
        { eyebrow: 'usando', headline: 'O que uso primeiro.' },
        { eyebrow: 'estudando', headline: 'Por onde estou indo.' },
      ],
    },
    contact: {
      label: 'CONTATO',
      cta: 'Vamos conversar.',
      footer: 'feito · 0 frameworks · 1 cursor',
    },
  },
};

function LangProvider({ children }) {
  const [lang, setLang] = useStateI('pt');
  return React.createElement(LangContext.Provider, { value: { lang, setLang } }, children);
}

function useLang() {
  return useContext(LangContext);
}

Object.assign(window, { LangContext, LangProvider, T, useLang });
