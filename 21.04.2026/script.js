let button = document.getElementById("button");
let kurs_js_zdesperowani = document.getElementById("kurs_js_zdesperowani");
let kurs_js_odwazni = document.getElementById("kurs_js_odwazni");
let kurs_check = document.getElementById("kurs_check");
let koszt = document.getElementById("koszt");
let platnosc = document.getElementById("platnosc");
let raty = document.getElementById("raty");
let promocode = document.getElementById("promocode");


raty.style.marginBottom = "50px";
let cena = 0;
let wartosc_kod;
button.addEventListener("click", function(){
    kurs_check.innerText = "";
    if(!kurs_js_zdesperowani.checked && !kurs_js_odwazni.checked){
        kurs_check.innerText = "BRAK WYBORU";
        kurs_check.classList.add("angry");
    }
    else{
        if(kurs_js_odwazni.checked && kurs_js_zdesperowani.checked){
            cena = 3580;
        }
        else if(kurs_js_odwazni.checked){
            cena = 2130;
        }
        else{
            cena = 1450;
        }
        if(promocode.value == "RABAT20"){
            cena = parseInt(cena * 4/5);
            wartosc_kod = "-20%";
        }
        else if(promocode.value == "4I1"){
            cena = parseInt(cena * 2/3);
            wartosc_kod = "-67%";
        }
        else if(promocode.value == ""){
            wartosc_kod = "BRAK";
        }
        else{
            wartosc_kod = "NIEPOPRAWNY KOD";
        }
    }
    koszt.innerText = "KOSZT ZAMÓWIENIA: " + cena + " KOD[" + wartosc_kod + "]";
    platnosc.innerText = "PŁATNOŚĆ W [" + raty.value + "] RATACH PO " + cena / raty.value;
});