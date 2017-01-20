function SharedData (opts) {
  if(!opts) opts = {};
  // this.company = opts.company || 'FollowClosely Customer';
  
  // this.social = {
  //   'https://facebook.com/FollowClosely': 'facebook-square',
  //   'https://twitter.com/_Closely': 'twitter-square',
  //   'https://plus.google.com/FollowClosely': 'google-plus-square',
  //   'https://houzz.com/FollowClosely': 'houzz'
  // };
  
  this.text = opts.text || 'where does this text go?';
}

module.exports = SharedData;