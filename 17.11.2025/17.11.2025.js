// // // tablica dwuwymiarowy

// var tab = [];

// tab[0] = [1,5,8];
// tab[1] = [3,7,2];
// tab[2] = [5,1,0];


// // document.writeln(tab[1][2]);


// for(i = 0; i < tab.length; i++){
//     document.writeln(' | ');
//     for(j = 0; j < tab[i].length; j++){
//         document.writeln(tab[i][j] + ' | ')
//     }
//     document.writeln('<br>')
// }

// /*
// i: 0
// j: 0

// i: 0
// j: 1

// i: 0
// j: 2

// i: 1
// j: 0
// ...

// */







// document.writeln(window.innerHeight + "px - wysokość<br>" + window.innerWidth + "px - szerokość<br>");
// var okno = window.open("https://www.zsht.pl", 'moje_okno', 'height=600, width=600, top=200, left=400');
// // window.setTimeout("okno.close()", 3000);







// function sprawdz_okno(){
//     if(window.innerWidth < 500){
//         okno.close();
//     }
// }
// window.setInterval("sprawdz_okno()", 250);







// var licznik = 0;
// function uwaga(){
//     alert("NIE WCHODŹ NA STRONE");
//     licznik++;
//     if(licznik > 2){
//         // ZATRZYMAĆ INTERWAŁ
//         window.clearInterval(inter);
//     }
// }
// var inter = window.setInterval("uwaga()", 2000);








// document.writeln("href " + location.href + "<br>");
// document.writeln("protocol " + location.protocol + "<br>");
// document.writeln("hostname " + location.hostname + "<br>");
// document.writeln("pathname " + location.pathname + "<br>");
// document.writeln("port " + location.port + "<br>");

// location.href = 'https://zsht.pl';
// location.replace("https://zsht.pl");








// var blok1 = document.getElementById('div-1');




// var tekst = prompt("Wprowdz tekst: ");
// blok1.innerText = tekst;

// blok1.innerHTML = tekst;




// alert(blok1.getAttribute("style"));
// blok1.setAttribute("style","color: green;");









// var stary_styl = blok1.getAttribute("style");
// stary_styl += "color: green;";
// blok1.setAttribute("style", stary_styl);









// var obr = document.getElementById("obrazek");
// function podmien_obraz(){
//     obr.setAttribute("src", "grafika/mozaika")
// }
// window.setTimeout('podmien_obraz()', 3000);




// var obr = document.getElementById("obrazek");
// var i = 2;
// function zmien_obr(){
//     // var sciezka = "grafika/" + i +".jpg";
//     obr.setAttribute("src","grafika/" + i +".jpg");
//     // obr.setAttribute("src", sciezka);
//     i++;
//     if(i > 4){
//         i = 1;
//     }
// }
// window.setInterval("zmien_obr()", 2000);


// var kolor = '';
// var r = prompt("Podaj R (0-255)");
// var g = prompt("Podaj G (0-255)");
// var b = prompt("Podaj B (0-255)");
// kolor = "rgb(" + r + " , " + g + " , " + b + ")"
// blok1.style.backgroundColor = kolor;



// blok1.style.backgroundColor = 'rgba(32, 165, 121, 1)';
// blok1.style.border = 'green 10px solid'



// var kolor = '';
// var r = parseInt(Math.random()*256)
// var g = parseInt(Math.random()*256)
// var b = parseInt(Math.random()*256)
// kolor = "rgb(" + r + " , " + g + " , " + b + ")";
// blok1.style.backgroundColor = kolor;







// kwadrat ruchomy

// function losuj_kolor(){
//     var kolor = '';
//     var r = parseInt(Math.random()*256)
//     var g = parseInt(Math.random()*256)
//     var b = parseInt(Math.random()*256)
//     kolor = "rgb(" + r + " , " + g + " , " + b + ")";
//     blok1.style.backgroundColor = kolor;


//     var kolor2 = '';
//     var r2 = parseInt(Math.random()*256)
//     var g2 = parseInt(Math.random()*256)
//     var b2 = parseInt(Math.random()*256)
//     kolor2 = "rgb(" + r2 + " , " + g2 + " , " + b2 + ")";
//     blok1.style.borderColor = kolor2;


//     var top  = parseInt(Math.random()*800);
//     var left = parseInt(Math.random()*1500);
//     blok1.style.position = "absolute";   
//     blok1.style.top = top + "px";
//     blok1.style.left = left + "px";
// }
// window.setInterval("losuj_kolor()",2500);

