//zadanie1
let a =parseInt(prompt("wprowadź wartość od 1 do 10."));
const tab =["koło","półkoło","trójkąt",
    "czworokąt","pięciokąt","sześciokąt",
    "siedmiokąt","ośmiokąt","dziewięciokąt",
    "dziesięciokąt"];
console.log(tab[a-1]);

//zadanie 2
let b =parseInt(prompt("wprowadź ilośc indeksów"));
const tab2 =[];
let i =0;
while(i<b){
    let c =parseInt(prompt("wprowadź wartość do tablicy"));
    tab2.push(c);
    i++;
}
const tab3 =[];
for(j=b-1;j>=0;j--){
    tab3.push(tab2[j]);
}
console.log(tab3);
//console.log(tab3.sort((a,b) => a-b));

//zadanie 3
let d =parseInt(prompt("wprowadź wartość"));
const tab4=[];
for(let i=1;i <= d;i++){
   if(d % i == 0){
    tab4.push(i);
   } 
}
console.log(tab4);
//zadanie 4



