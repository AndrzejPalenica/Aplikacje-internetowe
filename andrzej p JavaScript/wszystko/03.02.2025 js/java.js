// function sum(a,b) {
//     if ((typeof a) == 'number' && (typeof b) == 'number')
//         return a + b;
//     else
//         return NaN;
// }
// console.log(sum(5, 6));
// console.log(sum(7, 10));

function sum(...args) {
    let sum = 0;
    for(const num of args){
        if((typeof num) == 'number')
            sum += num;
    }
    return sum;
        
}
console.log(sum(5, 6, 3, 5, 12, 6));
console.log(sum(7, 10, true, 'ala ma kota'));


function sub(...args){
    let sub = args[0];
    for(const num of args){
        if((typeof num) == 'number')
            sub -= num;
    }
    return sub;

}
console.log(sub(5, 6, 3,));

function mul(...args){
    let mul = 1;
    for(const num of args){
        if((typeof num) == 'number')
            mul *= num;
    }
    return mul;
}
console.log(mul(5, 6, 3,));

function div(...args){
    let div = args[0];
    for(const nuym of args){
        if((typeof num) == 'number')
            div /= num;
    }
    return div;
}
console.log(div(5, 6, 3,));






//
function sub(...args){
    let sub = args[0];
    for(num = args[1];num <=args.length;num++){
        if((typeof num) == 'number')
            sub -= num;
    }
    return sub;

}
console.log(sub(5, 6, 3,));