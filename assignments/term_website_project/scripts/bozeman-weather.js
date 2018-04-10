// Weather Underground AJAX
var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.wunderground.com/api/ea1dcb2430b970d7/conditions/q/MT/Bozeman.json', true);
weatherObject.send();
weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.city;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_today_in;
    document.getElementById('weather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('humidity').innerHTML = weatherInfo.current_observation.relative_humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('windChill').innerHTML = weatherInfo.current_observation.windchill_f;

}; // end of onload

var forecastObject = new XMLHttpRequest();
forecastObject.open('GET', 'https://api.wunderground.com/api/ea1dcb2430b970d7/forecast/q/MT/Bozeman.json', true);
forecastObject.send();
forecastObject.onload = function () {
    var weatherForecast = JSON.parse(forecastObject.responseText);
    document.getElementById('forecast').innerHTML = weatherForecast.forecast.txt_forecast.forecastday["0"].fcttext;
};