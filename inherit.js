const EventEmitter=require('events');
const Logger=require('./logger1');
const logger=new Logger();
console.log('calling log method from logger1 module');
console.log('calling log1 method from logger1 module');
logger.on('messageLogged',()=>
{
    console.log('Handled messaged logged event');
})
logger.on('messageLogged1',()=>{
    console.log('handled message logged event');
});

logger.log("The End.....");
logger.log1("Hello");