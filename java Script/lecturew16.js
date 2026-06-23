

function greet(name,callback)
{
    console.log("hello "+ name);
    callback();
}
function goodbye()
{
    console.log("goodbye");
}
greet("daksh",goodbye);


console.log("Download Started");
setInterval(() => {
    console.log("Download Completed")
}, 2000);

console.log("show Data");

let count =0;
const intervalid= setInterval(() => {
    console.log("execution");
    count++;
    if(count>=5){
        clearInterval(intervalid);
    }
}, 2000);

const promise= new Promise((res,rej)=>{
let s=true;
if(s)
{
    res("fulfilled");
}
else{
    rej("Tera passsword galat he");
}
});

promise.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log("Ho gya ab ");

})

async function greet(){
    return ("hello");
};
console.log(greet());


function fetchdata()
{
    setTimeout(() => {
        console.log("data is fectched");
    }, 3000);

}

async function getdata(){
    const data=await fetchdata();
    console.log(data);
}

getdata();




 //Task 1 
function startDownload(callback) {
    console.log("Download Started...");

    setTimeout(() => {
        callback();
    }, 3000);
}

function downloading(callback) {
    console.log("Downloading...");

    setTimeout(() => {
        callback();
    }, 2000);
}

function downloadComplete() {
    console.log("Download Completed!");
}

startDownload(() => {
    downloading(() => {
        downloadComplete();
    });
});

// 

// task 2
function download(url, callback) {
console.log("Starting download...");
setTimeout(() => {
console.log("Download completed");
callback();
}, 2000);
}
const url="abc";
download(url,callback);

//task 3

async function login(callback) {
 setTimeout(() => {
 console.log("User authenticated");
 callback();
 }, 1000);
}
async function Profile(callback) {
 setTimeout(() => {
 console.log("Profile fetched");
 callback();
 }, 1000);
}

login(()=>{
Profile(()=>{
console.log("DISPLAY PROFILE");
});
});

//task 4
async function order(callback)
{
    setTimeout(() => {
    console.log("Order Placed ");
    }, 2000);
    callback();
}
async function foodprepare(callback)
{
 setTimeout(() => {
    console.log("Food Prepared");
    callback();
 }, 35000);
}


order(()=>{
   foodprepare(()=>{
    console.log("Food delivered");
   });
});



//task 5

async function start(callback)
{
    setTimeout(() => {
        console.log("Start Download");
     callback();
    }, 2000);
}

async function dndcomplete(callback) {
    setTimeout(() => {
        console.log("Download Complete");
callback();

    }, 2000);
}

async function compressfile(callback)
{
    setTimeout(() => {
        console.log("Compress File");
    callback();

    }, 2000);
}

async function compresscomplete(callback)
{
    setTimeout(() => {
        console.log("Compress Complete");
    callback();

    }, 2000);
}
async function uploadingfile(callback)
{
    setTimeout(() => {
        console.log("Uploading file");
    callback();

    }, 2000);
}


start(()=>{
    dndcomplete(()=>{
        compressfile(()=>{
            compresscomplete(()=>{
                uploadingfile(()=>{
    
                        console.log("Update complete");
                
                });
            });
        });
    });
});

//taask 6
function downloadFile() {
return new Promise((resolve) => {
console.log("Starting download...");
setTimeout(() => {
resolve("Download completed");
}, 2000);
});
}
downloadFile()
.then(result => {
console.log(result);
});