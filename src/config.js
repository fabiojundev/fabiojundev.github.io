module.exports = {
  siteTitle: 'Fabio Jun | FullStack Developer | WordPress Specialist',
  siteDescription:
    'Fabio Jun is a Software Developer at WPPluginsDev, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Fabio Jun, software developer, software engineer, fullStack developer, web developer, tech support, WordPress specialist',
  siteUrl: 'https://fabiojun.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'tst',
  googleVerification: 'tsts',
  name: 'Fabio Jun',
  location: 'São Paulo, Brazil',
  email: 'fabiojundev@gmail.com',
  github: 'https://github.com/fabiojundev',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/fabiojundev',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/fabiojun/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
