// /**
//  * @param {string} val
//  * @return {Object}
//  */
// var expect = function(val) {
//     return {
//         toBe:function(val2){
//              if(val === val2){
//                return  throw new Error("Equal")
//              }else{
//                 return true
//              }
//         }
//     }
//     return check
// };

// /**
//  * expect(5).toBe(5); // true
//  * expect(5).notToBe(5); // throws "Equal"
//  */
// let expected = expect(5)

//  console.log(expect.toBe(5))








 /**
 * @param {any} val
 * @return {Object}
 */

let expected = expect(5);

console.log(expected.toBe(5)); // This will throw an error "Equal"
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return true;
        }
    }
};