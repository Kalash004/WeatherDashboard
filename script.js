const apiKey = '83037af74791252875f34544e141853a';
let city = ''; // Replace with the desired location

const weatherElement = document.getElementById('weather');

$(document).ready(function () {
    // var apiUrl = 'https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=YOUR_LOCATION&days=5';
    // Check if user has saved city in local storage -> yes : set city from local storage; no : try to obtain data from database -> yes : get city from the db no : set city prague automatically
    getCity();
    fetchWeatherData();
});



// Function to fetch weather data at an interval
function fetchWeatherDataInterval() {
    // Check if the previous API call has completed
    if (!fetchWeatherDataInterval.isCallingAPI) {
        // Set the flag to prevent concurrent API calls
        fetchWeatherDataInterval.isCallingAPI = true;

        // Call the API
        fetchWeatherData();

        // Reset the flag after a delay
        setTimeout(() => {
            fetchWeatherDataInterval.isCallingAPI = false;
        }, 60000); // 60 seconds delay
    }
};

// Function to make an AJAX request
function fetchDataFromServer() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'api.php', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            // Process the response data
            console.log(response);
        }
    };

    xhr.send();
}

function dbHasCity() {
    return false;
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

// Function to fetch weather data from the API
function fetchWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod == 401) {
                console.log(`An error with fetching data from an api, most likely you didnt spell the name of the city right way : ${city}`)
            }
            const temperature = data.main.temp;
            const condition = data.weather[0].description;
            const countryCode = data.sys.country;
            const iconCode = data.weather[0].icon;
            weatherElement.innerHTML = `<p>Location: ${city}</p><p>County: ${countryCode}</p><p>Temperature: ${temperature}°C</p><p>Condition: ${condition}</p><img src=${obtainIconFromWeather(iconCode)}></img>`;
        })
        .catch(error => console.log(`An error with fetching data from an api, most likely you didnt spell the name of the city right way : ${city}`));
};

function obtainIconFromWeather(iconId) {
    return `https://openweathermap.org/img/wn/${iconId}.png`;
}
// Call the function every 60 seconds
setInterval(fetchWeatherDataInterval, 60000); // 60 seconds interval