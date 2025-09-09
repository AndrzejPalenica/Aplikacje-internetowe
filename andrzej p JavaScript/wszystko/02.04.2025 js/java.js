//zadanie 6
// Czasami chcę szybko przeliczyć mile na galon imperialny (mpg) na kilometry na litr (kml). 
// Utwórz funkcję, która zwróci liczbę kilometrów na litr (wyjście) na podstawie liczby mil na galon imperialny (wejście). 
// Twoja odpowiedź powinna być dokładna w granicach 0,01 kpl.

function mpgtokml(mpg){
    let kml = mpg * 0.42517006802721;
    let wynik = Math.round(kml * 100) / 100;
    return wynik;
}
mpgtokml(1);




