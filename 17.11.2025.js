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


var blok1 = document.getElementById('div-1');

var tekst = prompt("Wprowdz tekst: ");
blok1.innerText = tekst;