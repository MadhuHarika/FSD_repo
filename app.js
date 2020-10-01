const EventEmitter=require('events');
const emitter=new EventEmitter();
const logger=require('./event_handler1');
console.log('hello world');
emitter.on('messageLogged',()=>{
    logger.logger('hi');
});
console.log('event executed successfully');