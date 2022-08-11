// Variables pulling in the HTML elements
const searchFormEl = document.getElementById("searchForm")
const cityBtn = document.querySelector("cityBtn")
const citySearchEl = document.getElementById("citySearch")
const cityHistoryEl = document.getElementById("cityHistory")
const weatherInfoEl = document.getElementById("weatherInfo")
const weatherKey = "b31520990103167ddd169683f9d7ff8d"
// creates an element for the history buttons to be created
function addCityList () {
    const addCityBtn = document.createElement("button");
    addCityBtn.classList.add("btn", "cityBtn", "btn-secondary", "mt-3");
    addCityBtn.innerHTML = citySearchEl.value;
    // const addCityBtnText = 
    cityHistoryEl.appendChild(addCityBtn);
};

searchFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    if (citySearchEl.value.length == 0) {
        alert("Please enter city name")
    } else {
    addCityList();
    getWeather(citySearchEl.value);
    console.log(citySearchEl.value);
    };
});


function getWeather (cityName) {
fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+weatherKey, {
    "method": "GET",
    "headers":{
    } 
})
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .then(function (data) {
          var lat = data.lat
          var lon = data.lon
          return fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid='+weatherKey, {
    "method": "GET",
    "headers":{
    } 
})
      })
};
