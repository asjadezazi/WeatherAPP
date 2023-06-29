var inputValue = document.getElementById("inputValue");
let btn = document.getElementById("btn");
let nameCity = document.getElementById("nameCity");
let weather = document.getElementById("weather");
let desc = document.getElementById("desc");
let temp = document.getElementById("temp");

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=ff092519bc84a7badf9349529e5ce1d5"
  )
    .then((response) => response.json())
    .then((data) => {

      var tempC = data.main.temp - 273.15;
      tempC = tempC.toFixed(2);

      nameCity.innerHTML = `City - ${data.name}`;
      weather.innerHTML = `Weather - ${data.weather[0].description} `;
      desc.innerHTML = `Humidity - ${data.main.humidity}`;
      temp.innerHTML = `Temperature - ${tempC}ºC`;
    })
    .catch((err) => {
      console.log("bro you are entered wrong city");
    });
});

