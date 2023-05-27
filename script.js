const apiKey = '83037af74791252875f34544e141853a'; // Replace with your OpenWeatherMap API key
const city = 'London'; // Replace with the desired location

const weatherElement = document.getElementById('weather');

// Function to fetch weather data from the API
const fetchWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const condition = data.weather[0].description;
            weatherElement.innerHTML = `<p>Location: ${city}</p><p>Temperature: ${temperature}°C</p><p>Condition: ${condition}</p>`;
        })
        .catch(error => console.log(error));
};

// Call the function initially
fetchWeatherData();

// Function to fetch weather data at an interval
const fetchWeatherDataInterval = () => {
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

// Call the function every 60 seconds
setInterval(fetchWeatherDataInterval, 60000); // 60 seconds interval