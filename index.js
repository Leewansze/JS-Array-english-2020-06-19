// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
a instanceof Array; // false
b instanceof Array; // true

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i = 0; i < a.length; i++){
  a[i] = a[i]*2;
}
console.log(a); // [2,4,6,8,10]

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join(" ")); // 'Red Green White Black'
console.log(colors.join("+")); // 'Red+Green+White+Black'
console.log(colors。toString()); // 'Red,Green,White,Black'

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function sortNumber(a, b)
{
  return b - a
}
console.log(a.sort(sortNumber))

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var arrObj = {};
var maxNum = 0;
var maxEle = null;
for(var i=0;i<a.length;i++){
    var arr = a[i];
    (arrObj[arr] === undefined)? arrObj[arr] = 1 : (arrObj[arr]++);
    if(arrObj[arr]>maxNum){
        maxNum = arrObj[arr];
        maxEle = arr;
    }
}
console.log(maxEle);
