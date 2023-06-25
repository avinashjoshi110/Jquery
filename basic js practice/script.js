const arr = [
    [55,60],
    [20,80],
    [57,96]

]


 
arr[0,0] = [55,88];
arr[0,1] = [99,97];
arr[0,2] = [57,34];


console.log(arr)

let hh = document.createElement('div');
document.body.append(hh);
hh.innerHTML = " <h1> Avinash V JOshi <h1>"
hh.style.color = "teal"
hh.style.backgroundColor = "coral";
hh.style.height = "100px";
hh.style.width = "100%"
hh.style.padding = "50px"

let hr = document.createElement('ul');
document.body.append(hr);


const myPromise = new Promise ((resolve, reject) => {
    const error = false ;
    if(!error){
        resolve("request has been fullfilled")
    }
    else {
        reject(" request has been rejected")
    }
} )
.then(value => {
    return value + "    ENjoy !!" ;
}) .then(newvalue => {
    console.log(newvalue)
})


const myPromise = new Promise ((resolve, reject) => {
    const error = true ;
    if(!error){
        resolve("request has been fullfilled")
    }
    else {
        reject(" request has been rejected")
    }
} )
.then(value => {
    return value + "    ENjoy !!" ;
}) .then(newvalue => {
    console.log(newvalue)
}) .catch(err => {
    console.error(err);
})



const myPromise = new Promise((resolve , reject) =>
{
    const error = false ;
    if (!error){
        resolve("Avinash")
    }
    else {
        reject("Anu")
    }
}) .then(value => {
    console.log(value);
}) .catch(err =>{
    console.error(err)
}
    )


const myPromise = new Promise((resolve , reject) =>
{
    const error = true ;
    if (!error){
        resolve("Avinash is right");
    }
    else {
        reject("Avinash is wrong")
    }
})



const AviNash = new Promise((resolve , reject) =>
{
    const error = false ;
    if (!error){
        resolve("Avinash ")
    }
    else{
        reject("Anu")
    }
}) .then(value => {
    console.log(value)
}) 






const myPromise = new Promise ((resolve , reject)
 {
    con
 }
 .then(value=>
    {
        console.log(value);
    })  









console.log(hh)

function addition(...args){
    return args.reduce((a,b) => a+b);
}

let res = addition(1,2,3,4,5,6,7,8,9);

console.log(res);




