//zadanie1
const tab = [1,true,"g",];
for(const element of tab){
    console.log(tab[element]);
}
//zadanie 2
let a = prompt("wprowadź wartość która będzie potęgowana");
let b = prompt("wprowadź wartość potęgi");
for(const element in a){
    console.log(a**b);
}
//zadanie 5
let c = prompt("wprowadź wartość");
const e =[];
let d =0;
for(i=1; i<=c;i++){
    e.push(i);
    d += i;
}
console.log(e.join("+")+("=")+(d));
//zadanie 6
const f = [12, 'Ala', true, false, [], 2.11, null]
for(const element in f){
    console.log(typeof(f[element]));
}
//zadanie 8
const g = [1,2,3,8,8,3];
let y =0;
for(const element in g){
    y += g[element];
}
y /= g.length
console.log(y);
//zadanie9

let s = prompt("Wprowadź słowo:");
const tabs = [];
for (i = 1; i <= s.length; i++) {
    let fragment = '';
    for (let j = 0; j < i; j++) {
        fragment += s[j];
    }
    tabs.push(fragment);
}
console.log(tabs);