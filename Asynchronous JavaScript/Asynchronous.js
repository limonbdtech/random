//   let payment = true;
//   let mark = 90;

//   let enroll = (callback)=>{
//     console.log('enroll is processing....')
//     setTimeout(()=>{
//         if(payment){
//             console.log("enroll is successful")
//             callback()
//         }else{
//             console.log("payment failed")
//         }
//     },2000)
//   }

//   let progress =(callback)=>{
//     console.log("progressing your situation....")
//     setTimeout(()=>{
//         if(mark >50){
//             console.log("you have progressed")
//             callback()
//         }else{
//             console.log("you have no progress")
//         }
//     },2000)
//   }

//   let getcertificate=()=>{
//        console.log("certificate in makeing")
//        setTimeout(()=>{
//         if(mark>80){
//             console.log("you got certificate")
//         }else{
//             console.log("you have not enough marks")
//         }
//        },2000)
//   }

//   enroll(()=>progress(getcertificate))
  
  
  
  let payment = true;
  let mark = 90;
  
  let enroll = ()=>{
    console.log('enroll is processing....')
    const promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(payment){
          console.log("enroll is successful");
          resolve();
        }else{
          console.log("payment failed");
          reject();
        }
      },2000);
    });
    return promise;
  };
  
  let progress = ()=>{
    console.log("progressing your situation....");
    const promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(mark >50){
          console.log("you have progressed");
          resolve();
        }else{
          console.log("you have no progress");
          reject();
        }
      },2000);
    });
    return promise;
  };
  
  let getcertificate = ()=>{
    console.log("certificate in makeing");
    const promise = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(mark>80){
          console.log("you got certificate");
          resolve();
        }else{
          console.log("you have not enough marks");
          reject();
        }
      },2000);
    });
    return promise;
  };
  
  enroll()
  .then(progress)
  .then(getcertificate)
  .catch(()=>console.log("Something went wrong!"));




