/**
 * Created by ritter on 16-7-28.
 */

function barcodeToPost(barcodes) {

    let allBarcodes = loadAllBarcodes();
    let validation = isValidationBarcode(barcodes)
    if (validation) {
        let postArr = formateBarcode(barcodes, allBarcodes);
        if (checkValidation(postArr)) {
            return formateResult(postArr)
        }
    }
    return 'error';
}

function loadAllBarcodes() {
    return ['||:::', ':::||', '::|:|', '::||:', ':|::|', ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'];
}

function isValidationBarcode(barcodes) {
    if (barcodes.startsWith('| ') && barcodes.endsWith(' |')) {
        return true;
    }
    return false;
}

function formateBarcode(barcodes, allBarcodes) {
    let barArray = barcodes.substring(1, barcodes.length - 1).split(' ');
    let postArr = [];
    for (let b of barArray) {
        let exit = allBarcodes.find(function (a) {
            return a === b;
        })
        if (exit) {
            postArr.push(allBarcodes.indexOf(exit))
        }
    }
    //console.log(postArr)
    return postArr;
}

function checkValidation(postArr) {
    let total = 0;
    for (let i = 0; i < postArr.length - 1; ++i) {
        total += postArr[i];
    }
    if (total % 10 === 0) {
        return postArr[postArr.length - 1] === 0;
    }
    return (10 - total % 10 ) === postArr[postArr.length - 1]
}

function formateResult(postArr) {
    let barcode = '';

    barcode += postArr.join('').substring(0, postArr.length - 1);
    if (postArr.length === 6) {
        return barcode;
    } else {
        let temp = barcode.substring(0, 5);
        let tp = barcode.substring(5, barcode.length);
        return temp + '-' + tp;
    }
}

module.exports = {
    barcodeToPost: barcodeToPost,
    isValidationBarcode: isValidationBarcode,
    formateBarcode: formateBarcode,
    checkValidation: checkValidation,
    formateResult: formateResult
};