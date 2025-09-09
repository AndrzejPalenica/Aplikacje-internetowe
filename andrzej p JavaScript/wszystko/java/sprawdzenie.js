//zad1
const arr =[1,5,7,"jozek"];
for(const element of arr){
    console.log(element);
}
//zad2 rozwiązanie 1
let a = (prompt("wpisz liczbe która będzie potęgowana"));
let b = parseInt(prompt("wpisz potęgę"));
for (const element in a){
    console.log(a**b);
}

//zad 2 rozwiązanie 2
let c = parseInt(prompt("wpisz liczbe która będzie potęgowana"));
let d = parseInt(prompt("wpisz potęgę"));
let wynik = 1;
for(let i = 0; i < d; i++){
    wynik *= c;
}

//zad4 źle zrobione
let roman =["I","V","X","C","M"];
let r ={
    "I" : 1,
    "V" : 5,
    "X" : 10,
    "C" : 100,
    "M" : 1000,
}
let roma = prompt("Wprowadź liczbę rzymską");
let arab =[];
for(let i = 0; i < roma.length; i++){
    for(const element of roman){
        if(element == roma[i]){
            arab.push(r[roman[i]])
        }
    }
}
arab;
//zad 5
let e = parseInt(prompt("wpisz wartość"));
let dodawanie = 0;
const tab =[];
for(let i = 1; i<=e;i++){
 dodawanie += i;
 tab.push(i);
}
console.log(tab.join("+") + ("=") + dodawanie );
//zad 6
const tab2 = [12, "ala", true, false , [], 2.11, null];
const typy = [];
for(const element in tab2){
    typy.push(typeof(tab2[element]));
}
console.log(typy);

//zadanie 7 rozwiązanie 1
let licznikA =0;
let licznikĄ =0;
let licznikE =0;
let licznikĘ =0;
let licznikI =0;
let licznikO =0;
let licznikU =0;
let licznikÓ =0;
let licznikY =0;
let wyraz = 'Ala ma kota, sierotka ma rysia';
wyraz = wyraz.toUpperCase();
for(let i = 0; i < wyraz.length; i++){
    if("A"==wyraz[i]){
        licznikA +=1
    }
    if("Ą"==wyraz[i]){
        licznikĄ +=1
    }
    if("E"==wyraz[i]){
        licznikE +=1
    }
    if("Ę"==wyraz[i]){
        licznikĘ +=1
    }
    if("I"==wyraz[i]){
        licznikI +=1
    }
    if("O"==wyraz[i]){
        licznikO +=1
    }
    if("U"==wyraz[i]){
        licznikU +=1
    }
    if("Ó"==wyraz[i]){
        licznikÓ +=1
    }
    if("Y"==wyraz[i]){
        licznikY +=1
    }

}
console.log(("A = ") + licznikA);
console.log(("Ą = ")+licznikĄ);
console.log(("E = ")+licznikE);
console.log(("Ę = ")+licznikĘ);
console.log(("I = ")+licznikI);
console.log(("O = ")+licznikO);
console.log(("U = ")+licznikU);
console.log(("Ó = ")+ licznikÓ);
console.log(("Y = ") +licznikY);

//zadnai 7 rozwiązanie 2
const slownik = ['A', 'Ą', 'E', 'Ę', 'I', 'O', 'U', 'Ó', 'Y'];
let wyrazy = 'Ala ma kota, sierotka ma rysia';
wyrazy = wyrazy.toUpperCase(); 
let licznik = {
    'A': 0,
    'Ą': 0,
    'E': 0,
    'Ę': 0,
    'I': 0,
    'O': 0,
    'U': 0,
    'Ó': 0,
    'Y': 0
};
for (let i = 0; i < wyrazy.length; i++) {
    if (slownik.includes(wyrazy[i])) {
        licznik[wyrazy[i]]++; 
    }
}
for (const samogloska of slownik) {
    console.log(samogloska +("=") + licznik[samogloska]);
}
//zad7 rozwiązanie 3
for (let i = 0; i < wyrazy.length; i++){
    for(const element of slownik){
        if(element == wyrazy[i]){
            licznik[wyrazy[i]]++
        }
    }
}
for (const samogloska of slownik) {
    console.log(samogloska +("=") + licznik[samogloska]);
}

// zad 8
const tab3 = [1,4,5,6,7,8]
let dodane = 0
for(const element in tab3){
    dodane += tab3[element];
}
console.log(dodane/tab3.length);

//zadanie9
let slowo = prompt("Wprowadź słowo:");
const tabs = [];
let fragment = '';

for (let i = 0; i < slowo.length; i++) {
    fragment += slowo[i]; 
    tabs.push(fragment); 
}
console.log(tabs);
