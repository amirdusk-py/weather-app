# 🌤 Weather App

A modern, responsive Weather Application built using HTML, CSS, and Vanilla JavaScript that fetches real-time weather data from the OpenWeatherMap API.

This project features dark mode support, local storage persistence, smooth animations, and clean UI design — making it both functional and visually appealing.
Example:

- ✨ Features
- 🌍 Search weather by city name
- 🌡 Displays real-time temperature (°C)
- ☁ Weather condition with dynamic icon
- 💧 Humidity information
- 🌬 Wind speed display
- 🌙 Dark / Light mode toggle
- 💾 Saves last searched city using localStorage
- ⏳ Loading spinner during API calls
- ❌ Error handling for invalid cities
- 📱 Fully responsive layout
🛠 Tech Stack
- HTML
- CSS (Flexbox, Gradients, Animations)
- JavaScript
- Fetch API
- OpenWeatherMap API

⚙️ How It Works
1- User enters a city name.
2- The app sends a request to: https://api.openweathermap.org/data/2.5/weather
3- Data is fetched asynchronously using fetch().
4- The UI updates dynamically with:
5- City name
6- Temperature
7- Weather description
8- Humidity
9- Wind speed
10- The last searched city is saved in localStorage.
11- Dark mode toggles by switching a CSS class on <body>.

/screenshots/light-mode.png
/screenshots/dark-mode.png

weather-app/
│
├── index.html      # Main structure
├── style.css       # UI styling and animations
├── app.js          # JavaScript logic and API handling
└── README.md       # Project documentation
