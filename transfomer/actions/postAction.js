/**
 * Created by ritter on 16-7-29.
 */

const fnPost = require('../postToBarcode');

const name = 'inputPost';
const help = 'input post state:\ninput post or input q to init';

function postAction() {
    return {
        name: name,
        help: help,
        doAction: function (cmd) {
            if (cmd.trim() === 'q') {
                return 'init';
            }
            console.log(fnPost.postToBarcode(cmd.trim()) + '\n\tBye!\n');
            return 'inputPost';
        }
    }
}

module.exports = postAction();
