//------------------- Weather Summary -----------------------//

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=a2b01d01e08c21f4a1ca665e02edce67'

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

//------------------- Five Day Forecast -------------------------//
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


const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=a2b01d01e08c21f4a1ca665e02edce67'

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {;

    const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    for (let i = 0; i < fivedayforecast.length; i++) {
        document.getElementById(`forecastP${i+1}`).textContent = fivedayforecast[i].main.temp;
        const getIcon = fivedayforecast[i].weather[0].icon;
        const iconsrc = `https://openweathermap.org/img/w/${getIcon}.png`;
        const iconalt = fivedayforecast[i].weather[0].description;
        document.getElementById(`forecastImg${i+1}`).setAttribute('src', iconsrc);
        document.getElementById(`forecastImg${i+1}`).setAttribute('alt', iconalt);

    }

});


//------------------------------ Friday Message. ----------------------------//
let dayToday = new Date();
let dayOfWeek = dayToday.getDay();

if (dayOfWeek == 5){
    let message = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.getElementById("hiddenMessage").innerHTML = message;
    document.getElementById("hiddenMessage").style.backgroundColor = "#F7D660";
    document.getElementById("hiddenMessage").style.textAlign = "center";
    document.getElementById("hiddenMessage").style.padding = "0.8em";
    document.getElementById("hiddenMessage").style.fontFamily = "Roboto, sans-serif";
  }


//---------------------- Events ----------------------//

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const towns = jsonObject['towns'];

    for (let i = 0; i <towns.length; i++){
      if (towns[i].name == "Soda Springs"){ 
        getEvents(towns[i]);
      }
    }
      function getEvents(townD) {
        let eventsCard = document.createElement('div')
        let image = document.createElement('img');
        let title = document.createElement('h2');
        let eventsDates = document.createElement('div');
        let eventP1 = document.createElement('p');
        let eventP2 = document.createElement('p');
        let eventP3 = document.createElement('p');
        let line = document.createElement('hr');

        eventsCard.classList.add('eventsCard');
        image.classList.add('thinImg');
        title.classList.add('titleH2');
        eventsDates.classList.add('eventsDates');
        eventP1.classList.add('eventsP');
        eventP2.classList.add('eventsP');
        eventP3.classList.add('eventsP');
        line.classList.add('line');

        image.setAttribute('src', 'images/sodasprings2.jpg');
        image.setAttribute('alt', "sunset");
        title.textContent = "Upcoming Events:";
        eventP1.textContent = townD.events[0];
        eventP2.textContent = townD.events[1];
        eventP3.textContent = townD.events[2];


        eventsCard.appendChild(image);
        eventsCard.appendChild(title);
        eventsCard.appendChild(line);
        eventsDates.appendChild(eventP1);
        eventsDates.appendChild(eventP2);
        eventsDates.appendChild(eventP3);
        eventsCard.appendChild(eventsDates);

        document.querySelector('section.events').appendChild(eventsCard);

      }

    });