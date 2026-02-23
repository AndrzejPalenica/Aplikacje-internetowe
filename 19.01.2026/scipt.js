var div = document.getElementById("blok");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var article = document.getElementById("article")

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




// var wzorzec_kod = /^[0-9]{2}\-[0-9]{3}$/;
// var tekst = prompt("Podaj tekst");
// if(wzorzec_kod.test(tekst)){
//     //poprawny
//     div.innerText = "Jest Git";
// }
// else{
//     //niepoprawny
//     div.innerText = "nie jest git";
// }




// var wzorzec_rjestracja = /^(KTT|KNT)[0-9A-Z]{4}$/;
// var tekst = prompt("Podaj tekst");
// if(wzorzec_rjestracja.test(tekst)){
//     //poprawny
//     div.innerText = "Jest Git";
// }
// else{
//     //niepoprawny
//     div.innerText = "nie jest git";
// }


// function zmien(){
//     div.innerText = "WYGRAŁEŚ!!!";
// }
// function kolor_wjazd(){
//     div.style.backgroundColor = "green";
// }
// function kolor_wyjazd(){
//     div.style.backgroundColor = "aqua";
// }
// div.addEventListener("mouseover", kolor_wjazd);
// div.addEventListener("mouseout", kolor_wyjazd);
// // kolor_wjazd() - jak odrazu ma sie wyonać bez () to jak listener nasłucha





// function zmien_kolor(kolor){
//     div.style.backgroundColor = kolor;
// }
// function ustaw(){
//     div.style.border = "1px solid black";
//     div.style.backgroundColor = "red"
// }


// div.addEventListener("mouseover", function(){
//     zmien_kolor("green");
// });

// div.addEventListener("mouseout", function(){
//     zmien_kolor("aqua");
// });


// div.addEventListener("dblclick", ustaw);





// function zmien_kolor_aqua(kolor){
//     div.style.backgroundColor = kolor;
// }
// function zmien_kolor(){
//     var r = parseInt(Math.random()*256);
//     var g = parseInt(Math.random()*256);
//     var b = parseInt(Math.random()*256);
//     div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
// }
// function ustaw(){
//     div.style.border = "1px solid black";
//     div.style.backgroundColor = "red"
//     div.innerText = "WYGRAŁEŚ";
// }


// div.addEventListener("mouseover", zmien_kolor);

// div.addEventListener("mouseout", function(){
//     zmien_kolor_aqua("aqua");
// });


// div.addEventListener("dblclick", ustaw);








function zmien_kolor_2(kolor){
    div.style.backgroundColor = kolor;
}
function zmien_kolor(){
    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);
    div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
div.addEventListener("mouseover", zmien_kolor);
div.addEventListener("mouseout", function(){
    zmien_kolor_2("aqua");
});

function zwieksz(){
    var i = parseInt(div.innerText);
    div.innerText = i + 1;
}
div.addEventListener("click", zwieksz);


function dzien(){
    if(article.classList.contains("night")){
        article.classList.remove("night");
    }
    article.classList.add("day");
}
function noc(){
    if(article.classList.contains("day")){
        article.classList.remove("day");
    }
    article.classList.add("night");    
}
img1.addEventListener("click", dzien);
img2.addEventListener("click", noc);


