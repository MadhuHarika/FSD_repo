let EventEmitter=require('events');
const emitter=new EventEmitter();
console.log("trying to initialize the event");
function logger(message)
{
    console.log('logger message is:',message);
    emitter.emit('message logged');
}
module.exports.logname=logger;