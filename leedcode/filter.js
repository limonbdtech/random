    
    
var filter = function(arr ) {
    let number=[];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >10 ){

        number.push(arr[i])
        }
    }
    return number
    
};


console.log(filter([0,10,20,30]))