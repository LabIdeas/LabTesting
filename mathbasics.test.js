const {add,sub} = require('./mathbasics');
const  assert = require('chai').assert;

describe('add 1+2 to equal 3', () => {
    it('should add two numbers', function () {
      assert.equal(add(1,2), 3);
    });
     it('should sub two numbers', function () {
      assert.equal(sub(1,2), -1);
    });
});


