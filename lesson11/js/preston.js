//Friday Message.
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


//Toggle Menu function.
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


//Current Date
let today = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
let currentWeekday = days[today.getDay()]; 

let date = today.getDate(); 

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

let currentMonth = months[today.getMonth()]; 

let currentYear = today.getFullYear(); 

document.getElementById("todaysDate").innerHTML = currentWeekday + ", " + date + " " + currentMonth + " " + currentYear;

//Events

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const towns = jsonObject['towns'];

    for (let i = 0; i <towns.length; i++){
      if (towns[i].name == "Preston"){ 
        getEvents(towns[i]);
      }
    }
      function getEvents(townD) {
        let eventsCard = document.createElement('div')
        let image = document.createElement('img');
        let title = document.createElement('h2');
        let eventsDates = document.createElement('div');
        let eventP = document.createElement('p');

        eventsCard.classList.add('eventsCard');
        image.classList.add('thinImg');
        title.classList.add('titleH2');
        eventsDates.classList.add('eventsDates');
        eventP.classList.add('eventsP')

        image.setAttribute('src', 'images/preston2.jpeg');
        image.setAttribute('alt', "sunset");
        title.textContent = "Upcoming Events:";
        eventP.textContent = townD.events;

        eventsCard.appendChild(image);
        eventsCard.appendChild(title);
        eventsDates.appendChild(eventP)
        eventsCard.appendChild(eventsDates);

        document.querySelector('section.events').appendChild(eventsCard);

      }

    });