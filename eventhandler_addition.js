const EventEmitter=require('events');
const emitter=new EventEmitter();
//event handler
emitter.on('addition of two numbers',(fnum,snum)=>
{
    let result=fnum+snum;
    console.log(result);
});

emitter.emit('addition of two numbers',200,200);