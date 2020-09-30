const path=require('path');
let x=path.parse(__filename);
let y=path.parse(__dirname);
console.log(x);
console.log(y);
// // let y=path.dirname('/foo/bar/baz/asdf/quux');
// console.log(y);
