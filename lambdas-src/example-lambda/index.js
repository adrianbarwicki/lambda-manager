// every package needs to be in node_modules
const smallest = require('smallest');

 // this lambda does not do anything
exports.handler = (event, context, callback) => {
    console.log(smallest([ 1, 2 ]));

    callback(null, 'Hello from Lambda');
};