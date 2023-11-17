const API_KEY = "0bb505662c2de284c1a0f8b3fb93c6db";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const temp = document.querySelector('#weather span');
        const weatherBox = document.querySelector("#weather");
        const weather = document.createElement("div");
        weather.innerText = '';
        const CityContainer = document.querySelector('#weather_box .box_title span');
        CityContainer.innerText = data.name;
        //weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        if (data.weather[0].main == "Clouds") {
            weather.id = "clouds"
            weatherBox.appendChild(weather);
        } else if (data.weather[0].main == "Snow") {
            weather.id = "snow"
            weatherBox.appendChild(weather);
        } else if (data.weather[0].main == "Smoke") {
            weather.id = "smoke"
            weatherBox.appendChild(weather);
        } else if (data.weather[0].main == "Mist") {
            weather.id = "mist"
            weatherBox.appendChild(weather);
        } else if (data.weather[0].main == "Rain") {
            weather.id = "rain"
            weatherBox.appendChild(weather);
        } else {
            weather.id = "clear"
            weatherBox.appendChild(weather);
        }
        temp.innerText = data.main.temp.toFixed(1);
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);