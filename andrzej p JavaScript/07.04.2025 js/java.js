// Zanim rozpoczniesz pisanie, przeczytaj dokładnie instrukcję.
// 1. Napisz funkcję arrayAverage(), która oblicza średnią z podanej dowolnej ilości liczb. Wynik zwróć z precyzją do części setnych.
// Przykład:
// arrayAverage(1, 5, 22, 11, 65, 3)
// Wartość zwracana: 17.83

function arrayAverage(...arg){
    let wynik = 0;
    for(i =0;i<arg.length;i++){
        wynik += arg[i];
    }
    wynik = wynik / arg.length;
    wynik = Math.round(wynik * 100) / 100;
    return wynik;
}
arrayAverage(1, 5, 22, 11, 65, 3);

// 2. Napisz funkcję reverseDigitsArray(), która przyjmie dowolnej długości liczbę i zwróci tablicę złożoną z cyfr w odwrotnej kolejności.
// Przykład:
// reverseDigitsArray(35231)
// Wartość zwracana: [1,3,2,5,3]

function reverseDigitsArray(liczba){
    const tab = [];
    liczba = liczba.toString();
    liczba = liczba.split('');
    liczba.reverse(); 
    liczba = liczba.map(Number)
    return liczba;
}
reverseDigitsArray(35231);

// 3. Napisz funkcję wordLength(), która przyjmie ciąg znaków, podzieli ciąg na słowa, 
// a następnie do każdego słowa dopisze długość danego ciągu znaków i zwróci tablicę złożoną ze wszystkich elementów.
// Przykład:
// wordLength("jesteś zwycięzcą")
// Wartość zwracana: ["jesteś 6", "zwycięzcą 9"]
// wordLength("Ala ma kota")
// Wartość zwracana: ["Ala 3", "ma 2", "kota 4"]

function wordLength(word){
    const tab = [];
    word = word.split(" ");
    for(i = 0; i < word.length; i++){
    tab.push(word[i] + " " + word[i].length);
    }
    return tab;
}
wordLength("jesteś zwycięzcą");

// 4. Napisz funkcję differencesSum(), która jako argument przyjmie tablicę złożoną z liczb, 
// posortuje ją w kolejności malejącej i zwróci sumę różnic kolejnych elementów tablicy.
// Przykład:
// differencesSum([2, 1, 10])
// W kolejności malejącej: [10, 2, 1]
// Obliczenia: (10 - 2) + (2 - 1) = 8 + 1 = 9
// Wartość zwracana: 9
function differencesSum(tablica){
    tablica.sort((a,b) => (b - a));
    let wynik = 0;
    for(i= 0; i < tablica.length-1;i++){
        wynik += tablica[i]-tablica[i+1];
    }
    return wynik;
}
differencesSum([2, 1, 10]);

// 5. Napisz funkcję binaryInvert(), która przyjmie dowolną liczbę argumentów typu Number (sprawdź, czy podane wartości są liczbami, 
// ewentualnie usuń te, które nimi nie są), a następnie zwróć w postaci tablicy wartości binarnie odwrotnych.
// Przykład:
// binaryInvert(1, 2, 3, 4, 5)
// Wartość zwracana: [-2, -3, -4, -5, -6]

function binaryInvert(...binary){
    const tab = [];
    for(i = 0; i < binary.length; i++){
        if(typeof binary[i] === "number"){
        tab.push(~binary[i]);
        }
    }
    return tab;
}
binaryInvert(1, 2, 3, 4, 5);