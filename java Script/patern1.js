for(let i = 1; i <= 5; i++) {
    let row = "";

    for(let j = 1; j <= i; j++) {
        if(j % 2 === 1) {
            row += i + " ";
        } else {
            row += (10 - i) + " ";
        }
    }

    for(let j = 1; j <= 2 * (5 - i); j++) {
        row += "  ";
    }

    for(let j = 1; j <= i; j++) {
        if(j % 2 === 0) {
            row += i + " ";
        } else {
            row += (10 - i) + " ";
        }
    }

    console.log(row);
}

for(let i = 5 - 1; i >= 1; i--) {
    let row = "";

    for(let j = 1; j <= i; j++) {
        if(j % 2 === 1) {
            row += i + " ";
        } else {
            row += (10 - i) + " ";
        }
    }

    for(let j = 1; j <= 2 * (5 - i); j++) {
        row += "  ";
    }

    for(let j = 1; j <= i; j++) {
        if(j % 2 === 0) {
            row += i + " ";
        } else {
            row += (10 - i) + " ";
        }
    }

    console.log(row);
}