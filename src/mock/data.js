import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: '[Duy NGUYEN] | Web Developer | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Duy's Portfolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Duy NGUYEN',
  subtitle: 'I fall in love with Web Apps. 🌍',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatar.png',
  paragraphOne:
    'I realize that the IT industry is immense and rapidly changes days by days. Hence, I need to adapt to it by learning new technologies and enhancing my skills every day.',
  paragraphTwo:
    'As an experienced web developer, I have learned how to be responsible for not only myself but also my team. This has been an opportunity for me to become a dexterous developer, furthermore a better technical leader.',
  paragraphThree:
    'With extensive experience in web development and some small scale mobile application development, I’m sure that I can meet the client’s needs beyond expectation.',
  page: 'http://nhbduy.github.io/resume',
  resume: 'http://bit.ly/cv-nhbduy-web-developer-feb2020', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'captialmogul-website.png',
    title: 'CapitalMogul Website 🏬',
    info:
      '[Freelance project] A landing-page website with dual-languages (EN-VN) for CapitalMogul Real Estate Technology Investment.',
    info2: '(WordPress CMS, Elementor, HTML5, CSS3, Bootstrap)',
    url: 'https://capitalmogul.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'chat-app.png',
    title: 'Real-time Chat App 👨🏻‍💻👩🏻‍💻',
    info: 'A real-time chat application (group or P2P) with invitation link feature.',
    info2: '(ReactJS, NodeJS/ExpressJS, Socket.io, Knex.js, PostgreSQL, Heroku)',
    url: 'https://nhbduy-chat-application.herokuapp.com',
    repo: 'https://github.com/nhbduy/chat-application', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'face-recognition-app-02.png',
    title: 'Face Recognition App 👨‍👩‍👧‍👦',
    info:
      'A full-stack web application with the latest technologies, this app allows you to identify the detection of faces in any image supplied (using the artificial intelligence API named Clarifai)',
    info2: '(ReactJS/Redux, NodeJS/ExpressJS, Knex.js, PostgreSQL, Heroku)',
    url: 'https://nhbduy.github.io/face-recognition',
    repo: 'https://github.com/nhbduy/face-recognition', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Wanna work with me?',
  btn: "Let's talk",
  email: 'duy3105@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nhbduy',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/nhbduy',
    },
    {
      id: uuidv1(),
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/5666489/nhbduy',
    },
    {
      id: uuidv1(),
      name: 'code',
      url: 'https://leetcode.com/nhbduy',
    },
    // {
    //   id: uuidv1(),
    //   name: 'hackerrank',
    //   url: 'https://www.hackerrank.com/nhbduy',
    // },
    {
      id: uuidv1(),
      name: 'free-code-camp',
      url: 'https://www.freecodecamp.org/nhbduy',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/nhbduy',
    },
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/nhbduy75',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
