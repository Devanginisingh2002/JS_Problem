document.addEventListener("DOMContentLoaded", () => {   // for DOM Loaded
  const cityInput = document.getElementById("city-input");
  const weatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperatureCheck = document.getElementById("temperature");
  const description = document.getElementById("description"); 
  const ErrorMsg = document.getElementById("error-message");

  const API_KEY = "3dff195e535199bc26cd39fbfc7a2e83";   //env variables

  weatherButton.addEventListener("click", async() => {
    const city_check = cityInput.value.trim();
    if(city_check == "") return;

    try{
      const weatherData = await fetchWeatherData(city_check); 
      console.log("check")
      displayWeatherData(weatherData);
    }
    catch(Error){
      showError();
    }
  })

  async function fetchWeatherData(city_check){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_check}&units-metric&appid=${API_KEY}`
    const response = await fetch(url);    //object
    console.log(typeof response);
    console.log("Response: ", response);

    if(!response.ok){ //here, we are getting 'ok' in the form of true or false. And if mistype city name, it throws an error.
      throw new Error("City not found")
    }

    const data = await response.json();
    return data;
  }
  function displayWeatherData(data){
    console.log(data);
    console.log(data.main[temp])
  }
  function showError(){
    weatherInfo.classList.add('hidden');
    ErrorMsg.classList.remove('hidden');

  }
})