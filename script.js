"use strict";

document.addEventListener("DOMContentLoaded", () => {
  init();
});

function init() {
  console.log("App initialized");
}

const weatherData = [
  {
    city: "Manila",
    country: "PH",
    temperature: 31,
    weather: "Clear",
    description: "Sunny",
    humidity: 72,
    windSpeed: 5.2,
    icon: "☀️"
  },
  {
    city: "Tokyo",
    country: "JP",
    temperature: 27,
    weather: "Clouds",
    description: "Broken Clouds",
    humidity: 68,
    windSpeed: 3.8,
    icon: "☁️"
  },
  {
    city: "London",
    country: "GB",
    temperature: 18,
    weather: "Rain",
    description: "Light Rain",
    humidity: 91,
    windSpeed: 6.1,
    icon: "🌧️"
  },
  {
    city: "New York",
    country: "US",
    temperature: 29,
    weather: "Clear",
    description: "Clear Sky",
    humidity: 61,
    windSpeed: 4.4,
    icon: "☀️"
  },
  {
    city: "Sydney",
    country: "AU",
    temperature: 21,
    weather: "Wind",
    description: "Windy",
    humidity: 58,
    windSpeed: 10.7,
    icon: "💨"
  },
  {
    city: "Toronto",
    country: "CA",
    temperature: 16,
    weather: "Clouds",
    description: "Overcast",
    humidity: 79,
    windSpeed: 5.0,
    icon: "☁️"
  },
  {
    city: "Seoul",
    country: "KR",
    temperature: 26,
    weather: "Rain",
    description: "Moderate Rain",
    humidity: 84,
    windSpeed: 7.3,
    icon: "🌧️"
  },
  {
    city: "Bangkok",
    country: "TH",
    temperature: 34,
    weather: "Thunderstorm",
    description: "Thunderstorm",
    humidity: 80,
    windSpeed: 8.5,
    icon: "⛈️"
  },
  {
    city: "Singapore",
    country: "SG",
    temperature: 32,
    weather: "Clear",
    description: "Sunny",
    humidity: 77,
    windSpeed: 3.9,
    icon: "☀️"
  },
  {
    city: "Paris",
    country: "FR",
    temperature: 23,
    weather: "Clouds",
    description: "Scattered Clouds",
    humidity: 65,
    windSpeed: 4.8,
    icon: "🌤️"
  },
  {
    city: "Moscow",
    country: "RU",
    temperature: 12,
    weather: "Snow",
    description: "Light Snow",
    humidity: 88,
    windSpeed: 5.9,
    icon: "❄️"
  },
  {
    city: "Dubai",
    country: "AE",
    temperature: 41,
    weather: "Clear",
    description: "Hot",
    humidity: 29,
    windSpeed: 2.5,
    icon: "🌞"
  },
  {
    city: "Rio de Janeiro",
    country: "BR",
    temperature: 30,
    weather: "Rain",
    description: "Passing Showers",
    humidity: 82,
    windSpeed: 6.0,
    icon: "🌦️"
  },
  {
    city: "Cape Town",
    country: "ZA",
    temperature: 20,
    weather: "Clouds",
    description: "Mostly Cloudy",
    humidity: 71,
    windSpeed: 4.6,
    icon: "☁️"
  },
  {
    city: "Reykjavik",
    country: "IS",
    temperature: 8,
    weather: "Snow",
    description: "Snow Showers",
    humidity: 93,
    windSpeed: 11.4,
    icon: "🌨️"
  }
];
const weatherCardContainer = document.querySelector(".weather-card-container");

weatherData.forEach((weather) => {
  weatherCardContainer.innerHTML +=
    `<div class="weather-card">
    <h1>${weather.city}</h1>
    <h2>${weather.country}</h2>
    <div>
      <div>
        <span>${weather.temperature}</span>
        <span>${weather.icon}</span>
      </div>
      <div>
        <span>${weather.weather}</span>
      </div>
    </div>
    <p>${weather.description}</p>
  </div>
  `
})