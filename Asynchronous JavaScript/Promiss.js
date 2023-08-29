let payment = true;
let mark = 90;

let enroll = ()=>{
  console.log("enroll requesting....")
  const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    if(payment){
      console.log("enroll successfull")
      resolve()
    }else{
      console.log("payment failed")
      reject()
    }},2000)
  })
  return promise
}

const progress = ()=>{
  console.log("prepate in progress....")
  let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(mark > 30){
        console.log('course has progress')
        resolve()
      }else{
        console.log("course has no progress")
        reject()
      }
    },3000)
  })
  return promise
}

let getcertificate = ()=>{
   console.log("prepared certificate...")
   const promise = new Promise((resolve,reject)=>{
 setTimeout(()=>{
  if(mark > 80){
    console.log("congress you got  a certificate")
    resolve()
  }else{
    console.log("you have no enough number")
    reject()
  }
 },3000)
   })
   return promise
  }

enroll()
.then(progress)
.then(getcertificate)
.then((value)=>console.log(value))
.catch((error)=>console.log(error))