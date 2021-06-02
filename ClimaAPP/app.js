
const input = document.getElementById('input');
const form = document.getElementById('form');
const API_KEY = '78a3e8b00557670d15febe7b59efbdc1';


function cityWeather(){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const city = input.value;
        if(city){
            fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`)
                .then(response => response.json())
                .then(data => giveWeather(data))
        }
    })
}

function giveWeather(data){
    console.log(data)
    const weatherObj = {
        temperature: Math.floor(data.main.temp),
        thermal_sensation: Math.floor(data.main.feels_like),//operacion manual: formula de Siple
        humidity: data.main.humidity,
        pressure: data.main.pressure,
    }
    Object.keys(weatherObj).forEach(key => {
        document.getElementById(key).innerHTML = weatherObj[key]; //el mismo iterador busca los id's que tienen el mismo nombre que el de los objetos
    })
}

cityWeather();