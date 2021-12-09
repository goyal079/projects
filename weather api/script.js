let loc = document.getElementById("location");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// let url = `https://api.openweathermap.org/data/2.5/weather?q=surat&appid=a426dd50b8b4887bd4328c35f555359f`;
// fetch(url)
//   .then((res) => res.json())
//   .then((res) => (loc.innerText = res.base));

let day = document.getElementById("day");
let time = document.getElementById("time");
let today = new Date();
let hours = today.getHours();
console.log(hours);
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
