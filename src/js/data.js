const data = {
  hero: {
    name: 'Duy NGUYEN',
    title: 'I fall in love with Web Apps. 🌍'
  },
  about: {
    info:
      'As a Experienced Web Developer, I have many interests in web, mobile, network and the Internet of Things(IoT) field.I have always learned new skills and new technologies which are attractive to me, especially the Internet, the World Wide Web and the Multimedia technology.My professional experiences includes web development and some small scale mobile application development.',
    pageUrl: 'http://nhbduy.github.io/resume',
    cvUrl: 'http://bit.ly/cv-nhbduy-web-developer'
  },
  projects: {
    capitalMogul: {
      name: 'CapitalMogul Website 🏬',
      sourceUrl: '',
      pageUrl: 'https://capitalmogul.com'
    },
    chatApplication: {
      name: 'Real-time Chat App 👨🏻‍💻👩🏻‍💻',
      sourceUrl: 'https://github.com/nhbduy/chat-application',
      pageUrl: 'https://nhbduy-chat-application.herokuapp.com'
    },
    faceRecognition: {
      name: 'Face Recognition App 👨‍👩‍👧‍👦',
      sourceUrl: 'https://github.com/nhbduy/face-recognition',
      pageUrl: 'https://nhbduy.github.io/face-recognition'
    }
  },
  contact: {
    action: 'mailto:duy3105@gmail.com'
  },
  footer: {
    github: 'https://github.com/nhbduy',
    stackOverflow: 'https://stackoverflow.com/users/5666489/nhbduy',
    codepen: 'https://codepen.io/nhbduy',
    linkedin: 'https://www.linkedin.com/in/nhbduy',
    twitter: 'https://twitter.com/nhbduy75',
    fullName: 'Hoang-Bao-Duy NGUYEN',
    creditName: 'Jacobo Martinez',
    creditUrl: 'https://github.com/cobidev/simplefolio'
  }
};

export default function() {
  const renderHeroSection = () => {
    const { name, title } = data.hero;

    $('#hero .name').text(name);
    $('#hero .title').text(title);
  };

  const renderAboutSection = () => {
    const { info, pageUrl, cvUrl } = data.about;

    $('#about .info').text(info);
    $('#about a.page').attr('href', pageUrl);
    $('#about a.cv').attr('href', cvUrl);
  };

  const renderProjectSection = project => {
    const { name, pageUrl, sourceUrl } = data.projects[project];

    $('#projects' + ` .${project} ` + 'h3.title').text(name);
    $('#projects' + ` .${project} ` + 'a.cta-btn.page').attr('href', pageUrl);
    $('#projects' + ` .${project} ` + 'a.cta-btn.source').attr(
      'href',
      sourceUrl
    );
  };

  const renderContactSection = () => {
    const { action } = data.contact;

    $('#contact .action').attr('href', action);
  };

  const renderFooterSection = () => {
    const {
      github,
      stackOverflow,
      codepen,
      linkedin,
      twitter,
      fullName,
      creditName,
      creditUrl
    } = data.footer;

    $('.footer a.github').attr('href', github);
    $('.footer a.stack-overflow').attr('href', stackOverflow);
    $('.footer a.codepen').attr('href', codepen);
    $('.footer a.linkedin').attr('href', linkedin);
    $('.footer a.twitter').attr('href', twitter);

    $('.footer a.footer-dev').attr('href', github);
    $('.footer a.footer-dev').text(fullName);
    $('.footer a.footer-credit').attr('href', creditUrl);
    $('.footer a.footer-credit').text(creditName);
  };

  renderHeroSection();
  renderAboutSection();

  renderProjectSection('capitalMogul');
  renderProjectSection('chatApplication');
  renderProjectSection('faceRecognition');

  renderContactSection();
  renderFooterSection();
}
