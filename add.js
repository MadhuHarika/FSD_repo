console.log("Hello world");
//console.log(window);
//document.write('hello!!!');

 let logger=require('./logger');
 logger.log('welcome Kanishk');

 let xy=require('./testlog');
 xy.myfuncname("Mr.Kanishk");

const  addition=require('./addition');
addition.addMethod(200,200);
console.log(addition);


const subtract=require('./subtraction');
subtract.sub(400,200);
console.log(subtract);


const multi=require('./multiplication');
multi.mulmethod(2,5);
console.log(multi);

const division=require('./division');
division.divisionmethod(22,11);
console.log(division);