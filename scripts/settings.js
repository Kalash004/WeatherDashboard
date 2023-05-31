var city;
var units;

$(document).ready(function () {
    // get data from settings or local storage
    city = getCity();
    units = getUnits();
    $("#cityInput").val(city);
    $("#unitsInput").val(units);
});

function getCity() {
    // Check if user has saved city in local storage -> yes : set city from local storage; no : try to obtain data from database -> yes : get city from the db no : set city prague automatically
    var city;
    if (localStorage.getItem('city') != null) {
        city = localStorage.getItem('city');
        return city; 
    }
    if (dbHasCity()) {
        city = getCityFromDb();
        return city;
    }
    city = 'Prague';
    return city;
}

function dbHasCity() {
    return false;
}

function getUnits() {
    var units;
    if (localStorage.getItem('units') != null) {
        units = localStorage.getItem('units');
        return units;
    }
    if (dbHasUnits()) {
        // might do this function
        units = getCityFromDb();
        return units;
    }
    units = 'metric';
    return units;
}

function dbHasUnits() {
    return false;
}

document.getElementById("settingsForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Get the city input value
    var city = document.getElementById("cityInput").value;
    var units = document.getElementById("unitsInput").value;
    // Save the city into local storage
    localStorage.setItem("city", city);
    localStorage.setItem("units", units);
    // Redirect to the home page
    window.location.href = "/";
});
