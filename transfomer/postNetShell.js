/**
 * Created by ritter on 16-7-28.
 */
'use strict';

const fnBarcode = require('./barcodeToPost');
const fnPost = require('./postToBarcode');

const repl = require('repl');

function switchRouter(context, done) {
    let router = actions.find(item => item.name === currentAction);
    let result = router.doAction(context.cmd);
    let newRouter = actions.find(item => item.name === result);

    currentAction = newRouter.name;
    console.log(newRouter.help);
    done(null);
}

function handleCmd(cmd, context, filename, done) {
    switchRouter({
        cmd: cmd.trim()
    }, done);
    done(null);
}

var replServer = repl.start({prompt: "> ", eval: handleCmd});

const actions = [{
    name: 'init',
    help: "init interface:\n1-post to barcode\n2-barcode to post\nq-exit",
    doAction: function (cmd) {
        switch (cmd) {
            case '1':
                return 'inputPost';
            case '2':
                return 'inputBarcode';
            case 'q':
                replServer.close();
                process.exit(0);
                return;
            default:
                console.log("Invalidation Input");
                return 'init'
        }
    }
}, {
    name: 'inputPost',
    help: 'input post state:\ninput post\nq-exit',
    doAction: function (cmd) {
        if (cmd.trim() === 'q') {
            return 'init';
        }
        console.log(fnPost.postToBarcode(cmd.trim()) + '\n\tBye!\n');
        return 'inputPost';
    }
}, {
    name: 'inputBarcode',
    help: "input barcode state:\ninput barcode\nq-exit",
    doAction: function (cmd) {
        if (cmd.trim() === 'q') {
            return 'init';
        }
        console.log(fnBarcode.barcodeToPost(cmd.trim()) + "\n\tBye!")
        return 'inputBarcode';
    }
}];

let currentAction = 'init';
console.log(actions.find(item => item.name === currentAction).help);
