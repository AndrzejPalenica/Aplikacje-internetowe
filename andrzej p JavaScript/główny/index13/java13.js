let par = document.querySelectorAll('p');


for(let i = 0; i < par.length; i++){
    console.log(par[i].classList[1]);
    let lista = par[i].classList
    for(let j = 0; j < lista.length; j++){
        console.log(lista[j]);
    }
}

let text = '<ol>';
for(let i = 0; i < par.length; i++){
    text += '<li>';
    text += 'Paragraf ' + (i + 1);
    text += '<ul>';
    let list = par[i].classList;
    for(let j = 0; j < list.length; j++) {
        text += '<li>' + list[j] + '</li>';
    }
    text += '</ul>';
    text += '</li>';
}
text += '</ol>';
classList.innerHTML = text;





// innerHTML tylko zawartość bez <> </>
// console.log(par[i].classList);
// console.log(par[i].classList[1]); - odczytuje tylko 
// pierwszy element
// classList pokazuje elementy i pokazuje je

