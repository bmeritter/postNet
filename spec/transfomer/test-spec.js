/**
 * Created by ritter on 16-7-28.
 */
const a = require('../../transfomer/test.js');

describe('sum', function () {
   it('return 3',function () {
       let result = a.sum(1, 2);
       expect(result).toBe(3);
   })
});

describe('sub', function () {
    it('return -1',function () {
        let result = a.sub(1, 2);
        expect(result).toBe(-1);
    })
});