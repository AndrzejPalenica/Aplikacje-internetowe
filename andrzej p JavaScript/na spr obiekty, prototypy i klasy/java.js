//obiekty
const jałto = {
    kolor: 'cyrwony',
    markia: 'peżu',
    Start: function(liczba){
    const tab =[];
    for(let i = 1; i <= liczba; i++)
        if(liczba % i ==0)tab.push(i)
    return tab;
}
}
jałto.Start(20);


//klasy
class Library{
    #autor;
    #cena;
    #tytuł;
    constructor(autor, cena, tytuł){
        this.#autor = autor;
        this.#cena = cena;
        this.#tytuł = tytuł;
    }
    setAutor(autor){
        this.#autor = autor;
    }
    setCena(cena){
        this.#cena = cena; 
    }
    setTytuł(tytuł){
        this.#tytuł = tytuł;
    }
    getAutor(){
        return this.#autor;
    }
    getCena(){
        return this.#cena;
    }
    getTytuł(){
        return this.#tytuł;
    }
}
class Book extends Library{
    constructor(autor,cena,tytuł,pages = 1){
        super(autor,cena,tytuł);
        this.pages = pages;
    }
    setPages(pages){
        this.pages = pages;
    }
    getPages(){
        return this.pages;
    }
}
class Ebook extends Library{
    constructor(autor,tytuł,pages = 0, cena = 'subscription'){
        super(autor,cena,tytuł);
        this.pages = pages;
    }
    setPages(pages){
        this.pages = pages;
    }
    getPages(){
        return this.pages;
    }
}

const ksionzka = new Book('Jozek',20,'Dzianis');
const jebook = new Ebook('Wtosik','historia ebookow',);




// Utwórz klasę przyjmującą następujące cztery argumenty dla konkretnego piłkarza:

// name
// age
// height
// weight
// Utwórz również trzy funkcje dla klasy, która zwraca następujące ciągi znaków:
//  p1 = new Player("David Jones", 25, 175, 75)

//  p1.getAge() ➞ "David Jones is age 25"
//  p1.getHeight() ➞ "David Jones is 175cm"
//  p1.getWeight() ➞ "David Jones weighs 75kg"
class Player{
    name;
    age;
    height;
    weight;
    constructor(name,age,height,weight){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    getAge(){
        return this.name + ' ma ' + this.age + ' lat.';    
    }
    getHeight(){
        return this.name + ' ma ' + this.height + ' wzrostu.'; 
    }
    getWeight(){
        return this.name + ' waży ' + this.weight + ' kilo.';
    }
}
p1 = new Player("David Jones", 25, 175, 75);
p1.getAge();




// Utwórz metodę w Personklasie, która zwraca porównanie wieku innej osoby . Biorąc pod uwagę wystąpienia p1, p2i p3, które zostaną zainicjowane atrybutami namei age, zwróć zdanie w następującym formacie:

// {imię innej osoby} jest {starsza/młodsza/w tym samym wieku co} ja.

// Przykłady
// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)
// p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me."

class Person{
    name;
    age;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    compareAge(Otherplayer){
        if(Otherplayer.age > this.age){
            return Otherplayer.name + " jest starszy od " + this.name;
        }
        else if(Otherplayer.age === this.age){
            return Otherplayer.name + " jest tego smaego wieku co " + this.name;
        }
        else{
            return  Otherplayer.name + " jest młodzy od  " + this.name;
        }

    }
}
p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)
p1.compareAge(p2);
p2.compareAge(p1);
p1.compareAge(p3);

//prototypy


const numbers = [234, 45, 15, 37, 11, 34, 33.5, 23.9, 65, 11, 3.6];
Array.prototype.mul = function(){
    let numbers = [...this];
    let mul =numbers[0];
    numbers.shift();
    numbers.forEach(num => mul *= num);
    return mul;
};
numbers.mul();

// Dodaj metodę wordsCount do String.prototype.
// Metoda powinna:
// usuwać nadmiarowe spacje,
// dzielić tekst na słowa,
// zwracać liczbę słów

 let text = "To jest przykładowy tekst";
 String.prototype.wordsCount = function(){
    let wordsCount = text.split(" ").length;

    return wordsCount;
 }
 text.wordsCount();