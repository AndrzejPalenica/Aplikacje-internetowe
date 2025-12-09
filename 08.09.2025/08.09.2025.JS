//FUMKCJE
// Math.random() przedział 0 - 0,99999999999
// parseInt(Math.random()*10)  0 - 9 parseInt zaokrągla


// function losuj(x){
//     var losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }
// losuj(10);

// var global = 10; zmienna globalna
// function a(){
//      var zmienna_local = 100; zmienna lokalna bo jest wewnątrz funkcji
// }

// VAR vs LET
// {BLOK}

//for(let i =0;i<5;i++){
//  document.writeln(i + '<br>');  
//}
// document.writeln('ZMIENNA i:' +i);
//na początku jest i++ tylko let nie wypisze ZMIENNA i: 5

//for(var i =0;i<5;i++){
//  document.writeln(i + '<br>');
//}
//document.writeln('ZMIENNA i:' +i);
// wypisze zmienna i:5




// let x = parseInt(prompt('Podaj liczbe'));
// function wypisz(x){
//     let suma = 0;
//     for(i=0;i<=x;i++){
//         document.writeln(i+ '<br>');
//        suma += i;
//     }
//     return document.writeln (suma);
// }
// wypisz(x);




// z letami 

// function losuj(x){
//     let losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }

// function sumuj_losowe(x){
//     let suma = 0;
//     let wylosowana = 0;
//     for(i=0; i<x; i++){
//         wylosowana = losuj(100)
//         document.writeln(wylosowana + '<br>');
//         suma += wylosowana;
//     }
//     return document.writeln("SUMA liczb to:" + suma);
// }
// let liczba = parseInt(prompt('Podaj liczbe'));
// sumuj_losowe(liczba);

// z varami

// function losuj(x){
//     var losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }

// function sumuj_losowe(x){
//     var suma = 0;
//     var wylosowana = 0;
//     for(i=0; i<x; i++){
//         wylosowana = losuj(100)
//         document.writeln(wylosowana + '<br>');
//         suma += wylosowana;
//     }
//     return document.writeln("SUMA liczb to:" + suma);
// }
// var liczba = parseInt(prompt('Podaj liczbe'));
// sumuj_losowe(liczba);


//z var 

// function wypisz_zakres(x){
//     var suma = 0;
//     for(i=0; i<=x; i++){
//         document.writeln(i + '<br>');
//         suma += i;
//     }
//     return suma;
// }
// var liczba = parseInt(prompt('Podaj liczbe'));
// wypisz_zakres(liczba);
//var z = wypisz_zakres(liczba);
//document.writeln(z);





//tablice




// function losuj(x){
//     let losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }

// function sumuj_losowe(x){
//     let suma = 0;
//     const tab =[];
//     for(i=0; i<x; i++){
//         tab[i] = losuj(100)
//         document.writeln(tab[i] + '<br>');
//         suma += tab[i];
//     }
//     return document.writeln("SUMA liczb to:" + suma);
// }
// let liczba = parseInt(prompt('Podaj liczbe'));
// sumuj_losowe(liczba);




// function losuj(x){
//     let losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }

// function sumuj_losowe(x){
//     let suma = 0;
//     const tab =[];
//     let wylosowana = 0;
//     for(i=0; i<x; i++){
//         wylosowana = losuj(100)
//         if(wylosowana % 2 == 0){
//         tab[i] = wylosowana
//         document.writeln(tab[i] + '<br>');
//         suma += tab[i];
//         }
//     }
//     return document.writeln("SUMA liczb to:" + suma);
// }
// let liczba = parseInt(prompt('Podaj liczbe'));
// sumuj_losowe(liczba);








// function losuj(x){
//     var losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }

// function sumuj_losowe(x){
//     var suma = 0;
//     var tab =[];
//     var wylosowana = 0;
//     for(i=0; i<x; i++){
//         wylosowana = losuj(100)
//         if(wylosowana % 2 == 0){
//         tab[i] = wylosowana
//         document.writeln(tab[i] + '<br>');
//         suma += tab[i];
//         }
//     }
//     return suma;
// }
// var liczba = parseInt(prompt('Podaj liczbe'));
// sumuj_losowe(liczba);



// function losuj(x){
//     var losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }

// function sumuj_losowe(x){
//     var suma = 0;
//     var tab =[];
//     var wylosowana = 0;
//     for(i=0; i<x; i++){
//         wylosowana = losuj(100)
//         if(wylosowana % 2 == 0){
//         tab[i] = wylosowana
//         document.writeln(tab[i] + '<br>');
//         suma += tab[i];
//         }
//     }
//     return suma;
// }
// var liczba = parseInt(prompt('Podaj liczbe'));
// sumuj_losowe(liczba);




// function losuj(x){
//     var losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }

// function sumuj_losowe(x){
//     var suma = 0;
//     var tab =[];
//     var wylosowana = 0;
//     for(i=0; i<x; i++){
//         wylosowana = losuj(100)
//         if(wylosowana % 2 == 0){
//         tab[i] = wylosowana
//         document.writeln(tab[i] + '<br>');
//         suma += tab[i];
//         }
//         else{
//         i--;    
//         }
//     }
//     return suma;
// }
// var liczba = parseInt(prompt('Podaj liczbe'));
// document.writeln("SUMA to:" + sumuj_losowe(liczba));





// function losuj(x){
//     var losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }

// function sumuj_losowe(x){
//     var suma = 0;
//     var tab =[];
//     var wylosowana = 0;
//     var i = 0;
//     while(i < x){
//         wylosowana = losuj(100)
//         if(wylosowana % 2 == 0){
//         tab[i] = wylosowana
//         document.writeln(tab[i] + '<br>');
//         suma += tab[i];
//         i++
//         }
//     }
//     return suma;
// }
// var liczba = parseInt(prompt('Podaj liczbe'));
// document.writeln("SUMA to:" + sumuj_losowe(liczba));


// function losuj(x){
//     var losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }

// function sumuj_losowe(x){
//     var suma = 0;
//     var tab =[];
//     var i = 0;
//     while(i < x){
//         tab[i] = losuj(100)
//         if(tab[i] % 2 == 0 || tab[i] % 3 == 0){
//         document.writeln(tab[i] + '<br>');
//         suma += tab[i];
//         i++
//         }
//     }
//     return suma;
// }
// var liczba = parseInt(prompt('Podaj liczbe'));
// document.writeln("SUMA to:" + sumuj_losowe(liczba));





// &&	and (i)	(x < 10 && y > 1)	Prawda, bo x jest mniejsze od 10 i y jest większe od 1
// ||	or (lub)	(x > 8 || y > 1)	Prawda, bo x nie jest większe od 8, ale y jest większe od 1
// ^	xor (jeden z, ale nie dwa równocześnie)	(x === 6 ^ y === 3)	Fałsz, bo obydwa są prawdziwe
// !	not (negacja)	!(x === y)	Prawda, bo negujemy to, że x === y

// for(var i = 0;i < x;i+=2){
// }



// function losuj(x){
//     var losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }

// function zlicz_losowe(x){
//     var tab = [];
//     var licznik = 0;
//     for(var i = 0;i < x;i++){
//         tab[i] = losuj(100);
//         document.writeln(tab[i] + "<br>");
//         if(tab[i] < 20){
//             licznik++;
//         }
//     }
//     return licznik;
// }
// var liczba = parseInt(prompt('Podaj liczbe'));
// document.writeln("Licznik liczb mniejszych od 20 wynosi: " + zlicz_losowe(liczba));




// function losuj(x){
//     var losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }

// function zlicz_losowe(x,y){
//     var tab = [];
//     var licznik = 0;
//     for(var i = 0;i < x;i++){
//         tab[i] = losuj(100);
//         document.writeln(tab[i] + "<br>");
//         if(tab[i] == y){
//             licznik++;
//         }
//     }
//     return licznik;
// }
// var liczba1 = parseInt(prompt('Podaj x ilość liczb'));
// var liczba2 = parseInt(prompt('Podaj y jaką liczbę liczyć'));
// document.writeln("Licznik liczby y wynosi: " + zlicz_losowe(liczba1, liczba2));



// function losuj(x){
//     var losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }

// function zlicz_tab(max){
//     var ilosc = losuj(max);
//     var tab =[];
//     var nieparzyste = 0;
//     document.writeln("Zostało wylosowanych "+ ilosc + " liczb.<br>")
//     for(i=0; i < ilosc; i++){
//         tab[i] = losuj(max);
//         document.writeln(tab[i] + '<br>')
//         if(tab[i] % 2 != 0){
//             nieparzyste++;
//         }
//     }
//     return nieparzyste;
// }
// var liczba = parseInt(prompt('Podaj liczbe'));
// document.writeln("Liczb nieparzystych jest:" + zlicz_tab(liczba));


// tab[tab.length-1]




//do poprawienia

// function losuj2(x){
//     let losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }
// function nieobecna(){
//     const tab = [];
//     let wylosowana = 0;
//     let obecna = false;
//     for(i=0;i < 10;i++){
//         wylosowana = losuj2(9);   
//         for(j=0;j < i+1;j++){
//             if(tab[j] == wylosowana){
//                 obecna = true;
//                 break;
//             }
//         }

//     }
//     return tab;
// }
// nieobecna();






function losuj(x){
    var losowa = parseInt(Math.random()*(x+1));
    return losowa;
}

function zlicz_losowe(x,y){
    var tab = [];
    var licznik = 0;
    for(var i = 0;i < x;i++){
        tab[i] = losuj(100);
        document.writeln(tab[i] + "<br>");
        if(tab[i] == y && i % 2 != 0){
            licznik++;
        }
    }
    return licznik;
}
var liczba1 = parseInt(prompt('Podaj x ilość liczb'));
var liczba2 = parseInt(prompt('Podaj y jaką liczbę liczyć'));
document.writeln("Licznik liczby y wynosi: " + zlicz_losowe(liczba1, liczba2));
