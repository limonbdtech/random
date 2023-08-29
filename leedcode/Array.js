// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output:
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 

// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
// */
var map = function(arr, fn) {
     fn(arr)
};
let arr= [2,3,4]                 

map(arr,function(array){
   let arrpush = [];
    for(let i = 0; i< array.length;i++){
        console.log(array[i]+1) 
        arrpush.push(array[i]+1)
    }
})





