module.exports = function LandingData(opts) {
  if(!opts) opts = {};
  
  this.title = opts.title || 'Landing Page';
  this.text = opts.text || 'text from landing.data.js';

  this.nav = opts.nav || {
    Home: '',
    About: 'about',
    Reviews: 'reviews',
    Portfolio:'our-work',
    Contact: 'contact'
  };

  this.subnav = opts.subnav || {
    'Landing Page': 'landing-page',
    'Call-to-Action': 'call-to-action',
    'Special Features': 'features',
    'Pricing': 'pricing'
  };

  this.cta = opts.cta || {
    bg: 'cta01.jpg',
    header: 'Customized Landing Pages',
    subheader: 'Built for Mobile Traffic',
    links: {
      'More Features': '/features',
      'FAQs': '/faq',
      'Special Offers': '/new-customers'
    }
  };

};

