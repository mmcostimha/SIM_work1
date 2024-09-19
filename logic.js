var text = document.getElementById("information_system");
var meter = document.getElementById("meter");
var number_char = document.getElementById("is_numebre_of_characters")
console.log("tretas")
if((text !== null) && (meter!== null) && (number_char !== null)){
    text.addEventListener("keyup", (e)=>{ 
        updateTheMeter(text,meter,number_char)
    });
    
}

function updateTheMeter(textElement,meterElement,number_charElement){ 
    var corrent_number_char = textElement.valeu.lenght;
    var max_number = meterElement.getAtribute("max");
    if(corrent_number_char>max_number){ 
        textElement.valeu = textElement.valeu.substring(0, max_number);
        corrent_number_char=max_number;
    }
    meterElement.valeu = corrent_number_char;
    number_charElement.innerText = "" + corrent_number_char + "/" + max_number; 
}