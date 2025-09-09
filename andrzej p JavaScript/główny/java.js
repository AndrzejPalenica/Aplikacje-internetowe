console.log(arr.sort((a,b) => a.length - b.length )); //sortowanie od najmniejszej

console.log(arr.sort((b,a) => a.length - b.length )); //sortowanie od największej
for(const element of arr) { 

    console.log(element); 

}  // wyświetla zawartość zbioru

for(const element in arr) { 

    console.log(element); 

} //wyświetla indeksy

for(const element in arr) { 

    arr[element] *=2; 
} 
console.log(arr); // mnoży elementy *2

for(const element in arr) { 
   arr[element] *=2; 
} 
console.log(arr.sort()); //sortowanie po pierwszej liczbie

for(const element in arr) { 
    arr[element] *=2; 
} 
console.log(arr.sort((a, b) => a-b)); // sortowanie od najmniejszej

const asc = arr.sort((a, b) => a.length - b.length); 
arr[asc.length - 1] //wypisuje ostatnie w tabeli (najdłuższe po sortowaniu)
console.log(asc[asc.length - 1]); //to też to samo

const drugatabela = []; 
for (const element in arr) { 
    if (arr[element] % 2 == 0) { 
        drugatabela.push(arr[element]); 
    } 
} // dodaje do drugiej tabeli element podzielny przez 2

evenArray=[2,false, true, 'jyndrek',2.5];
arr=[3,false,true,4.5,'jozek'];
concatArray = evenArray.concat(arr); 
console.log(concatArray); //łączenie tabeli
 
for (const element in concatArray) { 
    if(typeof(concatArray[element]) != 'number' && typeof(concatArray[element]) != 'boolean') { 
         console.log(concatArray[element] + ' = ' + concatArray[element].length); 
          concatArray[element] = concatArray[element].length; 
        } 
}  // wypisać tekst i ile ma on znaków 

const a1 = [1, 3, 'a', 'b',true, 3.14, 4.1] 
const a2 = []; 
for(const element in a1) {
    if (typeof(a1[element]) != 'string' && typeof(a1[element]) != 'boolean') {
        a2.push(a1[element]);
    }
}
console.log(a2);


const b1 = ["1", "3", "a", "b", true, "3.14", "4.1"];
const b2 = [];
for (const element of b1) { 
    if (!isNaN(parseFloat(element))) { // Sprawdzenie, czy element jest liczbą
        b2.push(parseFloat(element)); // Konwersja na liczbę i dodanie do b2
    }
}
console.log(b2); //dodaje liczby całkowite i zmienno przecinkowe

let a = parseInt(prompt("Wprowadź wartość liczbową")); 
let b = parseInt(prompt("Wprowadź wartość liczbową")); 
let c = parseInt(prompt("Wprowadź wartość liczbową")); 
if((a != NaN  && b != NaN) && c != NaN) { 
    console.log("Obwód trójkąta wynosi: " + (a + b + c)); 
} 
else { 
    console.log("Nie można obliczyć obwodu."); 
} //oblicza obwód trójkąta

let option = parseInt(prompt("Wybierz wartość\n1, 2, 3 lub 4")); 
switch(option) { 
    case 1: 
        console.log("Wybrana wartość 1"); 
        break; 
    case 2: 
        console.log("Wybrana wartość 2"); 
        break; 
    case 3: 
        console.log("Wybrana wartość 3"); 
    case 4: 
        console.log("Wybrana wartość 4"); 
        break; 
    default: 
        console.log("Błędna wartość " + option); 
}

while (i < 10) 
    console.log("Aktualna wartość to: " + (i++)); 

let j = parseInt(prompt("Wpisz liczbę całkowitą")); 
if(!isNaN(j)) { 
    console.log("Kolejne wartości z zakresu " + j + " do 10 to:"); 
    do { 
        console.log(j++); 
    } while(j <= 10); 
} else { 
    console.log("Miała być liczba 🏺!"); 
} 

let d = parseInt(prompt("Wpisz liczbę całkowitą")); 
if(!isNaN(d)) { 
let text = ""; 
for(let i = 0; i < d; i++) { 
for (let j = 0; j <= d; j++) { 
text += "*"; 
} 
text += "\n"; 
} 
console.log(text); 
} 

let g = parseInt(prompt("Wpisz liczbę całkowitą"));
if (!isNaN(g)) {
    let text = ""; 
    // Zewnętrzna pętla przechodzi przez wiersze
    for (let i = 0; i < g; i++) { 
        // Wewnętrzna pętla dodaje odpowiednią liczbę gwiazdek
        for (let j = 0; j < g - i; j++) { 
            text += "*"; 
        }
        // Nowa linia po każdym wierszu
        text += "\n"; 
    } 
    console.log(text); 
} else {
    console.log("Wprowadzono niepoprawną wartość.");
}