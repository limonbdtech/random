var createCounter = function(init) {
    let num = init

     let counter = {
        increment:function() {
       return num+=1
        },
        reset:function() {
       return init
        },
        decrement:function() {
    
       return num = num-1
        },
    };
    return counter;
};

// first case
// input 5
// ["increment","reset","decrement"]
// Output
// [6,5,5]
// Expected
// [6,5,4]
// const counter = createCounter(5)
// console.log(counter.increment())
// console.log(counter.reset())
// console.log(counter.decrement())


// secent case
 const counter = createCounter(0)
 console.log(counter.increment())
 console.log(counter.increment())
 console.log(counter.decrement())
 console.log(counter.reset())
 console.log(counter.reset())



/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


// ["increment","increment","decrement","reset","reset"]
// Output
// [1,1,-1,0,0]
// Expected
// [1,2,1,0,0]