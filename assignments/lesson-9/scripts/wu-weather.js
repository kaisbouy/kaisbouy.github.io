var header = document.querySelector('header');
var section = document.querySelector('section');/*not really sure how these two lines work yet or what to name them*/


var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
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
    var myName = document.getElementById('name');
    myName.textContent = jsonObj['name'];
    var myMotto = document.getElementById('motto');
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