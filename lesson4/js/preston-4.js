function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}








let year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;

let date = document.lastModified;
document.getElementById('lastUpdate').innerHTML = "Last Updated: " + date;