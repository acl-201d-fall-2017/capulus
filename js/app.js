'use strict';

const cafes = [];

// creates instances of cafes
const starbucks = new Cafe ('Starbucks', '1039 NW Couch St', 'http://www.Starbucks.com', 'assets/images/starbucks.jpg');
starbucks.rateWork(4, 2, 3);
starbucks.rateMenu(3, 2, 4);
starbucks.rateComm(0, 0, 2);
starbucks.rateOverall();
cafes.push(starbucks);

const pearl = new Cafe ('Pearl Bakery', '102 NW 9th Ave', 'http://pearlbakery.com', 'assets/images/pearl.jpg');
pearl.rateWork(3, 1, 5);
pearl.rateMenu(5, 3, 3);
pearl.rateComm(3, 5, 3);
pearl.rateOverall();
cafes.push(pearl);

const albina = new Cafe ('Albina', '4637 N Albina Ave', 'https://www.facebook.com/pages/Albina-Press-Coffeehouse/152791121399765', 'assets/images/albina.png');
albina.rateWork (3, 3, 5);
albina.rateMenu (4, 3, 3);
albina.rateComm (1, 5, 5);
albina.rateOverall();
cafes.push(albina);

const rohst = new Cafe ('Rohst', '11254 SE 21st Avenue', 'http://www.rohstcoffee.com', 'assets/images/rohst.jpeg');
rohst.rateWork (2, 4, 4);
rohst.rateMenu (4, 5, 4);
rohst.rateComm (4, 5, 5);
rohst.rateOverall();
cafes.push(rohst);

const annas = new Cafe ('Anna Bannanas', '8716 N Lombard St', 'http://www.annabannanas.com', 'assets/images/annas.png');
annas.rateWork (4, 4, 4);
annas.rateMenu (4, 3, 3);
annas.rateComm (5, 5, 5);
annas.rateOverall();
cafes.push(annas);

const barista = new Cafe ('Barista', '1725 NE Alberta St', 'http://www.baristapdx.com', 'assets/images/barista.jpeg');
barista.rateWork (2, 2, 3);
barista.rateMenu (2, 2, 4);
barista.rateComm (1, 3, 3);
barista.rateOverall();
cafes.push(barista);




// // NEW CAFES FOR TESTING AND DEMONSTRATION
// const water = new Cafe ('Water Avenue', '1028 SE Water Avenue', 'https://www.wateravenuecoffee.com' , 'assets/images/water.jpg');
// water.rateWork (3,2,3);
// water.rateMenu (4,5,3);
// water.rateComm (3,4,3);
// water.rateOverall();
// cafes.push(water);

// const tov = new Cafe ('Tov', '3207 SE Hawthorne Bvd', 'https://www.tovcoffee.com' ,'assets/images/tov.jpg');
// tov.rateWork (2,4,3);
// tov.rateMenu (2,5,3);
// tov.rateComm (5,4,3);
// tov.rateOverall();
// cafes.push(tov);

// const commissary = new Cafe ('Commissary', '915 NW 19th Avenue', 'http://www.commissarycafe.com' , 'assets/images/commissary.jpg');
// commissary.rateWork (3,4,1);
// commissary.rateMenu (4,3,3);
// commissary.rateComm (3,4,5);
// commissary.rateOverall();
// cafes.push(commissary);


// Stores username to local from landing page
if (document.getElementById('index') != null) {
    const landingForm = document.getElementById ('landing-form');

    landingForm.addEventListener('submit', function(){
        const user = document.getElementById('username').value;
        localStorage.setItem('username', JSON.stringify(user));
    });
}

// Renders the username onto the search page
if (document.getElementById('search') != null) {
    console.log(localStorage.username);
    const newUser = JSON.parse(localStorage.username);
    const greeting = document.getElementById('greeting');
    greeting.textContent = 'Hello, ' + newUser + '. Find your space.';
}

//Renders cafes on SEARCH page, save array of cafe instances to local
if (document.getElementById('search') != null) {
    for ( let i = 0; i < cafes.length; i++){
        const searchPage = document.getElementById('thumbnail-wrapper');
        const cafeBlock = document.createElement('div');
        cafeBlock.setAttribute('class', 'cafeBlock');
        cafeBlock.style.backgroundImage = 'url(' + cafes[i].src + ')';
        const cafeName = document.createElement('a');
        cafeName.textContent = cafes[i].name;
        cafeName.setAttribute('href', 'profile.html');
        cafeName.setAttribute('id', i);
        const cafeRating = document.createElement('span');
        cafeRating.textContent = cafes[i].overall;
        searchPage.appendChild(cafeBlock);
        cafeBlock.appendChild(cafeName);
        cafeBlock.appendChild(cafeRating);
        localStorage.setItem('cafes', JSON.stringify(cafes));
        cafeName.addEventListener('click', function(e){
            const id = e.target.id;
            localStorage.setItem('id' , JSON.stringify(id));
        });
    }
}


// takes form input, return to user
if (document.getElementById('suggest-form') != null) {
    //adds click handler for the suggestForm
    const suggestForm = document.getElementById('suggest-form');
    const parsedCafes = [];
    // renders previously suggested cafe to page
    if (localStorage.newCafes !== undefined){ //eslint-disable-line
        let parsedCafes = JSON.parse(localStorage.newCafes);
        parsedCafes = JSON.parse(localStorage.newCafes);
        for (let i = 0; i < parsedCafes.length; i++){
            const suggestion = document.getElementById('suggestion-return');
            const suggestList = document.createElement('ul');
            const listItemName = document.createElement('li');
            listItemName.textContent = 'Name: ' + parsedCafes[i].suggestName;
            const listItemAddress = document.createElement('li');
            listItemAddress.textContent = 'Address: ' + parsedCafes[i].suggestAddress;
            const listItemSite = document.createElement('li');
            listItemSite.textContent = 'Website: ' + parsedCafes[i].suggestSite;
            suggestList.appendChild(listItemName);
            suggestList.appendChild(listItemAddress);
            suggestList.appendChild(listItemSite);
            suggestion.appendChild(suggestList);
        }
    };
    // listens for form click, stores values to local storage
    suggestForm.addEventListener('submit', function(e){
        e.preventDefault();
        const suggestName = document.getElementById('suggest-cafe-name').value;
        const suggestAddress = document.getElementById('suggest-cafe-address').value;
        const suggestSite = document.getElementById('suggest-cafe-site').value;
        const formCafe = new NewCafe (suggestName, suggestAddress, suggestSite);
        parsedCafes.push(formCafe);
        localStorage.setItem('newCafes', JSON.stringify(parsedCafes));
        // renders newly suggested cafe to page
        const suggestion = document.getElementById('suggestion-return');
        const suggestList = document.createElement('ul');
        const listItemName = document.createElement('li');
        listItemName.textContent = 'Name: ' + suggestName;
        const listItemAddress = document.createElement('li');
        listItemAddress.textContent = 'Address: ' + suggestAddress;
        const listItemSite = document.createElement('li');
        listItemSite.textContent = 'Website: ' + suggestSite;
        suggestList.appendChild(listItemName);
        suggestList.appendChild(listItemAddress);
        suggestList.appendChild(listItemSite);
        suggestion.appendChild(suggestList);
    });
}