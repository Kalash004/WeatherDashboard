const apiKey = '83037af74791252875f34544e141853a';
let city = '';
const showDays = 3;

$(document).ready(function () {
    // var apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=YOUR_LOCATION&days=5';
    // Check if user has saved city in local storage -> yes : set city from local storage; no : try to obtain data from database -> yes : get city from the db no : set city prague automatically
    getCity();
    var apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${showDays}`;
    fetchForecast(apiUrl);
});

function fetchForecast(apiUrl) {
    $.get(apiUrl, function (data) {
        var forecastContainer = $('#forecast-container');
        // Iterate over each forecast day
        for (var i = 0; i < data.forecast.forecastday.length; i++) {
            var forecastCard = createForecastCard(data);
            forecastContainer.append(forecastCard);
        }
    });
}

function createForecastCard(data) {
    var forecastDay = data.forecast.forecastday[i];
    var date = forecastDay.date;
    var iconUrl = forecastDay.day.condition.icon;
    var description = forecastDay.day.condition.text;
    var temperature = forecastDay.day.avgtemp_c;

    // Create forecast card
    var forecastCard = $('<div>').addClass('forecast-card');
    var dateElement = $('<h2>').text(date);
    var iconElement = $('<img>').attr('src', iconUrl);
    var descriptionElement = $('<p>').text(description);
    var temperatureElement = $('<p>').text('Temperature: ' + temperature + '°C');
    forecastCard.append(dateElement, iconElement, descriptionElement, temperatureElement);
    forecastContainer.append(forecastCard);
    return forecastCard;
}

function getCity() {
    // Check if user has saved city in local storage -> yes : set city from local storage; no : try to obtain data from database -> yes : get city from the db no : set city prague automatically
    if (localStorage.getItem('city') != null) {
        city = localStorage.getItem('city');
        return;
    }
    if (dbHasCity()) {
        city = getCityFromDb();
        return;
    }
    city = 'Prague';
    return;
}
