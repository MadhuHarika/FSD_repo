// let fs=require('fs');
// let file_DetailsSync=fs.readdirSync('./');
// console.log(file_DetailsSync);
//
// let file_detailsAsync=fs.readdir('./', function ()
// {
//     console.log('with in the call back');
// });
// console.log(file_detailsAsync);
//
//
//

// sync module using call back function.

// let fs=require('fs');
// let file_detailsSync=fs.readdir('../',function (err,data) {
//     if(err)
//     {
//         console.log('error data');
//     }
//     console.log(data);
// });

// using lambda function

let fil=require('fs');
fil.readdir('.../',(err,data)=>{
    if(err) {
        console.log(`Input is not proper`);
    }
    console.log(data);
})