var city = document.getElementById('current-city').innerHTML

// remove cookies function
function acceptcookies(button, idName) {
    document.getElementById(idName).remove();
}
// display alert function
function displayAlert(h2, idName) {
    chosenCity = document.getElementById(idName).innerHTML;
    alert('Loading weather report on ' + chosenCity + '.');
    city = chosenCity; // Update the city variable with the clicked city
    weather.fetchWeather(city) // Call fetchWeather with the updated city
        .then((data) => {
            weather.displayWeather(data);
        });
}
// degree converter function
var selectElement = document.getElementById("temp");
var result = document.querySelectorAll("span");
// console.log(result[0])

selectElement.addEventListener("change", (event) => {
    for (var i = 0; i < result.length; i++) {
        // console.log(result[i].innerHTML)
        if (event.target.value == 'Fahrenheit') {
            result[i].innerHTML = Math.round((1.8 * result[i].innerHTML) + 32);
        } else {
            result[i].innerHTML = Math.round((result[i].innerHTML - 32) / 1.8);
        }
    }

});
console.log(city)

// weather.fetchWeather(city)
let weather = {
    apiKey: "a010e505861134425c23a757babd097c",
    fetchWeather: function (city) {
        // Return the fetch Promise
        return fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        ).then((response) => response.json());
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp_min, temp_max } = data.main;
        // console.log(name, description, temp_min, temp_max);
        document.querySelector(".temp-container h2").innerText = name;
        document.getElementById('max-temp').innerHTML = Math.round(temp_max);
        document.getElementById('min-temp').innerHTML = Math.round(temp_min);
        document.getElementById('weather-description').innerHTML = description;
        document.getElementById('today-icon').src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
    }
};

// Call fetchWeather and then displayWeather
weather.fetchWeather(city)
    .then((data) => {
        weather.displayWeather(data);
});
