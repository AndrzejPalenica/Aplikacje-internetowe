var div = document.getElementById("blok");

// var wzorzec = /^[0-9]+[a-z]+$/;
// var tekst = prompt("Podaj tekst");
// if(wzorzec.test(tekst)){
//     //poprawny
//     div.innerText = "Jest Git";
// }
// else{
//     //niepoprawny
//     div.innerText = "nie jest git";
// }


var wzorzec_kod = /^[0-9]{2}\-[0-9]{3}$/;
var tekst = prompt("Podaj tekst");
if(wzorzec_kod.test(tekst)){
    //poprawny
    div.innerText = "Jest Git";
}
else{
    //niepoprawny
    div.innerText = "nie jest git";
}