function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;

    celciusTemperature = response.data.main.temp;
}

function search(event) {
  event.preventDefault();
  let apiKey = "71a4964c7ee22b4c5388c68428654d7e";
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function displayFahenreheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    celsiusLink.classList.remove("active");
    fahenreheitLink.classList.add("active");
    let fahrenheitTemperature = (celsiusTemperature.innerHTML * 9) / 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}
function displayCelsiusTemperature(event) {
    event.preventDefault();
    celsiusLink.classList.remove("active");
    fahenreheitLink.classList.add("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
    let celsiusTemperature = null;


let dateELement = document.querySelector("#date");
let currentTime = new Date();

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

dateELement.innerHTML = formatDate(currentTime);

let iconElement = document.querySelector("#icon");
iconElement.setAttribute(
  "src",
  "http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"
);

Let FahrenheitLink=document.querySelector("#fahrenheit-link");
FahrenheitLink.addEventListener("click", displayFahenreheitTemperature)

Let CelsiusLink=document.querySelector("#celcius-link");
CelsiusLink.addEventListener("click", displayCelsiusTemperature)
