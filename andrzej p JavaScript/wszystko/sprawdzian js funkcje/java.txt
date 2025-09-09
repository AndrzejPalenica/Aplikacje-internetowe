function calculator(arg1, arg2, operator){
    let wynik = 0;
    if(operator == "-"){
        wynik = arg1-arg2;
        
    }
    if(operator == "+"){
        wynik = arg1+arg2;
        
    }
    if(operator == "*"){
        wynik = arg1*arg2;
        
    }
    if(operator == "/"){
        wynik = arg1/arg2;
        
    }
    return wynik;

}
calculator(2,5,"-");


//zadanie 2
function sumEvenOdd(...arg){
    let sum =0;
    for(i = 0; i < arg.length; i++){
        sum += i;
    }
    return sum;
}
sumEvenOdd([1,3,2,5,4,2,6,5,8]);

//zadanie 3
function isLeapYear(dni, rok){
    wynik = false;
    if(dni ==365 || rok%400 == 0){
        wynik = true;
    }
    return wynik;
}
isLeapYear();

//zadanie 4
function isIsogram(wartosc){
    const tab =[];
    tab.push(wartosc).split(" ");
    if(i){
        return false;

    }
}
isIsogram();

//zadanie 5
//5.	Utwórz funkcjęinvertText(), która przyjmie jako argument ciąg znaków złożony z wielu słów,
// a następnie zwróci ten ciąg ze słowami w odwróconej kolejności.

function invertText(tablica){
    const array2 =[];
    const array = tablica.split(" ");
    for(i=array.length; i >= 0; i--){
        array2.push(i);
    }
    return array2;
}
invertText("abcd abg ahg");