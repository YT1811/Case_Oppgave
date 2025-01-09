// Weather object to store generated data
let weather = {
    temperature: 0,
    condition: "",
    cloudCoverage: 0,
  };
  
  // Constants for weather conditions and corresponding images
  const WEATHER_CONDITIONS = ["Clear", "Rain", "Snow"];
  const WEATHER_IMAGES = {
    Clear: "https://png.pngtree.com/thumb_back/fh260/background/20201009/pngtree-clear-blue-sky-with-white-clouds-panoramic-view-of-bright-clear-image_403142.jpg",
    Rain: "https://png.pngtree.com/thumb_back/fh260/background/20220215/pngtree-storm-and-lightning-background-image_923365.jpg",
    Snow: "https://img.freepik.com/free-photo/3d-snowy-winter-landscape_1048-11056.jpg"
  };
  
  // Function to generate random weather data
  function generateWeather() {
    // Generate a random temperature between -20°C and 40°C
    weather.temperature = Math.floor(Math.random() * 61) - 20;
  
    // Determine the weather condition based on temperature
    if (weather.temperature >= 1) {
      // If temperature is 1°C or higher, it can be Clear or Rain
      weather.condition = Math.random() > 0.5 ? "Clear" : "Rain";
    } else if (weather.temperature <= 0) {
      // If temperature is 0°C or lower, it can be Clear or Snow
      weather.condition = Math.random() > 0.5 ? "Clear" : "Snow";
    }
  
    // Random cloudiness between 0 and 100
    weather.cloudCoverage = Math.floor(Math.random() * 101);
  }
  
  // Function to update the weather display
  function updateWeatherDisplay() {
    const tempElement = document.getElementById("temperature");
    const conditionElement = document.getElementById("condition");
    const cloudinessElement = document.getElementById("cloudiness");
    const warningElement = document.getElementById("warning");
    const weatherImage = document.getElementById("weather-image");
    const headline = document.getElementById("weather-headline");
    const weatherDisplay = document.getElementById("weather-display"); 
  
    // Update the weather information
    tempElement.innerText = `Temperature: ${weather.temperature}°C`;
    conditionElement.innerText = `Condition: ${weather.condition}`;
    cloudinessElement.innerText = `Cloudiness: ${weather.cloudCoverage}%`;
  
    // Set the weather image based on the current condition
    weatherImage.src = WEATHER_IMAGES[weather.condition] || "images/default.png"; 
  
    // Add weather conditions to the weather container
    weatherDisplay.classList.remove("weather-clear", "weather-rain", "weather-snow");
    if (weather.condition === "Clear") {
      weatherDisplay.classList.add("weather-clear");
    } else if (weather.condition === "Rain") {
      weatherDisplay.classList.add("weather-rain");
    } else if (weather.condition === "Snow") {
      weatherDisplay.classList.add("weather-snow");
    }
  
    // Show the warning only if it's snowing and the temperature is below -10°C
    if (weather.condition === "Snow" && weather.temperature < -10) {
      warningElement.innerText = "Do not go outside!";
      warningElement.style.display = "block"; // Show the warning
    } else {
      warningElement.style.display = "none"; // Hide the warning if not snowing or above -10°C
    }
  }
  
  // Launch the app
  generateWeather();
  updateWeatherDisplay();
  
  // Refresh the weather every 3 minutes
  setInterval(() => {
    generateWeather();
    updateWeatherDisplay();
    console.log("Weather updated!");
  }, 180000);
