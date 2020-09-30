const EventEmitter=require('events');
const emitter=new EventEmitter();
//event handler
emitter.addListener('logged', function ()
{
    console.log("message is received");
});
//creating and initializing the event
emitter.emit('logged');