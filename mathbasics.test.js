const {add,sub} = require('./mathbasics.js');
const  assert = require('chai').assert;
//import {assert} from 'chai';

describe('maths basic tests', () => {
    it('should add two positive numbers', function () {
      assert.equal(add(1,2), 3);
        //assert.equal(mathbasics.add(1,2), 3);
    });
    it('should add two neg numbers', function () {
      assert.equal(add(-1,-22), -23);
        //assert.equal(mathbasics.add(1,2), 3);
    });
     it('should sub two positive numbers', function () {
      assert.equal(sub(1,2), -1);
         //assert.equal(mathbasics.sub(1,2), -1);
    });
    it('should sub two neg numbers', function () {
      assert.equal(sub(-1,-2), -3);
         //assert.equal(mathbasics.sub(1,2), -1);
    });
    it('should give wrong answer', function () {
      assert.equal(add(1,2), 4);
        //assert.equal(mathbasics.add(1,2), 3);
    });
    it('new test should give correct answer', function () {
      assert.equal(mul(10,20), 200);
    });
});


