
let promiss = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("i am fine")
    },7000)
})
let promiss2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("i am fine2")
    },4000)
})

console.log('i am limon')
Promise.race([promiss,promiss2])
.then((res)=>console.log(res))

