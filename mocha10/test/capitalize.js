var capitalize = require('../capitalize');

var chai = require('chai');
var expect = chai.expect;

describe('capitalize', function(){
  
  it('capitalizes single words', function() {
    expect(capitalize('express')).to.equal('Express');
    expect(capitalize('cATs')).to.equal('Cats');
  });

  it('doesn\'t break when passed an empty string', function() {
    expect(capitalize('')).to.equal('');
  });

});

