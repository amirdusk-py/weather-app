const apiKey = "a84f31e07a48b162dee35c58068c4cf8"; // <-- Use your own Code For better results

// DOM elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");
const loader = document.getElementById("loader");
const errorDiv = document.getElementById("error");
const toggleBtn = document.getElementById("toggleMode");

// Dark mode toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
});

// Load last city from localStorage
let lastCity = localStorage.getItem("lastCity");
if(lastCity) fetchWeather(lastCity);

// Enter key support
cityInput.addEventListener("keypress", (e) => {
  if(e.key === "Enter") fetchWeather(cityInput.value);
});

// Button click
searchBtn.addEventListener("click", () => fetchWeather(cityInput.value));

// Fetch weather function
async function fetchWeather(city){
  if(!city.trim()) return;

  showLoader(true);
  showError("");
  weatherResult.innerHTML = "";

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=en`);
    const data = await res.json();

    if(!res.ok || data.cod !== 200) throw new Error(data.message || "City not found");

    displayWeather(data);
    localStorage.setItem("lastCity", city);
  } catch(err) {
    showError(err.message);
  } finally {
    showLoader(false);
  }
}

// Display weather function
function displayWeather(data){
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherResult.innerHTML = `
    <div class="weather-card">
      <h3>${data.name}</h3>
      <img src="${iconUrl}" alt="${data.weather[0].description}" />
      <p>🌡 Temperature: ${data.main.temp} °C</p>
      <p>☁ Condition: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
    </div>
  `;
}

// Loader toggle
function showLoader(state){
  loader.style.display = state ? "block" : "none";
}

// Show error
function showError(msg){
  errorDiv.textContent = msg;
}