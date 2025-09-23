//DEKLARACJA KLASY
function Uczen(imie_u, wiek_u, klasa_u){
    //cechy
    this.imie = imie_u;
    this.wiek = wiek_u;
    this.klasa = klasa_u;
 
    //zachowania
    this.przedstaw_sie = function() {
        document.writeln("Imie: " + this.imie + "<br> Wiek:" + this.wiek + "<br> Klasa:" + this.klasa);
    }
}
// TWORZENIE OBIEKTU
uczen1 = new Uczen('Maks',15,'1A');

// WYWOŁYWANIE METODY OBIEKTU
uczen1.przedstaw_sie();


// ZMIANA WARTOŚCI CECHY
uczen1.wiek = 16;

uczen1.przedstaw_sie();


