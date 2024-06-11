const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "ade73af3ee1bdf079c4ea86e17eabed2"
};

const input = document.querySelector("#input");

input.addEventListener("keydown", enter);

function enter(e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
        input.value = ""
    }
}

async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appid=${api.key}`);
    const result = await res.json();
    showResult(result);
}

function showResult(result) {
    let city = document.querySelector("#city");
    city.textContent = `${result.name},${result.sys.country}`;

    showOurDate();


    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)}<span>°</span>`;

    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML = "Feels like: " + `${Math.round(result.main.feels_like)}<span>°</span>`;

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].main}`;

    let variation = document.querySelector("#variation");
    variation.innerHTML = "Min:" + `${Math.round(result.main.temp_min)}<span>°</span>` + "Max:" + `${Math.round(result.main.temp_max)}<span>°</span>`



}

function showOurDate() {
    const ourDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = document.querySelector("#date");
    let day = days[ourDate.getDay()];
    let todayDate = ourDate.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[ourDate.getMonth()];
    let year = ourDate.getFullYear();

    date.innerHTML = `${day}`+ " " + `${todayDate}` + " " + `${month}` + " " + `${year}`

    
}