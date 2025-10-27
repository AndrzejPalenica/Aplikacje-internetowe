//DEKLARACJA KLASY
function Uczen(imie_u, wiek_u, klasa_u){
    //cechy
    this.imie = imie_u;
    this.wiek = wiek_u;
    this.klasa = klasa_u;
 
    //zachowania
    this.przedstaw_sie = function() {
        document.writeln("Imie: " + this.imie + "<br> Wiek:" + this.wiek + "<br> Klasa:" + this.klasa + '<br>');
    }
    this.zmien_wiek = function(nowy_wiek){
        this.wiek = nowy_wiek;
    }
}
// TWORZENIE OBIEKTU
 var uczen1 = new Uczen('Maks',15,'1A');
 var Andrzej = new Uczen('Andrzej', 17,'4I1');

// WYWOŁYWANIE METODY OBIEKTU
uczen1.przedstaw_sie();
Andrzej.przedstaw_sie();

// ZMIANA WARTOŚCI CECHY
uczen1.wiek = 16;
//Andrzej.wiek += 2;
Andrzej.zmien_wiek(18);











uczen1.przedstaw_sie();


