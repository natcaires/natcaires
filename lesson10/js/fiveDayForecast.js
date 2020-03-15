let currentDay = new Date();
let currentDate = currentDay.getDay();
let lastDay = currentDate + 5;

for (let i = currentDate; i < lastDay; i++) {
    let nextDate = i % 7;
    let nextDay = days[nextDate];
    let t = i - currentDate;
    let d = document.getElementsByClassName("forecastH3");
    d[t].innerHTML = nextDay;
}


const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=a2b01d01e08c21f4a1ca665e02edce67'

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(fivedayforecast);
    for (let i = 0; i < fivedayforecast.length; i++) {
        document.getElementById(`forecastP${i+1}`).textContent = fivedayforecast[i].main.temp;
        const getIcon = fivedayforecast[i].weather[0].icon;
        const iconsrc = `https://openweathermap.org/img/w/${getIcon}.png`;
        const iconalt = fivedayforecast[i].weather[0].description;
        document.getElementById(`forecastImg${i+1}`).setAttribute('src', iconsrc);
        document.getElementById(`forecastImg${i+1}`).setAttribute('alt', iconalt);

    }

});