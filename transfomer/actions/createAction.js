/**
 * Created by ritter on 16-7-29.
 */

function createAction(name, help, doAction) {
    return {
        name: name,
        help: help,
        doAction: doAction
    };
}

module.exports = createAction;