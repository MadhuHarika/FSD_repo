var myarray = [10, 20, 3.5, 44, 0.2];
var total = 0;
// for(let i=0;i<myarray.length;i++)
// {
//     console.log(myarray[i]);
//     total=total+myarray[i];
// }
//enhanced for loop
for (var _i = 0, myarray_1 = myarray; _i < myarray_1.length; _i++) {
    var i = myarray_1[_i];
    console.log(i);
    total = total + i;
}
var average = total / myarray.length;
console.log("Average of myarray is:" + average);
