const inp=document.querySelector('input');
const searchbutton=document.querySelector('#search-btn');
const img=document.querySelector('img');
const temperatureValue=document.querySelector('.temperature-value');
const weatherName=document.querySelector('.weather-name');
const temNumber=document.querySelector('.number');
const windSpeed=document.querySelector('.wind-speed');
const locationNOtfound=document.querySelector('.location-not');
const weatherBody=document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key="465748b99de9ef3f55f24a14d7ab2f5e";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  
        const weather_data=await fetch(`${url}`)
                            .then((res)=>{
                                // console.log(res);
                                return res.json();
                            });
        locationNOtfound.style.display="none";
        weatherBody.style.display="flex";
        if(weather_data.cod ==='404'){
            console.log("error");
            locationNOtfound.style.display="flex";
            weatherBody.style.display="none";
            return;
        }

        
        
        console.log(weather_data);
        temperatureValue.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}<sup>°C</sup>`
        weatherName.innerHTML=`${weather_data.weather[0].description}`
        temNumber.innerHTML=`${weather_data.main.humidity}`;                  
        windSpeed.innerHTML=`${weather_data.wind.speed}Km/H`;       
        
        switch(weather_data.weather[0].main){
            case 'Clouds':
                img.src="./img/cloud.png";
                break;
            case 'Clear':
                img.src="./img/clear.png";
                break;
            case 'Rain':
                img.src="./img/rain.png";
                break;
            case 'Mist':
                img.src="./img/clear.png";
                break;
            case 'Snow':
                img.src="./img/snow.png";
                break;
    
        }
    

    

 
}

searchbutton.addEventListener("click", ()=>{
    checkWeather(inp.value);
});

