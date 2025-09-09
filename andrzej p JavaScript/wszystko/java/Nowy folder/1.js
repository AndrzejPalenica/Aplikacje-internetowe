//let a = parseInt(prompt("Wprowadź wartość liczbową"));
//let b = parseInt(prompt("Wprowadź wartość liczbową"));
//let c = parseInt(prompt("Wprowadź wartość liczbową"));
//
//if((a != NaN  && b != NaN) && c != NaN) {
//    console.log("Obwód trójkąta wynosi: " + (a + b + c));
//}
//else {
  //  console.log("Nie można obliczyć obwodu.");
//}

//let option = parseInt(prompt("Wybierz wartość\n1, 2, 3 lub 4"));

//switch(option) {
//    case 1:
//        console.log("Wybrana wartość 1");
//        break;
//    case 2:
//        console.log("Wybrana wartość 2");
//        break;
//    case 3:
//        console.log("Wybrana wartość 3");
//    case 4:
//        console.log("Wybrana wartość 4");
//        break;
//    default:
//        console.log("Błędna wartość " + option);
//}

let option = parseInt(prompt("Wybierz\ prostokąt, trójkąt"));
switch(option) {
    case "prostokąt":
        let a = parseInt(prompt("Wprowadź wartość liczbową"));
        let b = parseInt(prompt("Wprowadź wartość liczbową"));
        if(a != NaN  && b != NaN) {
            console.log("Obwód prostokąta wynosi ") + (2*a + 2*b);
          }
          else {
              console.log("Nie można obliczyć obwodu");
          }
    case "trójkąt":
        let c = parseInt(prompt("Wprowadź wartość liczbową"));
        let d = parseInt(prompt("Wprowadź wartość liczbową"));
        let e = parseInt(prompt("Wprowadź wartość liczbową"));
       if((c != NaN  && d != NaN) && e != NaN) {
       console.log("Obwód trójkąta wynosi: " + (c + d + e));
       }
       else {
       console.log("Nie można obliczyć obwodu.");
       }
}