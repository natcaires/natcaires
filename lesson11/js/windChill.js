//WindChill

window.onload = calculateWindChill;

function calculateWindChill() {
    let currentTemp = document.getElementById('currentTemp').innerHTML;
    let temp = Number(currentTemp);

    let windS = document.getElementById('windSpeed').innerHTML;
    let wind = Number(windS);

    if(temp <= 50 && wind > 3) {
        let windChill = 35.74 + (0.6215 * temp) - (35.75 * wind**0.16) + (0.4275 * temp * wind**0.16);
        document.getElementById('windChill').innerHTML = Math.round(windChill) + "°F";
    }

    else {
        document.getElementById('windChill').innerHTML = "N/A";
    }
}