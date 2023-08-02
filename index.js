let weather = {
    apiKey : "a010e505861134425c23a757babd097c",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=37.335480&lon=-121.893028&appid=a010e505861134425c23a757babd097c"
        ).then((response) => response.json())
        .then((data) => console.log(data))
    },
};