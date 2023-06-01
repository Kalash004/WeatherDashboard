const weatherApiKey = '83037af74791252875f34544e141853a';
let city;
let units;

$(document).ready(function () {
    // var apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=YOUR_LOCATION&days=5';
    // Check if user has saved city in local storage -> yes : set city from local storage; no : try to obtain data from database -> yes : get city from the db no : set city prague automatically
    city = getCity();
    units = getUnits();
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=${units}`;
    fetchForecast(apiUrl);
});

function fetchForecast(apiUrl) {
    $.get(apiUrl, function (data) {
        var forecastContainer = $('#forecast-container').addClass("container-fluid");
        var cityText = $('<h2>').text(`${city}:`);
        forecastContainer.append(cityText);
        // Group data by date
        let days = groupByDays(data);
        days.shift();
        console.log(days);
        days.forEach(element => {
            var forecastCard = createForecastCard(element, forecastContainer);
            forecastContainer.append(forecastCard);
        });
    });
}

function groupByDays(data) {
    let days = [];
    let dayData = []
    let lastPutDayDate;
    const length = data.list.length;
    for (var i = 0; i < length; i++) {
        // Group data by date
        let listItem = data.list[i];
        let date = listItem.dt_txt.split(" ")[0];
        if (i == length) {
            dayData.push(listItem);
            days.push(dayData);
        }
        else if (date != lastPutDayDate) {
            days.push(dayData);
            dayData = [];
            dayData.push(listItem);
            lastPutDayDate = date;
        }
        else if (date === lastPutDayDate) {
            dayData.push(listItem);
        }
    }
    return days;
}

function createForecastCard(day, forecastContainer) {
    var forecastDay = $('<div>').addClass('card mb-4 shadow');
    var forecastDate = $('<h2>').text(day[0].dt_txt.split(" ")[0]).addClass("ps-3 pt-3");
    var forecastCardBody = $('<div>').addClass('card-body d-flex row justify-content-evenly flex-wrap')
    forecastDay.append(forecastDate);
    day.forEach(element => {
        var wrapper = $('<div>').addClass('col flex-item min-width min-height');
        var forecastTime = element;
        var iconUrl = `https://openweathermap.org/img/wn/${forecastTime.weather[0].icon}.png`;
        var description = forecastTime.weather[0].description;
        var temperature = forecastTime.main.temp;
        var date = forecastTime.dt_txt.split(" ")[1];
        // Create forecast card
        var tempTime = date.split(":");
        var timeElement = $('<h3>').text(`${tempTime[0]}:${tempTime[1]}`);
        var iconElement = $('<img>').attr('src', iconUrl);
        var firstLetter = description.charAt(0);
        var tempString = firstLetter.toUpperCase() + description.slice(1);
        var tempTemperatureSignString;
        if (units.toLowerCase() == "metric") {
            tempTemperatureSignString = '°C';
        }
        else if (units.toLowerCase() == "imperial") {
            tempTemperatureSignString = '°F';
        } 
        else {
            tempTemperatureSignString = '°';
        }
        var descriptionElement = $('<p>').text(`Weather: ${tempString}`).addClass('card-text');
        var temperatureElement = $('<p>').text(`Temperature: ${temperature}${tempTemperatureSignString}`).addClass('card-text');
        wrapper.append(timeElement, iconElement, descriptionElement, temperatureElement)
        forecastCardBody.append(wrapper);
        forecastDay.append(forecastCardBody);
    });
    return forecastDay;
}

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

// TODO:
function dbHasCity() {
    return false;
}
// TODO:
function dbHasUnits() {
    return false;
}
