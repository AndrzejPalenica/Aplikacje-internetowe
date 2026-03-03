var ramka = document.getElementById("ramka");

for(var i = 0; i < 432; i++){
	
	var kwadrat = document.createElement("div");
	kwadrat.style.width = "50px";
	kwadrat.style.height = "50px";
	kwadrat.style.float = "left";

	kwadrat.addEventListener("mouseover", function(){
		var r = Math.floor((Math.random() * 255));
		var g = Math.floor((Math.random() * 255));
		var b = Math.floor((Math.random() * 255));
	
		var kolor = "rgb("+r+","+g+","+b+")";
	
		this.style.backgroundColor = kolor;
	});

	ramka.append(kwadrat);

}























/*
function dowolna(liczba){
	if (isNaN(liczba)){
		return "To nie jest liczba";
	}
	liczba = parseInt(liczba);
	if(liczba%2==0){
		return "parzysta";
	}else{
		return "nieparzysta"
	}
}
var x = prompt("Podaj liczbe", "");
var wynik = dowolna(x);
document.write(wynik);
*/