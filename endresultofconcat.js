let name=require('./fname_lname');
let str1=name.fname(555);
console.log(str1);
let mname=require('./fname_lname');
let str2=mname.lname("madhu");
console.log(str2);
let fullname=require('./fname_lname');
let str3=fullname.fconcat(str1,str2);
console.log(str3);

