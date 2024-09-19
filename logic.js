

document.getElementById("information_system").addEventListener("input",function(){
    const text = this;
    const meter = document.getElementById("meter");
    const number_char = document.getElementById("is_number_of_characters");
    progressBarAtualizer(text,meter,number_char);
    console.log(text.value);
    console.log(meter.value);
    console.log(number_char);
})

function progressBarAtualizer(textElement,meterElement,number_charElement){
    if((textElement !== null) && (meterElement!== null) && (number_charElement !== null)){
            updateTheMeter(textElement,meterElement,number_charElement)     
    }
    console.log("segunda")
    
}


function updateTheMeter(textElement,meterElement,number_charElement){ 
    var corrent_number_char = textElement.value.lenght;
    var max_number = meterElement.getAtribute("max");
    console.log("tretas");
    if(corrent_number_char>max_number){ 
        textElement.value = textElement.value.substring(0, max_number);
        corrent_number_char=max_number;
    }
    meterElement.value = corrent_number_char;
    number_charElement.innerText = "" + corrent_number_char + "/" + max_number; 
    console.log("terceir")
}