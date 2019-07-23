let input = document.getElementById("password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");
let special = document.getElementById("special");

input.onfocus = () => {
    document.getElementById("message").style.display = "block";
}

input.onblur = function() {
    document.getElementById("message").style.display = "none";
}

input.onkeyup = () => {
    let lowercase = /[a-z]/g;
    if(input.value.match(lowercase)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } 
    else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    let uppercase = /[A-Z]/g;
    if(input.value.match(uppercase)){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } 
    else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    let numbers = /[0-9]/g;
    if(input.value.match(numbers)){
        number.classList.remove("invalid");
        number.classList.add("valid");
    } 
    else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    let len = input.value.length;
    if(len > 8){
        length.classList.remove("invalid");
        length.classList.add("valid");
    } 
    else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    let specialCharacter = /[!@#$%^&*(),.?":{}|<>]/g;
    if(input.value.match(specialCharacter)){
        special.classList.remove("invalid");
        special.classList.add("valid");
    } 
    else {
        special.classList.remove("valid");
        special.classList.add("invalid");
    }
}