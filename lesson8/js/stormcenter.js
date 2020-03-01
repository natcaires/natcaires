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



//Storm severity range

function stormSeverity(range) {
    document.getElementById("stormS").innerHTML = range;
}