const EventEmitter=require('events');
const emitter=new EventEmitter();
//event handler
emitter.on('addition of two numbers',(fnum,snum)=>
{
    let result=fnum+snum;
    console.log(result);
});
emitter.on('message to',(arg1,arg2)=>
{
    console.log(arg1);
    console.log(arg2);
})

emitter.emit('addition of two numbers',200,200);
emitter.emit('message to',{id:1,name:'Madhu Harika'},{id:2, name:'Kanishk'});
emitter.emit('message to',{name:'welcome'},{name: 'to Kanishk'});
