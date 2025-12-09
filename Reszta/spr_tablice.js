for(let i = 0; i < 5; i++){
    document.writeln(i + "<br>");
}

document.writeln("ZMIENNA i: " + i);


/*
var liczba = 10; //zmienna GLOBALNA

function powieksz(x){
    
    x = x + liczba;
    return x;
}

document.writeln(powieksz(3));
*/

/*
function losuj(x){
    var losowa = parseInt(Math.random()*(x+1));
    return losowa;
}

function suma_ciagu(pocz, kon){
    var suma = 0;
    for(var i = pocz; i <= kon; i++){
        suma += i;
    }
    return suma;
}

var wylosowana = losuj(100);
document.writeln("SUMA Z PRZEDZIAŁU 0 - " + wylosowana + ": ");
document.writeln(suma_ciagu(1, wylosowana));
*/

/*
var liczba = parseInt(prompt("Podaj liczba1"));

var licznik0_9 = 0;
var licznik10_19 = 0;

for(var i = 0; i <= 100000; i++){
    //document.writeln(losuj(liczba) + "<br>");
    var wylosowana = losuj(19);
    if(wylosowana <= 9) licznik0_9++;
    else licznik10_19++;
}

document.writeln("0 - 9: " + licznik0_9 + "<br>");
document.writeln("10 - 19: " + licznik10_19 + "<br>");

*/
/*
function wypisz_rosnaco(pocz, kon){
    var suma = 0;
    for(var i = pocz; i <= kon; i++){
        document.writeln(i + "<br>");
        suma += i;
    }
    return suma;
}

var liczba1 = parseInt(prompt("Podaj liczba1"));
var liczba2 = parseInt(prompt("Podaj liczba2"));

var wynik = wypisz_rosnaco(liczba1, liczba2);
document.writeln("SUMA: " + wynik);
*/

/*
function abs(a){
    if(a > 0){
        return a;
    }else{
        a = a*(-1);
        //LUB
        // a = -a;
        return a;
    }
}

var liczba = parseInt(prompt("Podaj liczba:"));

var wynik = abs(liczba);
document.writeln(wynik);
*/
/*
function znajdz_max(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}

var liczba1 = parseInt(prompt("Podaj liczba1"));
var liczba2 = parseInt(prompt("Podaj liczba2"));

var wieksza = znajdz_max(liczba1, liczba2);

document.writeln(wieksza);
*/
/*
function oblicz_23vat(kwota){
    var vat = kwota*0.23;
    return vat;
}

var wartosc = parseFloat(prompt("Podaj kwote:"));
var wynik_vat = oblicz_23vat(wartosc);
document.writeln(wynik_vat);

if(wynik_vat > 1000){
    document.writeln("<br>");
    document.writeln("Otrzymujesz zwrot podatku");
}
*/
/*
//DEFINICJA FUNKCJI
function srednia(a, b){
    var wynik = (a + b)/2;
    return wynik;
}

//WYWOŁANIE FUNKCJI
var liczba1 = parseInt(prompt("Podaj liczba1"));
var liczba2 = parseInt(prompt("Podaj liczba2"));

var srednia_wynik = srednia(liczba1, liczba2);
document.writeln(srednia_wynik);
*/

/*
//DEFINICJA FUNKCJI
function suma(a, b){
    var wynik = a + b;
    return wynik;
}

//WYWOŁANIE FUNKCJI
var liczba1 = parseInt(prompt("Podaj liczba1"));
var liczba2 = parseInt(prompt("Podaj liczba2"));

var suma_dodawania = suma(liczba1, liczba2);
document.writeln(suma_dodawania);
*/

/*
//DEFINICJA FUNKCJI
function suma(a, b){
    var wynik = a + b;
    return wynik;
}

//WYWOŁANIE FUNKCJI
document.writeln(suma(5, 3));
*/

/*
var a = parseInt(prompt("Podaj a:"));
var b = parseInt(prompt("Podaj b:"));


for(var i = a; i <= b; i++){

    if(i == 5){
        continue;
    }
    document.writeln(i + "<br>");


}
*/
/*
var liczba;

var min = Number.POSITIVE_INFINITY;

for(var i = 0; i < 5; i++){
    liczba = parseInt(prompt("Podaj liczbe: "));
    if(liczba < min){
        min = liczba;
    }
}

document.write("MIN: " + min);
*/



/*
var liczba;

var max = Number.NEGATIVE_INFINITY;

for(var i = 0; i < 5; i++){
    liczba = parseInt(prompt("Podaj liczbe: "));
    if(liczba > max){
        max = liczba;
    }
}

document.write("MAX: " + max);
*/

/*
var liczba = 0;
var suma = 0;
while(suma <= 100){
    liczba = parseInt(prompt("Podaj liczbe: "));
    suma += liczba;
}

document.write("SUMA: " + suma);
*/
/*
var haslo = "cokolwiek";
var licznik = -1;
while(isNaN(haslo)){
    haslo = prompt("Podaj liczbe:");
    licznik++;
}

document.write("ZALOGOWANO - Podałeś: " + licznik + " razy złe hasło");
*/

/*
var haslo = "";
while(haslo != "placki"){
    haslo = prompt("Podaj haslo:");
}

document.write("ZALOGOWANO");
*/
/*
var a = parseInt(prompt("Podaj a:"));
var b = parseInt(prompt("Podaj b:"));

if(a<b){
//rosnąco
    for(var i = a; i <= b; i++){
        if(i%3 == 0){
            document.write(i + "<br>");
        } 
    }
}else{
//malejąco
    for(var i = a; i >= b; i--){
        if(i%3 == 0){
            document.write(i + "<br>");
        } 
    }
}
*/




/*
var x = 5;
var y = 10;

do{
    document.write(x + "<br>");
    x++;
}while(x == 10);
*/


/*
var x = parseInt(prompt("Podaj X:", ""));
var y = parseInt(prompt("Podaj Y:", ""));

if(x > y){
    //podmiana wartości miedzy x - y
    var temp;
    temp = y;
    y = x;
    x = temp;
}

while(x<=y){
    document.write(x+"<br>");
    x++;
}

*/










/*
var x = parseInt(prompt("Podaj x", ""));

switch(x){
    case 1:
        document.write("Poniedziałek");
        break;
    case 2:
        document.write("Wtorek");
        break;
    case 3:
        document.write("Środa");
        break;
    case 4:
        document.write("Czwartek");
        break;
    case 5:
        document.write("Piątek");
        break;
    case 6:
        document.write("Sobota");
        break;
    case 7:
        document.write("Niedziela");
        break;
    default:
        document.write("BAAAAAAD DAY ;-P");
}
*/









/*
var zmienna1 = prompt("Podaj wartość", "");

if(isNaN(zmienna1)){
    //jest tekstem
    document.write(zmienna1 + " - " + zmienna1);
}else{
    //nie jest tekstem
    zmienna1 = parseInt(zmienna1);
    zmienna1 += 10;
    document.write(zmienna1);
}
*/














//alert("HELLO WORLD");
//alert("WITAJ ŚWIECIE");
//document.write("HELLO<br>WITAJ");
//var x = parseFloat(prompt("Podaj x", ""));
//var y = parseFloat(prompt("Podaj y", ""));

/*
var x = prompt("Podaj x", "");

if(isNaN(x)){
    //x jest tekstem
    document.write("Podana wartość nie jest liczbą!");
}else{
    //x jest liczbą
    x = parseInt(x);

    if(x > 0){
        document.write("X jest DODATNIE");
    }else if(x < 0){
        document.write("X jest UJEMNY");
    }else{
        document.write("X jest RÓWNE 0");
    }
}*/             






