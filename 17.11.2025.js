// // tablica dwuwymiarowy

var tab = [];

tab[0] = [1,5,8];
tab[1] = [3,7,2];
tab[2] = [5,1,0];


// document.writeln(tab[1][2]);


for(i = 0; i < tab.length; i++){
    document.writeln(' | ');
    for(j = 0; j < tab[i].length; j++){
        document.writeln(tab[i][j] + ' | ')
    }
    document.writeln('<br>')
}

/*
i: 0
j: 0

i: 0
j: 1

i: 0
j: 2

i: 1
j: 0
...

*/