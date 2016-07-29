/**
 * Created by ritter on 16-7-29.
 */

const fnBarcode = require('../barcodeToPost');

const name = 'inputBarcode';
const help = 'input barcode state:\ninput baecode or input q init ';

function barcodeAction() {
    return {
        name: name,
        help: help,
        doAction: function (cmd) {
            if (cmd.trim() === 'q') {
                return 'init';
            }
            console.log(fnBarcode.barcodeToPost(cmd.trim()) + "\n\tBye!");
            return 'inputBarcode';
        }
    }
}

module.exports = barcodeAction();
