//------------------- Weather Summary -----------------------//

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5600363&units=imperial&APPID=a2b01d01e08c21f4a1ca665e02edce67'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const maxTemp = document.querySelector('#highF');
    const humidity = document.querySelector('#humidity');
    const windSpeed = document.querySelector('#windSpeed');
    const currently = document.querySelector('#currently');
    const currentTemp = document.querySelector('#currentTemp');

    maxTemp.textContent = jsObject.main.temp_max;
    humidity.textContent = jsObject.main.humidity;
    windSpeed.textContent = jsObject.wind.speed;
    currently.textContent = jsObject.weather[0].description;
    currentTemp.textContent = jsObject.main.temp;
});

//----------------------- WindChill ----------------------//

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