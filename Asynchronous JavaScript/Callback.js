

  let calculation = (a,b,callback)=>{
    callback(a,b)
  }

  calculation(50,55550,(a,b)=>{
    console.log(a+b)
  })