/**
 * Created by ritter on 16-7-28.
 */
"use strict"


function test(collection) {
    let result = [];
    collection.filter(function (c) {
        let exit = result.find(function (r) {
            return r === c;
        });
        if(exit) {
            result = result.filter(function (r) {
                return r !== exit;
            })
        } else {
            result.push(c)
        }
    });
    return result;
}

console.log(test([5, 2, 5]))

function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
module.exports = {sum: sum, sub: sub};
