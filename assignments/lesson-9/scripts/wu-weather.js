var header = document.querySelector('header');
var section = document.querySelector('section');/*not really sure how these two lines work yet or what to name them*/


var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true );
request.responseType = 'json';
request.send();
request.onload = function() {
    var townStats = request.response;
    
    /*not really sure how populate works*/
    populateCity(townStats);
    populateName(townStats);
    populateMotto(townStats);
    populateFounded(townStats);
    populatePopulation(townStats);
    populateRainfall(townStats);
   
}

function populateCity(jsonObj) {
    var myName = document.getElementById('name').innerHTML = townStats.name;
    myName.textContent = jsonObj['name'];
    
    var myMotto = document.getElementById('motto').innerHTML = townStats['motto'];
    myMotto.textContent = jsonObj['motto'];
    
    var myFounded = document.getElementById('founded');
    myFounded.textContent = jsonObj['yearFounded'];
    
    var myPopulation = document.getElementById('population');
    myPopulation.textContent = jsonObj['currentPopulation'];
    
    var myRainfall = document.getElementById('rainfall');
    myRainfall.textContent = jsonObj['averageRainfall'];
    
    /*var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);*/
}

/*function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];
    for(var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';
        var superPowers = heroes[i].powers;
        for(var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
}*/

// Weather Underground AJAX
var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', 'https://api.wunderground.com/api/ea1dcb2430b970d7/conditions/q/MN/Franklin.json', true );
weatherObject.send();
weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.city;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_today_in;
    document.getElementById('weather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('humidity').innerHTML = weatherInfo.current_observation.relative_humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('windChill').innerHTML = weatherInfo.current_observation.windchill_f;

} // end of onload

var forecastObject = new XMLHttpRequest();
forecastObject.open('GET', 'https://api.wunderground.com/api/ea1dcb2430b970d7/forecast/q/MN/Franklin.json', true );
forecastObject.send();
forecastObject.onload = function() {
    var weatherForecast = JSON.parse(forecastObject.responseText);
    document.getElementById('forecast').innerHTML = weatherForecast.forecast.txt_forecast.forecastday["0"].fcttext;
}