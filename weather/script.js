document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('search-box').value;
    fetchWeatherData(city);
});

function fetchWeatherData(city) {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        updateWeatherDisplay(data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

function updateWeatherDisplay(data) {
    // Update the UI with weather data
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
    // Add more elements as needed
}
