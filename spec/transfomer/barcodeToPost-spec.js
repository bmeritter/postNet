/**
 * Created by ritter on 16-7-28.
 */

const fn = require("../../transfomer/barcodeToPost")

describe('barcodeToPost', function () {
    it('barcodeToPost(barcodes)', function () {
        let barcodes = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let expected = '95713';
        let result = fn.barcodeToPost(barcodes);

        expect(result).toEqual(expected)
    });

    it('test', function () {
        let barcodes = '| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |';
        let expected = '45056-1234';
        let result = fn.barcodeToPost(barcodes)

        expect(result).toEqual(expected)
    })
});

describe('isValidationBarcode', function () {
    it('isValidationBarcode(barcodes)', function () {
        let barcodes = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let expected = true;
        let result = fn.isValidationBarcode(barcodes);

        expect(result).toEqual(expected)
    })
});

describe('formateBarcode', function () {
    it('formateBarcode(barcodes, allBarcodes)', function () {
        let barcodes = '| |:|:: :|:|: |:::| :::|| ::||: :|:|: |';
        let allBarcodes = ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
        let expected = [9, 5, 7, 1, 3, 5];
        let result = fn.formateBarcode(barcodes, allBarcodes);

        expect(result).toEqual(expected)
    })
});

describe('checkValidation', function () {
    it('checkValidation(postArr)', function () {
        let postArr = [9, 5, 7, 1, 3, 5];
        let expected = true;
        let result = fn.checkValidation(postArr);

        expect(result).toEqual(expected)
    })
});

describe('formateResult', function () {
    it('formateResult(postArr)', function () {
        let postArr = [9, 5, 7, 1, 3, 5];
        let expected = '95713';
        let barcode = fn.formateResult(postArr);

        expect(barcode).toEqual(expected)
    })

});

