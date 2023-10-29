const {add,sub} = require('./mathbasics.js');
const  assert = require('chai').assert;
//import {assert} from 'chai';

describe('add 1+2 to equal 3', () => {
    it('should add two numbers', function () {
      assert.equal(add(1,2), 3);
        //assert.equal(mathbasics.add(1,2), 3);
    });
     it('should sub two numbers', function () {
      assert.equal(sub(1,2), -1);
         //assert.equal(mathbasics.sub(1,2), -1);
    });
    it('should give wrong answer', function () {
      assert.equal(add(1,2), 4);
        //assert.equal(mathbasics.add(1,2), 3);
    });
});


