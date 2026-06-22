// // function greet(name,callback)
// // {
// //     console.log("hello "+ name);
// //     callback();
// // }
// // function goodbye()
// // {
// //     console.log("goodbye");
// // }
// // greet("daksh",goodbye); 

// //question

// function downloadFile(url,callback){
//     console.log("Starting download..");

//     setTimeout(()=>{
//         console.log("Download completed");
//         callback();
//     },2000);
// }

// downloadFile("file.pdf",()=>{
//     console.log("Opening file...");
// });

// //User Authentiaction 

function login(callback) {
   setTimeout(() => {
       console.log("User authenticated");
       callback();
   }, 1000);
}
function getProfile(callback) {
   setTimeout(() => {
       console.log("Profile fetched");
       callback();
   }, 1000);
}
login(() => {
   getProfile(() => {
       console.log("Displaying profile");
   });
})
//Food Delivery Process
function placeOrder(callback) {
setTimeout(() => {
console.log("Order placed");
callback();
}, 1000);
}
function prepareFood(callback) {
setTimeout(() => {
console.log("Food prepared");
callback();
}, 2000);
}
function deliverFood(callback) {
setTimeout(() => {
console.log("Food delivered");
callback();
}, 1000);
}
placeOrder(() => {
prepareFood(() => {
deliverFood(() => {
console.log("Enjoy your meal!");
});
});
});

//Callback Hell
function download(cb) {
    setTimeout(() => {
        console.log("Download Complete");
        cb();
    }, 1000);
}
function compress(cb) {
    setTimeout(() => {
        console.log("Compression Complete");
        cb();
    }, 1000);
}
function upload(cb) {
    setTimeout(() => {
        console.log("Upload Complete");
        cb();
    }, 1000);
}
console.log("Start Download");
download(() => {
    console.log("Compressing File");
    compress(() => {
        console.log("Uploading File");
        upload(() => {
            console.log("Process Finished");
        });
    });
});


//Download File using Promise

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

//Check Even or Odd
function checkEven(num) {
return new Promise((resolve, reject) => {
if (num % 2 === 0)
resolve("Even Number");
else
reject("Odd Number");
});
}
checkEven(8)
.then(msg => console.log(msg))
.catch(err => console.log(err));

//ATM Withdrawal

function withdraw(balance, amount) {
return new Promise((resolve, reject) => {
if (balance >= amount)
resolve("Withdrawal Successful");
else
reject("Insufficient Balance");
});
}
withdraw(5000, 2000)
.then(msg => console.log(msg))
.catch(err => console.log(err)); 

//Promise Chaining

function download() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Downloaded");
            resolve();
        }, 1000);
    });
}
function compress() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Compressed");
            resolve();
        }, 1000);
    });
}
function upload() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Uploaded");
            resolve();
        }, 1000);
    });
}
download()
    .then(() => compress())
    .then(() => upload())
    .then(() => console.log("All Tasks Completed"));

//Promise.all()

const api1 = Promise.resolve("User Data");
const api2 = Promise.resolve("Orders Data");
const api3 = Promise.resolve("Payment Data");
Promise.all([api1, api2, api3])
    .then(results => {
        console.log(results);
    });



