// let i = 0;
// while (i < 10) {
//     console.log("Aktualna wartość to: " + i);
//     i++;
// }



// while (i < 10)
//     console.log("Aktualna wartość to: " + (i++));

// console.log(i);
// // i = 10


// let j = parseInt(prompt("Wpisz liczbę całkowitą"));
// if(!isNaN(j)) {
//     console.log("Kolejne wartości z zakresu " + j + " do 10 to:");
//     do {
//         console.log(j++);
//     } while(j <= 10);
// } else {
//     console.log("Miała być liczba 🏺!");
// }





// for(let k = 0; k <= 4; k++) {
//     console.log(k);
// }
// for(let k = 0; k <= 4;) {
//     console.log(k++);
// }
// for(let k = 0;;) {
//     if(k <= 4)
//         console.log(k++);
//     else
//         break;
// }
// let k = 0;
// for(;;) {
//     if(k <= 4)
//         console.log(k++);
//     else
//         break;
// }
// for(let k = 0; k <= 4; console.log(k++)) {}

// let text = "";
// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j <= 5; j++) {
//         text+= "*";
//     }
//     text += "\n";
// }
// console.log(text);


// kwadrat
let a = parseInt(prompt("Wpisz liczbę całkowitą"));
if(!isNaN(a)) {
    let text = "";
    for(let i = 0; i < a; i++) {
        for (let j = 0; j <= a; j++) {
            text += "*";
        }
        text += "\n";
    }
    console.log(text);
}


//trójkąt
let b = parseInt(prompt("Wpisz liczbę całkowitą"));
if(!isNaN(b)) {
    let text = "";
    for(let i = 0; i <= b; i++) {
        for (let j = 0; j <= i; j++) {
            text += "*";
        }
        text += "\n";
    }
    console.log(text);
}

//trójkąt w drugą stronę(nie dokończony)
let d = parseInt(prompt("Wpisz liczbę całkowitą"));
if(!isNaN(d)) {
    let text = "";
    for(let i = 0; i <= d; i++) {
        for (let j = 0; j <= i; j++) {
            text += "*";
        }
        text += "\n";
    }
    console.log(text);
}

// Kwadrat pusty
let c = parseInt(prompt("Wpisz liczbę całkowitą"));
if(!isNaN(c)) {
    let text = "";
    for (let i = 0; i <= c; i++) {
        text += "*";
    }
    text += "\n";
    for(let j = 0; j < c - 2; j++) {
        text += "*";
        for (let i = 0; i <= c - 2; i++) {
            text += " ";
        }
        text += "*\n";
    }
    for (let i = 0; i <= c; i++) {
        text += "*";
    }
    text += "\n";
    console.log(text);
}

