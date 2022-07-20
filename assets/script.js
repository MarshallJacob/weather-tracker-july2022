const citySearchEl = document.getElementById("citySearch")
const SearchBtnEl = document.getElementById("searchBtn")

SearchBtnEl.addEventListener("click", pullCityWeather(citySearchEl.id))

function pullCityWeather (temps) {

    return console.log("This button works")
}