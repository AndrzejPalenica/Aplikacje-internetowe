//zadanie1
let a =parseInt(prompt("wprowadź wartość od 1 do 10."));
const tab =["koło","półkoło","trójkąt",
    "czworokąt","pięciokąt","sześciokąt",
    "siedmiokąt","ośmiokąt","dziewięciokąt",
    "dziesięciokąt"];
console.log(tab[a-1]);

//zadanie 2
let b =parseInt(prompt("wprowadź ilośc indeksów"));
const tab2 =[];
let i =0;
while(i<b){
    let c =parseInt(prompt("wprowadź wartość do tablicy"));
    tab2.push(c);
    i++;
}
const tab3 =[];
for(j=b-1;j>=0;j--){
    tab3.push(tab2[j]);
}
console.log(tab3);
//console.log(tab3.sort((a,b) => a-b));

//zadanie 3
let d =parseInt(prompt("wprowadź wartość"));
const tab4=[];
for(let i=1;i <= d;i++){
   if(d % i == 0){
    tab4.push(i);
   } 
}
console.log(tab4);
//zadanie 4
let numbers = 12344321; 

function isSymetrical(num) { 
    let numbers = num.toString(); 
    for(let i = 0;i < Math.ceil(numbers.length / 2); i++) 
        if(numbers[i] != numbers[numbers.length - 1 - i]) 
            return false; 
    return true; 
} 
let ret = isSymetrical(numbers); 
ret; 

//zadanie 5
let s = parseInt(prompt("wpisz liczbe"));
let h = parseInt(prompt("wpisz liczbe"));
const tab7 = [];
if(s < h) for(i = s; i <= h; i++) tab7.push(i);
else for(i = s; i >= h; i--) tab7.push(i);
console.log(tab7);

//zadanie6
function isNegative(num){
    if(num > 0) return false;
    else return true;       
}
//zadanie7

function isEqual(num, num2){
    if(num === num2 ) return true;
    else return false;
}
isEqual(6,5)

//zadanie 8
function stringlength (str) {
    let ilosc= 0;
    for (let slowa of str) ilosc++;
    return ilosc;
}

//zadanie 9

function returnArray(...arg){
    const tab = [];
    tab.push(...arg);
    return tab;
}

function returnArray2(...arg) {
    return arg;
}

//zadaanie 10

function obliczMaseCylindra(promien,wysokosc) {
    const pi = Math.PI;
    const objetosc = pi * Math.pow(promien, 2) * wysokosc; 
    const gestoscWody = 0.001;
    const masa = objetosc * gestoscWody;
    return masa;
}

//zadanie 11
function dividers(liczba){
    const tab =[];
    for(let i = 1; i <= liczba; i++)
        if(liczba % i ==0)tab.push(i)
    return tab;
}