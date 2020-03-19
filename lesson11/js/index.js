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




//Page content coming from JSON file

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) { 
    const towns = jsonObject['towns'];

    for (let i = 0; i <towns.length; i++){
      if (towns[i].name == "Fish Haven"|| towns[i].name == "Preston" || towns[i].name == "Soda Springs"){ 
        townCard(towns[i]);
      }
    }
      function townCard(townD) {
        let card = document.createElement('div');
        let content = document.createElement('div');
        let town = document.createElement('h2');
        let motto = document.createElement('h3');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image = document.createElement('img');

        card.classList.add('town-card');
        content.classList.add('content');

        town.textContent = townD.name;
        motto.textContent = townD.motto;
        yearFounded.textContent = "Year Founded: " + townD.yearFounded;
        population.textContent = "Population: " + townD.currentPopulation;
        rainfall.textContent = "Annual Rain Fall: " + townD.averageRainfall;
        image.setAttribute('src', 'images/'+townD.photo);
        image.setAttribute('alt', (townD.name));

        content.appendChild(town);
        content.appendChild(motto);
        content.appendChild(yearFounded);
        content.appendChild(population);
        content.appendChild(rainfall);
        card.appendChild(content);
        card.appendChild(image);

        document.querySelector('section.town').appendChild(card);
      
      }

  });