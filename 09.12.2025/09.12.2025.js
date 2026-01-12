// var div1 = document.querySelector("#div1");

// div1.style.height = "200px";
// div1.style.width = "10px";
// div1.style.border = "5px solid black"


// var tekst = prompt("podaj tekst");

// if(tekst.length > 10){
//     div1.style.color = "red";
//     div1.innerHTML = tekst + "<br>" + tekst + "<br>" + tekst;
// }
// else{
//     div1.innerText = tekst + " " + tekst + " " + tekst;
// }


// var width = 10;
// function width_up(){
//     if(width > 1800){
//         width = 10;     
//     }
//     else{
        
//     }
//     width += 10;
//     div1.style.width = width + "px"

//     if(width <= 600){
//         div1.style.backgroundColor = "red";
//     }
//     else if(600 < width < 1200){
//         div1.style.backgroundColor = "yellow";
//     }
//     else if(width > 1200){
//         div1.style.backgroundColor = "green";
//     }
// }
// window.setInterval("width_up()", 20);





var element = document.createElement("div");

element.innerText = "NOWY DIV";

var div_blok =  document.getElementById("blok");

// div_blok.prepend(element);
div_blok.after(element);

div_blok.style.backgroundColor =   "yellow";
//priorytet taki jak styl wpisany(priorytet większy od arkusza zewnętrznego)


// div_blok.classList.add("klasa_1");
// div_blok.classList.add("klasa_2");

div_blok.classList.add("klasa_1","klasa_2");
div_blok.classList.remove("klasa_2");


// div_blok.classList.toggle("klasa_2");
alert(div_blok.classList);

div_blok.classList.contains("klasa_1"); 


// div_blok.id = "";

element.id = "id_1"