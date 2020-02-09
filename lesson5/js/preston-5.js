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