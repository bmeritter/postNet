/**
 * Created by ritter on 16-7-28.
 */

const fn = require("../../transfomer/postToBarcode");

describe('postToBarcode', function () {
    it('postTobarcode(tags)', function () {
        let tags = '12345';
        let expected = '12345=|:::||::|:|::||::|::|:|:|::|:|:|\n5';
        let result = fn.postToBarcode(tags);

        expect(result).toEqual(expected)
    })
});

describe('isValidation', function () {
    it('isValidation(tags)', function () {
        let tags = '45056-1234';
        let expected = '45056-1234';
        let result = fn.isValidation(tags);

        expect(result).toEqual(expected)
    })
});

describe('fomateCode', function () {
    it('fomateCode(tags)', function () {
        let tags = '45056-1234';
        let expected = [4, 5, 0, 5, 6, 1, 2, 3, 4];
        let result = fn.fomateCode(tags);

        expect(result).toEqual(expected)
    })

});

describe('calculateValidaion', function () {
    it('calculateValidaion(result)', function () {
        let result = [4, 5, 0, 5, 6, 1, 2, 3, 4];
        let expected = 0;
        let reword = fn.calculateValidation(result);

        expect(reword).toEqual(expected)
    })
});

describe('getBarcodes', function () {
    it('getBarcodes(result, valite, allBarcodes)', function () {
        let allBarcodes = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let result = [4, 5, 0, 5, 6, 1, 2, 3, 4];
        let valite = 0;
        let expected = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        let reword = fn.getBarcodes(result, valite, allBarcodes);

        expect(reword).toEqual(expected)
    })
});