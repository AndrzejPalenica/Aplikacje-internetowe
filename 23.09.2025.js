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


function gracz(nick_g, hp_g, lvl_g){
    //cechy
    this.nick = nick_g;
    this.hp = hp_g
    this.lvl = lvl_g
 
    //zachowania
    this.wypisz_dane = function() {
        document.writeln("Nick: " + this.nick + "<br> hp:" + this.hp + "<br> lvl:" + this.lvl + "<br>");
    }
 
    this.zmien_hp = function(zmienione_hp) {
       this.hp += zmienione_hp;
    }
 
    this.strzel = function(przeciwnik) {
        // losujemy od o do 9
        var losowa = parseInt(Math.random()*10);
        if(losowa == 0){
            document.writeln("HEADSHOTT!!; -80HP <br>");
            przeciwnik.zmien_hp(-80);
         } else if(losowa > 0 && losowa < 5) {
            document.writeln("STRZAŁ w korpuus: -40HP <br>");
            przeciwnik.zmien_hp(-40);
 
            }else if(losowa == 5 || losowa == 6){
                document.writeln("Strzał w nogę: -20HP <br>");
                przeciwnik.zmien_hp(-20);
            }else if(losowa == 7 || losowa == 8 ){
                document.writeln("Strzał w rękę: -10HP <br>");
                przeciwnik.zmien_hp(-10);
            }else{
                document.writeln("Pudłoooooo!! <br>");
            }
 
 
       
    }
}
 
//tworzenie obiektu
var gracz1 = new gracz("Maks", 100, 5);
var gamer2 = new gracz("Maciek", 100, 5);
 
var atakujacy;
var obronca;
 
var losowa = parseInt(Math.random()*2);
if(losowa == 0){
    atakujacy = gracz1;
    obronca = gamer2
}else{
    atakujacy = gamer2;
    obronca = gracz1
}
 
 
 
while(obronca.hp > 0){
    document.writeln("Atakujacy: <br>");
    atakujacy.wypisz_dane;
    document.writeln("Obronca: <br>");
    obronca.wypisz_dane;
 
    atakujacy.strzel(obronca);
 
    var temp = atakujacy;
    atakujacy = obronca;
    obronca = temp;
}
 
if(gracz1.hp <= 0){
    document.writeln("Wygrywa- gracz 2 !!");
}else{
    document.writeln("Wygrywa- gracz 1 !!");
}
 