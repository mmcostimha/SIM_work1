
document.getElementById("information_system").addEventListener("input",function(){
    const text = this;
    const meter = document.getElementById("meter");
    const number_char = document.getElementById("show_number");
    progressBarAtualizer(text,meter,number_char);
    
})
document.getElementById("information_system2").addEventListener("input",function(){
    const text = this;
    const meter = document.getElementById("meter2");
    const number_char = document.getElementById("show_number2");
    progressBarAtualizer(text,meter,number_char);
    
})

function progressBarAtualizer(textElement,meterElement,number_charElement){
    if((textElement !== null) && (meterElement!== null) && (number_charElement!== null)){
        updateTheMeter(textElement,meterElement,number_charElement)     
    }
    
}


function updateTheMeter(textElement,meterElement,number_charElement){ 
    var corrent_number_char = textElement.value.length;
    var max_number = meterElement.max;
    
    if(corrent_number_char>max_number){ 
        textElement.value = textElement.value.substring(0, max_number);
        corrent_number_char=max_number;
    }
    meterElement.value = corrent_number_char;
    number_charElement.innerText = "" + corrent_number_char + "/" + max_number; 
}
