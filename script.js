const apiKey = '83037af74791252875f34544e141853a'; 
let city = ''; // Replace with the desired location

const weatherElement = document.getElementById('weather');


// Call the function initially
// Check if user has saved city in local storage -> yes : set city from local storage; no : try to obtain data from database -> yes : get city from the db no : set city prague automatically
getCity();
fetchWeatherData();

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
    xhr.onreadystatechange = function() {
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
            const temperature = data.main.temp;
            const condition = data.weather[0].description;
            weatherElement.innerHTML = `<p>Location: ${city}</p><p>Temperature: ${temperature}°C</p><p>Condition: ${condition}</p>`;
        })
        .catch(error => console.log(error));
};

// Call the function every 60 seconds
setInterval(fetchWeatherDataInterval, 60000); // 60 seconds interval