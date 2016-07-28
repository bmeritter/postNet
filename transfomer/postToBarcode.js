/**
 * Created by ritter on 16-7-28.
 */

function postToBarcode(tags) {
    let allBarcodes = loadAllBarcodes();
    let validation = isValidation(tags);
    if (validation) {
        let result = fomateCode(tags);
        let valite = calculateValidaion(result);
        let barcodes = getBarcodes(result, valite, allBarcodes);
        return tags + '=' + barcodes + '\n' + valite;
    }
    return 'error';
}

function loadAllBarcodes() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isValidation(tags) {
    if (tags.length === 5 || tags.length === 9 || tags.length === 10) {
        for (let tag of tags.replace('-', '')) {
            if (tag !== '0' && tag !== '1' && tag !== '2' && tag !== '3' && tag !== '4' && tag !== '5' && tag !== '6' && tag !== '7' && tag !== '8' && tag !== '9') {
                return false;
            }
        }
        return tags;
    }
    return false;
}

function fomateCode(tags) {
    let result = [];
    tags = tags.replace('-', '');
    for (let tag of tags) {
        result.push(Number(tag))
    }
    return result;
}

function calculateValidaion(result) {
    let total = result.reduce(function (a, b) {
        return a + b;
    });
    let validate = total % 10;
    if (validate === 0) {
        return validate;
    }
    return 10 - validate;
}

function getBarcodes(result, valite, allBarcodes) {
    let barcodes = '|';
    for (let r of result) {
        barcodes += allBarcodes[r];
    }
    barcodes += allBarcodes[valite] + '|';
    return barcodes;
}

module.exports = {
    postToBarcode: postToBarcode,
    isValidation: isValidation,
    fomateCode: fomateCode,
    calculateValidation: calculateValidaion,
    getBarcodes: getBarcodes
};