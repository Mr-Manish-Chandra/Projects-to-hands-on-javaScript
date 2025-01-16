

        const apiKey = "e46a812c3668f23a85f9254c43d102e6";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input")
        const searchBtn = document.querySelector(".search button")

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);            
            let data = await response.json();

            

            document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temprature").innerHTML = Math.round(data.main.temp ) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

        }

        searchBtn.addEventListener('click', ()=> {
            checkWeather(searchBox.value);
        })
        
 