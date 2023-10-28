const mathbasics = require('./mathbasics');
//const  assert = require('chai').assert;
import {assert} from 'chai';

describe('add 1+2 to equal 3', () => {
    it('should add two numbers', function () {
      assert.equal(mathbasics.add(1,2), 3);
    });
     it('should sub two numbers', function () {
      assert.equal(mathbasics.sub(1,2), -1);
    });
});


