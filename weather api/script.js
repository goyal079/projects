import axios from "axios";

var data;
var temp;
axios
  .get(
    "https://api.openweathermap.org/data/2.5/weather?q=Surat&units=metric&appid=a426dd50b8b4887bd4328c35f555359f"
  )
  .then((res) => {
    data = res.data.coord;
    temp = res.data.main.temp;
    console.log(data, temp);
  })
  .then(() => {
    console.log(3, data);
  });