const text = "The fox is quick. The fox is smart.";

const words = text.toLowerCase().split(" ");

let count = 0;

for (let word of words) {
    if (word.replace(".", "") === "fox") {
        count++;
    }
}

console.log(count);