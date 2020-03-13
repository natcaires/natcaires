












//WindChill

window.onload = calculateWindChill;

function calculateWindChill() {
    let highF = document.getElementById('highF').innerHTML;
    let high = Number(highF);

    let windS = document.getElementById('windSpeed').innerHTML;
    let wind = Number(windS);

    if(high <= 50 && wind > 3) {
        let windChill = 35.74 + (0.6215 * high) - (35.75 * wind**0.16) + (0.4275 * high * wind**0.16);
        document.getElementById('windChill').innerHTML = Math.round(windChill);
    }

    else {
        document.getElementById('windChill').innerHTML = "N/A";
    }
}