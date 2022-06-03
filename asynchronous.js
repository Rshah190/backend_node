// let a = 10;
// let b = 0;

// setTimeout(()=>{
//     b=50;
// },2000);
// console.log(a+b);


// how to handle Asynchronous data
let a = 10;
let b = 0;
let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(50)
    },2000);

});
waitingData.then((data)=>{
    b=data;
    console.log(a+b);  // with Asynchromous
})
console.log(a+b); // without Ayschronous