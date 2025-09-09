// 1. Napisz funkcjęarrayInverter(), która jako argument pobierze tablicę liczb i zwróci tablicę z ich odwróconymi wartościami.
// Przykład: arrayInverter([-1,2,-3,4,-5]) => [1,-2,3,-4,5]

function arrayInverter(tablica){
    const arr =[];
    for(i = 0; i < tablica.length; i++){
        if(tablica[i] == 0){
            arr.push(i);
        }
        else{
            arr.push(tablica[i] * -1);
        }
    }
    return arr;
}
arrayInverter([-1,2,-3,4,-5]);

// 2. 	Napisz funkcjępaperScisorsStone() dla gry Papier, Kamień, Nożyce. Funkcja ma przyjąć dwa argumenty, które będą reprezentowały wybór graczy. Dla ułatwienia zastosuj tylko pierwszą literę wyboru:
// Dla papieru niech będzie to P, dla kamienia – K, a dla nożyc – N.
// W wyniku funkcja ma zwrócić informację, który gracz wygrał.

function paperScisorsStone(gracz1,gracz2){
    let wynik;
    if(gracz1 == gracz2){
        wynik ="Remis";
    }
    else if(gracz1 == "P" && gracz2 == "K" || gracz1 == "K" && gracz2 == "N" || gracz1 == "N" && gracz2 == "K"){
        wynik = "wygral gracz 1";
    }
    else{
        wynik = "wygral gracz 2";
    }
    return wynik;
}
paperScisorsStone("K","N");

// 3.   Zmodyfikuj kod z poprzedniego zadania tworząc funkcję sumEvenAndOdd(), która tym razem zwróci tablicę reprezentującą kolejno: sumę wartości parzystych i nieparzystych.
// Przykład: sumEvenAndOdd([1,3,2,5,4,2,6,5,8]) => [22,14]

function sumEvenAndOdd(tablica){
    parzyste = 0;
    nieparzyste = 0;
    for(i = 0; i < tablica.length; i++){
        if(tablica[i] % 2  == 0){
            parzyste += tablica[i];
        }
        else{
            nieparzyste += tablica[i];
        }
    }
    return([parzyste,nieparzyste]);
}
sumEvenAndOdd([1,3,2,5,4,2,6,5,8]);

// 4.   Utwórz funkcję squareSum(), która pobiera liczbę n i zwraca sumę wszystkich liczb kwadratowych (n^2) do n włącznie.

function squareSum(n){
    let suma = 0;
    for(i = 0; i <= n;i++){
        suma += i**2;
    }
    return suma;
}
squareSum(3);

// 5. 	Utwórz funkcję multiples(), która przyjmuje dwie liczby jako argumenty liczba, długość i zwraca tablicę wielokrotności zmiennej liczba, aż długość tablicy osiągnie długość.

function multiples(liczba,dlugosc){
    const tab = [];
    for(i = 0; i < dlugosc; i++){
        tab.push(liczba*i);
    }
    return tab;
}
multiples(2,10);