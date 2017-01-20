'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function(){
    generators.Base.apply(this, arguments);
    
  },

  initializing: function(){

  },
  prompting: function(){

  },
  configuring: function(){
    
  },
  default: function(){

  },
  writing: {
    gulpfile: function(){

    },
    packageJSON: function(){

    },
    git: function(){

    },
    bower: function(){

    },
    appStaticFiles: function(){
      this.copy('public/images/_favicon.ico', 'public/images/favicon.ico');
      this.directory('public', 'public');
    },
    scripts: function(){

    },
    html: function(){
      this.fs.copyTpl(
        this.templatePath('app/views/_index.jade'),
        this.destinationPath('app/views/index.jade'),
        {
          appname: 'title from yeoman',
          othername: 'second var works!'
        }
      );
    }
  },
  conflicts: function(){

  },
  install: function(){

  },
  end: function(){

  }

});
