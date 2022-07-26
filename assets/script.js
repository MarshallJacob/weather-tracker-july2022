// Variables pulling in the HTML elements
const searchFormEl = document.getElementById("searchForm")
const cityBtn = document.querySelector("cityBtn")
const citySearchEl = document.getElementById("citySearch")
const cityHistoryEl = document.getElementById("cityHistory")
const weatherInfoEl = document.getElementById("weatherInfo")

function addCityList () {
    const addCityBtn = document.createElement("button")
    addCityBtn.classList.add("btn", "cityBtn", "btn-secondary", "mt-3");
    addCityBtn.innerHTML = cityHistoryEl.value;
    // const addCityBtnText = 
    cityHistoryEl.appendChild(addCityBtn);
};

searchFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    addCityList();
    console.log(citySearchEl.value);
});

// const weatherOptions = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b9f7a922ebmsh056b98b927e5416p1028e5jsnf1c2d7606943',
// 		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
// 	}
// };

// fetch('https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco%2Cus', weatherOptions)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));