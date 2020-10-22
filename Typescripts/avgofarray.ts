let myarray:number[]=[10,20,3.5,44,0.2];

let total:number=0;
// for(let i=0;i<myarray.length;i++)
// {
//     console.log(myarray[i]);
//     total=total+myarray[i];
// }


//enhanced for loop

for(let i of myarray){
    console.log(i);
    total=total+i;
}

let average:number=total/myarray.length;
console.log("Average of myarray is:"+average);