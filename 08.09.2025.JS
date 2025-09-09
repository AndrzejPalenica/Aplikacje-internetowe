//FUMKCJE
// Math.random() przedział 0 - 0,99999999999
// parseInt(Math.random()*10)  0 - 9 parseInt zaokrągla


// function losuj(x){
//     var losowa = parseInt(Math.random()*(x+1));
//     return losowa;
// }
// losuj(10);

// var global = 10; zmienna globalna
// function a(){
//      var zmienna_local = 100; zmienna lokalna bo jest wewnątrz funkcji
// }

// VAR vs LET
// {BLOK}

//for(let i =0;i<5;i++){
//  document.writeln(i + '<br>');  
//}
// document.writeln('ZMIENNA i:' +i);
//na początku jest i++ tylko let nie wypisze ZMIENNA i: 5

//for(var i =0;i<5;i++){
//  document.writeln(i + '<br>');
//}
//document.writeln('ZMIENNA i:' +i);
// wypisze zmienna i:5

function wypisz(x){
    for(i=0;i<=x;i++){
        document.writeln(i+ '<br>');
    }
};
wypisz(3);