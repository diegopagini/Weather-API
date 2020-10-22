// API
const API = "https://api.weatherbit.io/v2.0/current";
const KEY = "?key=f3acb947fe9a4601aaca23a79e0e7bb4";
let CP = "&postal_code=${postalCode}";
// fetch(`${API}${KEY}${CP}`) esto asi no anduvo

let postalCode = 7600;
getCurrentWeather(postalCode);

let cold = "./assets/weather-icons/001-thermometer.png";
let normal = "./assets/weather-icons/012-sun.png";
let hot = "./assets/weather-icons/026-thermometer.png";

function getCurrentWeather(postalCode) {
  dataEndpoint = fetch(
    `https://api.weatherbit.io/v2.0/current?key=f3acb947fe9a4601aaca23a79e0e7bb4&postal_code=${postalCode}`
  )
    .then((response) => response.json())
    .then((dataWeather) => {
      let currenDataTime = dataWeather.data;
      console.log(currenDataTime);

      let wind = currenDataTime[0].wind_spd.toFixed(2);
      let temp = currenDataTime[0].temp;
      //Puedo hacer esto mismo dentro de los `` ?


      //Imprimo el nombre de la ciudad
      document.getElementById("city-name").innerHTML =
        currenDataTime[0].city_name;

      //Imprimo la fecha de la ciudad
      document.getElementById(
        "date"
      ).innerHTML = `HOY: ${currenDataTime[0].ob_time}`;

      //Imprimo el clima, y la idea es que si el clima tiene una determinada temperatura, me muestre un icono diferente.
      document.getElementById("temp").innerHTML = `${temp} °`;
      if (temp <= 10) {
        document.getElementById("weather-icon").innerHTML = `<img src=${cold}>`;
      } else if (temp > 10 && temp <= 20) {
        document.getElementById(
          "weather-icon"
        ).innerHTML = `<img src=${normal}>`;
      } else {
        document.getElementById("weather-icon").innerHTML = `<img src=${hot}>`;
      }

      //Imprimo la velocidad del viendo, y la direccion.
      document.getElementById(
        "wind"
      ).innerHTML = `Viento ${wind} Km/h del ${currenDataTime[0].wind_cdir_full}`;

      //Imprimo la humedad
      document.getElementById(
        "rh"
      ).innerHTML = `Humedad del ${currenDataTime[0].rh} %`;
    });
}


document.getElementById("getWeather").addEventListener("click", function () {
  postalCode = document.getElementById("cp").value;
  getCurrentWeather(postalCode);
});