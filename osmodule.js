const os = require('os');
// console.log(os.arch()); // for architecture
console.log(os.freemem()); // it will number in bytes
//so we have to convert for understanding
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024)); // total memory in mega bytes
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());