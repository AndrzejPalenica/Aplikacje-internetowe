let option = prompt("Wybierz kształt: 'trojkat' lub 'prostokat'");
  
if (option === 'trojkat') { 
    let a = parseInt(prompt("Wprowadź długość boku a:")); 
    let b = parseInt(prompt("Wprowadź długość boku b:")); 
    let c = parseInt(prompt("Wprowadź długość boku c:")); 
  
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) { 
        console.log("Obwód trójkąta wynosi: " + (a + b + c)); 
    } else { 
        console.log("Nie można obliczyć obwodu, ponieważ podano nieprawidłowe wartości."); 
    } 
  
} else if (option === 'prostokat') { 
    let a = parseInt(prompt("Wprowadź długość boku a:")); 
    let b = parseInt(prompt("Wprowadź długość boku b:")); 
  
    if (!isNaN(a) && !isNaN(b)) { 
        console.log("Obwód prostokąta wynosi: " + (2 * (a + b))); 
    } else { 
        console.log("Nie można obliczyć obwodu, ponieważ podano nieprawidłowe wartości."); 
    } 
  
} else { 
    console.log("Niepoprawny wybór. Wybierz 'trojkat' lub 'prostokat'."); 
} 
 