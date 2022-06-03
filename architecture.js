console.log('starting');
setTimeout(()=>{
console.log('2 sec delay');
},2000);
setTimeout(()=>{
    console.log('0 sec delay');
},0);
console.log('finishing');

// here is otput
// starting
// finishing
// 0 sec delay
// 2 sec delay