'use strict';
var generators = require('yeoman-generator'),
    _ = require('lodash');

module.exports = generators.Base.extend({
  construtor: function(){
    generators.Base.apply(this, arguments);
    console.log('inside newpage sub-generator', this.name);
  },

  writing: function(){
    
  }
});