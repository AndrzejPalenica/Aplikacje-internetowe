const numbers = [234, 45, 15, 37, 11, 34, 33.5, 23.9, 65, 11, 3.6];
// Array.prototype.sum = function() {
//     let sum = 0;
//     this.forEach(num => sum += num);
//     return sum;
// };
// numbers.sum();

Array.prototype.sum = function() {
    let numbers = [...this];
    let sum = numbers[0];
    numbers.shift();
    numbers.forEach(num => sum += num);
    return sum;
};
numbers.sum();
Array.prototype.sub = function() {
    let numbers = [...this];
    let sub = numbers[0];
    numbers.shift();
    numbers.forEach(num => sub -= num);
    return sub;
};
Array.prototype.mul = function() {
    let numbers = [...this];
    let mul = numbers[0];
    numbers.shift();
    numbers.forEach(num => mul *= num);
    return mul;
};
Array.prototype.div = function() {
    let numbers = [...this];
    let div = numbers[0];
    numbers.shift();
    numbers.forEach(num => div /= num);
    return div;
};


// numbers.shift usuwa pierwszą w tablicy
// let numbers = [...this]; przepisuje wszystkie elementy z tamtej tablicy do nowej

//utworzyć 3 metody które będą wyciągać z tablicy elementy całkowite i zmiennoprzecinkowe 
//InOnlt and Float only

Array.prototype.IntOnly = function(){
    let numbers = [...this];
    let int = [];
    numbers.forEach(function(num){
        if(Number.isInteger(num)){
            int.push(num)
        }
    });
    return int;
};
numbers.IntOnly();

// Array.prototype.IntOnly = function() {
//     return this.filter(Number.isInteger);
// };

// console.log(mojaTablica.IntOnly());

Array.prototype.FloatOnly = function(){
    let numbers = [...this];
    let float = [];
    numbers.forEach(function(num){
        if(Number.isInteger(num)){
        }
        else{
            float.push(num);
        }
    });
    return float;
};
numbers.FloatOnly();

// if (!Number.isInteger(num))