function sprawdz(tablica){
    const tab = tablica.split(" ");
    if(tab[0] == tab[tab.length-1]){
        return true;
    }
    else{
        return false;
    }
}
sprawdz("13 17 27 19 13");


function squareSum(n){
    let sum = 0
    for(i=1;i<=n;i++){
        sum += i**2;
    }
    return sum;
}
squareSum(3);

// function arrayInverter(...tab){
//     const array = [];
//     for(i=0;i<tab.length;i++){
//         if(tab[i] > 0){
            
//         (i *(-1));
//         array.push(i);
//         }
//         else{
            
//             array.push(i*(-1));
//         }
//     }
//     return array;
// }
// arrayInverter(-3, 7, -11, 25);


function arrayInverter(...tab) {
    const array = [];
    for (let i = 0; i < tab.length; i++) {
        array.push(-tab[i]);
    }
    return array;
}

console.log(arrayInverter(-3, 7, -11, 25));

