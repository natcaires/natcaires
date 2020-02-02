//Toggle Menu function.
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


//Copyright Year
let year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;


//Current Date
let today = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
let currentWeekday = days[today.getDay()]; 

let date = today.getDate(); 

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 

let currentMonth = months[today.getMonth()]; 

let currentYear = today.getFullYear(); 

document.getElementById("todaysDate").innerHTML = currentWeekday + ", " + date + " " + currentMonth + " " + currentYear;