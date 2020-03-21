//Weather Summary

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=a2b01d01e08c21f4a1ca665e02edce67'

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