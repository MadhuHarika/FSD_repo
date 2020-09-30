let os1=require('os');
let rel=os1.release();
let plat=os1.platform();
let arc=os1.arch();
let hostName=os1.hostname();
let freeMem=os1.freemem();
let nwInterface=os1.networkInterfaces();
let type1=os1.type();
let upTime=os1.uptime();
let ttlmem=os1.totalmem();

console.log(`${rel} ${plat} ${arc} ${hostName} ${freeMem} ${nwInterface}`);
console.log(`${type1} ${upTime} ${ttlmem}`);