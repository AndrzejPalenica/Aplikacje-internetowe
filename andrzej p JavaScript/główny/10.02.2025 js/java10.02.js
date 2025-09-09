// Utwórz funkcję, która przyjmuje liczbę jako argument.
// Dodaj wszystkie liczby od 1 do liczby przekazanej do funkcji.
// Na przykład, jeśli dane wejściowe to 4, Twoja funkcja powinna zwrócić 10, ponieważ 1 + 2 + 3 + 4 = 10.

function addUp(arg){
    let sum = 0;
    for(i=1;i<=arg;i++){
        sum += i;
    }
    return sum;
}

// Utwórz funkcję, która przyjmuje tablicę ciągów znaków i zwraca tablicę posortowaną od najkrótszego do najdłuższego.
function sortByLength(...arg){
   return arg.sort((a,b) => (a.length - b.length))
}



// Wartość jest wszechobecna, jeśli znajduje się w każdej podtablicy wewnątrz tablicy głównej.
// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// Liczba 3 występuje w każdym elemencie tej tablicy, więc jest wszechobecna.

function isOmnipresent(tablica, liczba) {
    let isOmnipresent = true;
for (let i = 0; i < tablica.length; i++) {
     let obecna = false;
         for (let j = 0; j < tablica[i].length; j++) {          
             if (tablica[i][j] === liczba) {
                  obecna = true;
                   break;
                 }
          }
          if (!obecna) {
              isOmnipresent = false;
             break;
         } 
     }
     return isOmnipresent;
}    
console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]),(3));




// Utwórz funkcję, która akceptuje ciąg liczb oddzielonych spacją i zwraca najwyższą i najniższą liczbę (jako ciąg).

function highLow(numbers){
    const numArray = numbers.split(' ').map(Number);
    const min = Math.min(...numArray);
    const max = Math.max(...numArray);
     
    return `Najmniejsza;${min}, Największa: ${max}`;
}
  const result =highLow("3 5 1 8 9 50 -7 2");
  console.log(result);



// Ciąg liczb trójkątnych jest generowany ze wzoru kropek tworzących trójkąt. Pierwsze 5 liczb ciągu, czyli kropek, to:
// 1, 3, 6, 10, 15
// Oznacza to, że pierwszy trójkąt ma tylko jedną kropkę, drugi ma trzy kropki, trzeci ma 6 kropek itd.
// Napisz funkcję, która zwraca liczbę kropek, gdy podany jest odpowiadający jej numer trójkąta ciągu.


// n(n+1)/2

function triangle(args) {
    let liczbaKropek = 1;
    let sumakropek = 0;
    for(let i = 1;i < args;i++){
        liczbaKropek += i;
        sumakropek = liczbaKropek + i;
    }

    return sumakropek;
}


console.log("suma kropek jest rowna" + triangle(4));