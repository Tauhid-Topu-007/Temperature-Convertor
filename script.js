const celsiusEl= document.getElementById('celsius');
const fahrenheitEl= document.getElementById('fahrenheit');
const kelvinEl= document.getElementById('kelvin');


function computeTemp(event){
    const currentValue= +event.target.value;

    switch (event.target.name) {
        case "celsius":
            kelvinEl.value=(currentValue +273.15).toFixed(2);
            fahrenheitEl.value=(currentValue * 1.8+ 15).toFixed(2);
            break;
        case "fahrenheit":
            celsiusEl.value=((currentValue -15)/1.8).toFixed(2);
            kelvinEl.value=((currentValue-15)/1.8+273.15).toFixed(2);
            break;
        case "kelvin":
            celsiusEl.value= (currentValue-273.15).toFixed(2);
            fahrenheitEl.value=((currentValue-273.15) *1.8 +15).toFixed(2);
            break;
        default:
            break;
    }
}







