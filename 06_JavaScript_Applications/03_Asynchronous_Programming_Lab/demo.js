const { log } = require("console");

let ring = new Promise(function(resolve, reject){
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('Just Married...');
        }else{
            reject('Engagement Over!!!');
        }
    },1000);
});

console.log(ring);

ring.then((result)=>{
    console.log(result);
}).catch((reason)=>{
    console.log(reason);
})

let alwaysReslovingPromise = Promise.resolve('yes');
alwaysReslovingPromise.then(res => log(res));