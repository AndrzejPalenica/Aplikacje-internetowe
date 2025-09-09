//zadanie 1 działa
const tab= [1,2,4,5,7];
for(const element of tab) {
    console.log(element);
}
//zadnaie 2 działa
let a = (prompt("wpisz liczbę która będzie podnoszona do potęgi."));
let b = parseInt(prompt("wpisz potęgą."));
for(const element in a){
    console.log(a**b)    
}
//Zadanie 3
let roman = "MCXXXVII";  
let romanNumerals = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
let arabicNumber = 0;

for (let i = 0; i < roman.length; i++) {
    let current = romanNumerals[roman[i]];
    let next = romanNumerals[roman[i + 1]];

    if (current < next) {
        arabicNumber -= current;  
    } else {
        arabicNumber += current;
    }
}

console.log(arabicNumber);
//zadanie4

//zadanie5 działa 
let j = parseInt(prompt("Wprowadź wartość."));
let v =0;
const tab9=[];
for(let i=1; i <= j;i++){
    tab9.push(i);
    
}
for(const element in tab9) {
    v += tab9[element];
}
console.log(tab9.join("+")+("=")+(v));
//zadanie 6 działa
const arr = [12, "Ala", true, "false", [], 2.11, null]
const tab2 =[];
for (const element in arr) {
 
    console.log(typeof(arr[element]));
    tab2.push(typeof(arr[element]));
}
console.log(tab2);

// zad 7 działa

const vowel = ['A', 'Ą', 'E', 'Ę', 'I', 'O', 'U', 'Ó', 'Y'];
let vowelCounts = {};

// zeruje wszystkie samogłoski
for(const element of vowel){
    vowelCounts[element] = 0;
}
let text = "Ala ma kota, sierotka ma rysia";


for(let char of text.toUpperCase()){
    if(vowel.includes(char)){
        vowelCounts[char]++;
    }
}
for (const element of vowel) {
    console.log(element + ' = ' + vowelCounts[element]);
}

//zadanie 8 działa
const tab5=[1,4,6,8,0];
let n =0;
for(const element in tab5){
    n +=tab5[element];
    
}
n /= g.length ;
console.log(n);

//Zadanie9 działa
let s = prompt("Wprowadź słowo:");
const tabs = [];
for (let i = 1; i <= s.length; i++) {
    let fragment = '';
    for (let j = 0; j < i; j++) {
        fragment += s[j];
    }
    tabs.push(fragment);
}
console.log(tabs);

//Przestrzeń robocza

//Przestrzeń robocza 2
