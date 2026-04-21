// let bok_a = document.getElementById("bok_a");
// let bok_a_check = document.getElementById("bok_a_check");
// let bok_b = document.getElementById("bok_b");
// let bok_b_check = document.getElementById("bok_b_check");
// let przycisk = document.getElementById("przycisk");
// let wynik = document.getElementById("wynik");
// let obwod = document.getElementById("obwod");
// let pole = document.getElementById("pole");
// let radio_check = document.getElementById("radio_check");

// let valid;
// przycisk.addEventListener("click",  function oblicz(){
//     if(bok_a_check.classList.contains("angry_bok")){
//         bok_a_check.classList.remove("angry_bok");
//     }
//     if(bok_b_check.classList.contains("angry_bok")){
//         bok_b_check.classList.remove("angry_bok");
//     }
//     bok_a_check.innerText = "";
//     bok_b_check.innerText = "";
//     wynik.innerText = "";
//     valid = true;
//     if(bok_a.value == ""){
//         valid = false;
//         bok_a_check.innerText = "Pole puste lub nie poprawny znak";
//         bok_a_check.classList.add("angry_bok");
//     }
//     else if(Number(bok_a.value) <= 0){
//         valid = false;
//         bok_a_check.innerText = "Liczba ujemna lub równa 0";
//         bok_a_check.classList.add("angry_bok");
//     }
//     else{
//         bok_a_check.innerText = "POPRAWNY";

//     }
//     if(bok_b.value == ""){
//         valid = false;
//         bok_b_check.innerText = "Pole puste lub nie poprawny znak";
//         bok_b_check.classList.add("angry_bok");
//     }
//     else if(Number(bok_b.value) <= 0){
//         valid = false;
//         bok_b_check.innerText = "Liczba ujemna lub równa 0";
//         bok_b_check.classList.add("angry_bok");
//     }
//     else{
//         bok_b_check.innerText = "POPRAWNY";
//     }


//     if(valid){
//         if(obwod.checked){
//             wynik.innerText = 2 * parseInt(bok_a.value) + 2 * parseInt(bok_b.value);
//             radio_check.innerText = "";
//         }
//         else if(pole.checked){
//             wynik.innerText = parseInt(bok_a.value) * parseInt(bok_b.value);
//             radio_check.innerText = "";
//         }
//         else{
//             radio_check.innerText = "Wybierz co chcesz wyliczyć!!!";
//             radio_check.classList.add("angry_wynik");
//         }
//     }
// });



let bok_a = document.getElementById("bok_a");
let bok_a_check = document.getElementById("bok_a_check");
let bok_b = document.getElementById("bok_b");
let bok_b_check = document.getElementById("bok_b_check");
let przycisk = document.getElementById("przycisk");
let wynik = document.getElementById("wynik");
let obwod = document.getElementById("obwod");
let pole = document.getElementById("pole");

let valid;
przycisk.addEventListener("click",  function oblicz(){
    if(bok_a_check.classList.contains("angry_bok")){
        bok_a_check.classList.remove("angry_bok");
    }
    if(bok_b_check.classList.contains("angry_bok")){
        bok_b_check.classList.remove("angry_bok");
    }
    bok_a_check.innerText = "";
    bok_b_check.innerText = "";
    wynik.innerText = "";
    valid = true;
    if(bok_a.value == ""){
        valid = false;
        bok_a_check.innerText = "Pole puste lub nie poprawny znak";
        bok_a_check.classList.add("angry_bok");
    }
    else if(Number(bok_a.value) <= 0){
        valid = false;
        bok_a_check.innerText = "Liczba ujemna lub równa 0";
        bok_a_check.classList.add("angry_bok");
    }
    else{
        bok_a_check.innerText = "POPRAWNY";

    }
    if(bok_b.value == ""){
        valid = false;
        bok_b_check.innerText = "Pole puste lub nie poprawny znak";
        bok_b_check.classList.add("angry_bok");
    }
    else if(Number(bok_b.value) <= 0){
        valid = false;
        bok_b_check.innerText = "Liczba ujemna lub równa 0";
        bok_b_check.classList.add("angry_bok");
    }
    else{
        bok_b_check.innerText = "POPRAWNY";
    }


    if(valid){
        if(obwod.selected){
            wynik.innerText = 2 * parseInt(bok_a.value) + 2 * parseInt(bok_b.value);
        }
        else if(pole.selected){
            wynik.innerText = parseInt(bok_a.value) * parseInt(bok_b.value);
        }
    }
});