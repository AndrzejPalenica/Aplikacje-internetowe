let div1 =document.querySelector('#div-1 > pre');
div1.innerHTML = 'Ala ma kota';
div1.style.background = '#555';
div1.style.color = '#eee';

let text = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        text += '* ';
    }
    text +=  "\n";
}
div1.innerHTML = text;