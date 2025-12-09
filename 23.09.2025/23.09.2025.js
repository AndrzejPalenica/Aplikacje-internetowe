// //DEKLARACJA KLASY
// function Uczen(imie_u, wiek_u, klasa_u){
//     //cechy
//     this.imie = imie_u;
//     this.wiek = wiek_u;
//     this.klasa = klasa_u;
 
//     //zachowania
//     this.przedstaw_sie = function() {
//         document.writeln("Imie: " + this.imie + "<br> Wiek:" + this.wiek + "<br> Klasa:" + this.klasa + '<br>');
//     }
//     this.zmien_wiek = function(nowy_wiek){
//         this.wiek = nowy_wiek;
//     }
// }
// // TWORZENIE OBIEKTU
//  var uczen1 = new Uczen('Maks',15,'1A');
//  var Andrzej = new Uczen('Andrzej', 17,'4I1');

// // WYWOŁYWANIE METODY OBIEKTU
// uczen1.przedstaw_sie();
// Andrzej.przedstaw_sie();

// // ZMIANA WARTOŚCI CECHY
// uczen1.wiek = 16;
// //   Andrzej.wiek += 2;
// Andrzej.zmien_wiek(18);










// // WYWOŁYWANIE METODY OBIEKTU PO ZMIANIE WIEKU
// Andrzej.przedstaw_sie();


//  // GRA strzelanie

// function Gracz(nick_g, hp_g, lvl_g){
//     this.nick = nick_g;
//     this.hp = hp_g;
//     this.lvl = lvl_g;

//     this.wypisz_dane = function(){
//         document.writeln("NICK: " + this.nick + "<br>HP: " + this.hp + "<br>LVL: " + this.lvl + "<br><br>");
//     }

//     this.zmien_hp = function(nowe_hp){
//         this.hp += nowe_hp;
//     }

//     this.strzel = function(przeciwnik){
//         //losujemy od 0 do 9
//         var losowa = parseInt(Math.random()*10);
//         if(losowa == 0){
//             document.writeln("HEADSHOT!!!: -80HP <br>");
//             przeciwnik.zmien_hp(-80);
//         }else if(losowa > 0 && losowa < 5){
//             document.writeln("Strzał w KORPUS: -40HP <br>");
//             przeciwnik.zmien_hp(-40);
//         }else if(losowa == 5 || losowa == 6){
//             document.writeln("Strzał w NOGE: -20HP <br>");
//             przeciwnik.zmien_hp(-20);
//         }else if(losowa == 7 || losowa == 8){
//             document.writeln("Strzał w RĘKE: -10HP <br>");
//             przeciwnik.zmien_hp(-10);
//         }else{
//             document.writeln("PUDŁOOOOO!!! <br>");
//         }
//     }

// }
// var gamer1 = new Gracz("Bob13", 100, 5);
// var gamer2 = new Gracz("Maciek", 100, 5);

// var atakujacy;
// var obronca;

// var losuj = parseInt(Math.random()*2);
// if(losuj == 0){
//     atakujacy = gamer1;
//     obronca = gamer2;
// }else{
//     atakujacy = gamer2;
//     obronca = gamer1;
// }

// while(atakujacy.hp > 0){
//     document.writeln("<br>==============================================<br>");
//     document.writeln("ATAKUJACY: <br>");
//     atakujacy.wypisz_dane();
//     document.writeln("OBRONCA: <br>");
//     obronca.wypisz_dane();
    
//     atakujacy.strzel(obronca);

//     var temp = atakujacy;
//     atakujacy = obronca;
//     obronca = temp;
// }

// if(gamer1.hp <= 0){
//     document.writeln("WYGRYWA - GRACZ 2 !!!");
// }else{
//     document.writeln("WYGRYWA - GRACZ 1 !!!");
// }
 


// // STRING

// var txt = 'JavaScript';
// var dlugosc = txt.length;
// // alert(dlugosc);
// var wycinek = txt.substring(0, 4);
// document.writeln(wycinek  + '<br>');


// var znak = txt.charAt(4);
// document.writeln(znak + '<br>');


// var duze = txt.toUpperCase();
// document.writeln(duze +  '<br>');


// var male = txt.toLowerCase();
// document.writeln(male + '<br>');


// var txt = prompt('Podaj tekst: ');
// var i = 0; 
// while(i <= txt.length - 1){
//     // numer ostatniego znaku w tekśie
//     document.writeln(txt.charAt(i).toUpperCase() + '<br>');
//     i++;
// }
// document.writeln(txt);


// var txt = prompt('Podaj tekst: ');
// var i = 0;
// var licznik = 0; 
// while(i <= txt.length - 1){
//     // numer ostatniego znaku w tekśie
//     if(txt.charAt(i).toLowerCase() == 'a'){
//         licznik++;
//     }
//     i++;
// }
// document.writeln('Licnik wynosi: ' + licznik);






// // LICZNIK SŁOW


// var txt = prompt("Podaj test: ");
// var licznik = 0;
// var i = 0;
// var wyrazy;
// while( i <= txt.length-1){
//     if(txt.charAt(i) == " " ){
//         //txt.chartAt(i) == "a" || txt.charAt(i) == "A"
//         licznik++;
//     }
//     i++;
// }
 
// if(txt.length == 0){
//     wyrazy = 0;
// }else{
//     wyrazy = licznik + 1;
// }
// document.writeln(wyrazy);
 
 

// // LICZNIK SŁÓW UPGRADE

// var txt = prompt("Podaj tekst: ");
// var licznik = 0;
// var wyrazy;
// var i = 0;
// while(i <= txt.length-1){
//         //numer ostatniego znaku w tekście
//         if(i == 0 && txt.charAt(i) == " "){
//             //pierwsza spacja - nie zwiekszamy licznika
//         }else if(i > 0 && txt.charAt(i) == " " && txt.charAt(i-1) == " "){
//             //kolejna spacja - nie zwiekszamy licznika
//         }else if(txt.charAt(i) == " "){
//             licznik++;
//         }

//         if(txt.charAt(i) == " " && i == txt.length-1){
//             licznik--;
//             //spacje na końcu - odejmujemy
//         }
//         i++;
// }

// if(txt.length == 0){
//     wyrazy = 0;
// }else{
//     wyrazy = licznik + 1;
// }

// document.writeln(wyrazy);



// // LICZNIK CYFR

// // if(!isNaN(txt.charAt(i)) && txt.charAt(i)!=' ')

// var txt = prompt("Podaj tekst: ");
// var licznik = 0;
// var i = 0;
// while(i <= txt.length-1){
//     if(Number(txt.charAt(i))){
//         licznik++;
//     }
//     i++;
// }
// if( licznik == txt.length){
//     document.writeln('Tak' + '<br>');
// }
// else{
//     document.writeln('Nie' + '<br>');
// }
// document.writeln('Licznik cyfr to ' + licznik + ' z ' + txt.length + ' znaków.');







// // PORÓWNYWANIE 1 I OSTATNIEJ LITERY

// var txt = prompt('wprowadz tekst');
// document.writeln('Czy pierwszy i ostatni znak są takie same: ');
// if(txt.charAt(0) == txt.charAt(txt.length - 1)){
//     document.writeln('TAK');
// }
// else{
//     document.writeln('NIE');
// }






