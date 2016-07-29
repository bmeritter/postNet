/**
 * Created by ritter on 16-7-29.
 */

const createAction = require('./createAction');

const name = 'init';
const help = 'init interface:\n1-post to barcode\n2-barcode to post\nq-exit';

function doAction(cmd) {
    switch (cmd) {
        case '1':
            return 'inputPost';
        case '2':
            return 'inputBarcode';
        case 'q':
            process.exit(0);
            return;
        default:
            console.log("Invalidation Input");
            return 'init'
    }
}

module.exports = createAction(name, help, doAction);
