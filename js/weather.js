const API_KEY = "af70af3ece4dbfbe34d1063d0f7b2c79";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log("you live in ",lat,lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metric`;
    //console.log(url);

    fetch(url) // 스크립트에 사이트에서 보여질 정보를 보여줌
    .then((response) => response.json())
    .then((data) => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = `${data.name}`;
        weatherContainer.innerText = `${data.weather[0].main}`;
    }); 
}
function onGeoErr() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr);