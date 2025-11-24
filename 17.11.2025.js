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


document.writeln(window.innerHeight + "px - wysokość<br>" + window.innerWidth + "px - szerokość<br>");


var okno = window.open("https://www.zsht.pl", 'moje_okno', 'height=600, width=600, top=200, left=400');

// window.setTimeout("okno.close()", 3000);


function sprawdz_okno(){
    if(okno.innerWidth < 200){
        okno.close();
    }
}
window.setInterval("sprawdz_okno()", 250)