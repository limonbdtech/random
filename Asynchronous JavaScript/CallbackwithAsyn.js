let takeOrder = (callback)=>{
    console.log("taking order")
    callback()
}

let orderProcess = (callback)=>{
    console.log("order is processing")
    let promise = new Promise((resolve,reject)=>{

 setTimeout(()=>{
        
        console.log("coocking complete")
        console.log("raday for supply")
        callback()
    },2000)

    })
   
}

let orderComplete =()=>{
    console.log("order has completed")
}

takeOrder(()=>{
    orderProcess(()=>{
         orderComplete()
    })
})
