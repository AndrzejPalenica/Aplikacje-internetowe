// 1.	Utwórz funkcję calculator(), która przyjmie trzy argumenty: 
// dwie wartości liczbowe oraz operator jednego z podstawowych działań matematycznych (dodawanie, odejmowanie, mnożenie, dzielenie).
// Funkcja powinna zwrócić wynik działania lub informację o błędzie.

function calculator(arg1,arg2,operator){
    let wynik = 0;
    switch(operator){
        case "+":
            wynik = arg1 + arg2;
            break;
        case "-":
            wynik = arg1 - arg2;
            break;
        case "*":
            wynik = arg1 * arg2;
            break;
        case "/":
            if(arg2 == 0){
                wynik = 0;
            }
            else{
                wynik = arg1 / arg2;
                break;
            }
        default:
            wynik = "zły operator";
            break;
    }
    return wynik;
}
calculator(2,5,"+");


// 2.	Napisz funkcjęsumEvenOdd(), która przyjmie tablicę wartości liczbowych i zwróci tablicę, która będzie reprezentowała kolejno: 
// sumę wartości z kluczami parzystymi i nieparzystymi.
// Przykład: sumEvenOdd([1,3,2,5,4,2,6,5,8]) => [21,15]

function sumEvenOdd(tablica){
    let parzyste = 0;
    let nieparzyste = 0;
    for(i = 0; i < tablica.length;i++){
        if(i % 2 == 0){
            parzyste += tablica[i];
        }
        else{
            nieparzyste += tablica[i];
        }
    }
    return([parzyste,nieparzyste]);
}
sumEvenOdd([1,3,2,5,4,2,6,5,8]);

// 3.	Napisz funkcjęisLeapYear(), która zwraca prawdę, jeśli rok jest przestępny, w przeciwnym razie zwraca fałsz.
// Rok jest „rokiem przestępnym”, jeśli trwa 366 dni, zamiast 365 w typowym roku. 
// Ten dodatkowy dzień jest dodawany na koniec najkrótszego miesiąca, tworząc 29 lutego.
// Rok przestępny występuje co cztery lata i będzie miał miejsce, jeśli rok jest wielokrotnością czterech. 
// Wyjątkiem jest rok na początku stulecia (na przykład 1900 lub 2000), gdzie rok musi być podzielny przez 400, aby był rokiem przestępnym.

function isLeapYear(year){
    let Leap = false;
    
}

// 4.	Izogram to słowo, które nie ma zduplikowanych liter. Utwórz funkcjęisIsogram(), 
// która pobiera łańcuch znaków i zwraca wartość true lub false w zależności od tego, czy jest to izogram.

function isIsogram(slowo){
    let izogram = true
    for(i = 0; i < slowo.length; i ++){
        for(j = i + 1; j < slowo.length; j ++){
            if(slowo[i] == slowo[j]){
                izogram = false;
            }
        }
    }
    return izogram;
}
isIsogram("abcghj")


// 5.	Utwórz funkcjęinvertText(), która przyjmie jako argument ciąg znaków złożony z wielu słów, 
// a następnie zwróci ten ciąg ze słowami w odwróconej kolejności.

function invertText(tablica){
    tablica = tablica.split(" ");
    tablica.reverse();
    return tablica;
}
invertText("abc hgf knh");


// arr = str.splt(" ").invert();
// return arr;