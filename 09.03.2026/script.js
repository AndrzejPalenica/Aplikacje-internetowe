let btn = document.getElementById("btn");
let check_info = document.getElementById("check_info");
let valid = true;
btn.addEventListener("click", function(){
    let login = document.getElementById("login");
    let pin = document.getElementById("pin");
    let haslo = document.getElementById("haslo");

    valid = true;

    if(login.value == ""){
        document.getElementById("login_alert").innerText = "Puste pole!!!";
        document.getElementById("login_alert").style.visibility = "visible";
        valid = false;
    }
    else{
        document.getElementById("login_alert").style.visibility = "hidden";
    }

    if(pin.value == ""){
        document.getElementById("pin_alert").innerText = "Puste pole!!!";
        document.getElementById("pin_alert").style.visibility = "visible";
        valid = false;
    }
    else if(pin.value.length != 4){
        document.getElementById("pin_alert").innerText = "PIN musi miec 4 znaki!!!";
        document.getElementById("pin_alert").style.visibility = "visible";
        valid = false;
    }
    else{
        document.getElementById("pin_alert").style.visibility = "hidden";
    }

    if(haslo.value == ""){
        document.getElementById("haslo_alert").innerText = "Puste pole!!!";
        document.getElementById("haslo_alert").style.visibility = "visible";
        valid = false;
    }
    else if(haslo.value.charAt(haslo.value.length - 1) != "*"){
        document.getElementById("haslo_alert").innerText = "HASŁO musi kończyć znakiem *";
        document.getElementById("haslo_alert").style.visibility = "visible";
        valid = false;
    }
    else{
        document.getElementById("haslo_alert").style.visibility = "hidden";
    }
    // alert(login.value);
    if(valid){
        check_info.innerText = "POPRAWNE";
        check_info.style.color = "green";
    }
    else{
        check_info.innerText = " NIE POPRAWNE";
        check_info.style.color = "red";
    }
});


 