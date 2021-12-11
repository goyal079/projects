const loc = document.getElementById("location");
const mainTemp = document.getElementById("prime-temp");
const min = document.getElementById("min");
const max = document.getElementById("max");
const feelsLike = document.getElementById("temp-like");
const humidity = document.getElementById("humid");
const windSpeed = document.getElementById("wind");
const visibility = document.getElementById("visible");
const city = document.getElementById("city");
const modal = document.getElementById("modal");
const btn = document.getElementById("btn");
const search = document.getElementById("search");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function changeWeather(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a426dd50b8b4887bd4328c35f555359f`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let temp = Math.round(data.main.temp);
      let minTemp = Math.floor(data.main.temp_min);
      let maxTemp = Math.ceil(data.main.temp_min);
      let tempLike = Math.round(data.main.feels_like);
      mainTemp.innerHTML = `${temp}&#176;`;
      min.innerHTML = `${minTemp}&#176;`;
      max.innerHTML = `${maxTemp}&#176;`;
      feelsLike.innerHTML = `${tempLike}&#176;`;
      return data;
    })
    .then((data) => {
      let humid = data.main.humidity;
      humidity.innerText = humid + "%";
      return data;
    })
    .then((data) => {
      let wind = data.wind.speed;
      windSpeed.innerText = wind + "km/h";
      return data;
    })
    .then((data) => {
      let visible = data.visibility / 1000;
      console.log(visible);
      visibility.innerText = visible + "km";
    });
}
search.addEventListener("click", () => {
  modal.style.display = "block";
});
city.addEventListener("input", (e) => {
  btn.addEventListener("click", () => {
    let cityName = city.value;
    loc.innerText = cityName;
    modal.style.display = "none";
    changeWeather(cityName);
  });
});
// Day & Time of the day
let day = document.getElementById("day");
let time = document.getElementById("time");
let today = new Date();
let hours = today.getHours();
today = weekday[today.getDay()];
today = today.toUpperCase();
day.innerText = today;
function hourSwitch(hour) {
  switch (true) {
    case hour > 4 && hour < 12:
      time.innerText = "MORNING";
      break;
    case hour > 12 && hour < 18:
      time.innerText = "NOON";
      break;
    case hour > 18 && hour < 21:
      time.innerText = "EVENING";
      break;
    case hour > 21 || hour < 4:
      time.innerText = "NIGHT";
  }
}
hourSwitch(hours);
