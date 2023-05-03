const cityName = document.querySelector('#cityName');
const weatherIcon = document.querySelector('#weatherIcon');
const temp = document.querySelector('#temp');
const day = document.querySelector('#nameOfDay');

function searchPlace() {
    const searchPlace = document.querySelector('#searchPlace').value;
    console.log(searchPlace);
    const apiGetCity = `http://api.weatherapi.com/v1/current.json?key=696a68ac7c88478281783409231204&q=${searchPlace}`;
    fetch(apiGetCity)
        .then(response => response.json())
        .then(data => {
        dataFunction(data);
        })
        .catch(error => {
            if (error === '400 (Bad Request)') {
                alert('Please enter a valid city name');
            } else {
                console.error(error);
            }});
    if (searchPlace === '') {
        alert('Please enter a city name');
    }
}

function dataFunction(data) {
    if (data.error) {
        alert('Please enter a valid city name');
    }
    cityName.innerHTML = data.location.name;
    weatherIcon.src = data.current.condition.icon;
    temp.innerHTML = data.current.temp_c + '°C';
    day.innerHTML = data.location.localtime;

    console.log(data);
}
