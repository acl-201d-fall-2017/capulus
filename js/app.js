'use strict';

// class Cafe {
//     constructor (name, address, site, src) {
//         this.name = name;
//         this.address = address;
//         this.site = site;
//         this.src = src;
//     }
//     rateWork(space, outlets, atmosphere) {
//         this.space = space;
//         this.outlets = outlets;
//         this.atmosphere = atmosphere;
//         this.work = Math.ceil((space + outlets + atmosphere) / 3);
//     }
//     rateMenu(quality, variety, price) {
//         this.quality = quality;
//         this.variety = variety;
//         this.price = price;
//         this.menu = Math.ceil((quality + variety + price) / 3);
//     }
//     rateComm(kids, local, neighborhood) {
//         this.kids = kids;
//         this.local = local;
//         this.neighborhood = neighborhood;
//         this.comm = Math.ceil((kids + local + neighborhood) / 3);
//     }
//     rateOverall() {
//         this.overall = ((this.work + this.menu + this.comm ) / 3).toFixed(1);
//     }
// }

const cafes = [];

const starbucks = new Cafe ('Starbucks', '1039 NW Couch St', 'http://www.Starbucks.com', 'assets/images/starbucks.jpeg');
starbucks.rateWork(4, 2, 3);
starbucks.rateMenu(3, 2, 4);
starbucks.rateComm(0, 0, 2);
starbucks.rateOverall();
cafes.push(starbucks);

const pearl = new Cafe ('Pearl Bakery', '102 NW 9th Ave', 'http://pearlbakery.com', 'assets/images/pearl.jpeg');
pearl.rateWork(3, 1, 5);
pearl.rateMenu(5, 3, 3);
pearl.rateComm(3, 5, 3);
pearl.rateOverall();
cafes.push(pearl);


const albina = new Cafe ('Albina', '4637 N Albina Ave', 'https://www.facebook.com/pages/Albina-Press-Coffeehouse/152791121399765', 'assets/images/albina.jpeg');
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

const annas = new Cafe ('Anna Bannanas', '8716 N Lombard St', 'http://www.annabannanas.com', 'assets/images/annas.jpeg');
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

// Store username to local from landing page
if (document.getElementById('index') != null) {
    const landingForm = document.getElementById ('landing-form');

    landingForm.addEventListener('submit', function(){
        const user = document.getElementById('username').value;
        localStorage.setItem('username', JSON.stringify(user));
        //'username' is the key, therefore must be used to access past this point
    });
}

//Render the username onto the search page
if (document.getElementById('search') != null) {
    console.log(localStorage.username);
    const newUser = JSON.parse(localStorage.username);
    const greeting = document.getElementById('greeting');
    greeting.textContent = 'Hello, ' + newUser + '. Find your space.';
}

//Render cafes on SEARCH page, save array of cafe instances to local
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

// // profile page rendering
// if (document.getElementById('profile') != null) {
//     //renders hero header with name, address, overall rating
//     JSON.parse(localStorage.cafes);
//     const choice = JSON.parse(localStorage.id);
//     const hero = document.getElementById('hero-lg');
//     hero.style.backgroundImage = 'url(' + cafes[choice].src + ')';
//     const cafeInfo = document.getElementById('hero-cafe-info');
//     const cafeTitle = document.createElement('h1');
//     cafeTitle.textContent = cafes[choice].name;
//     cafeInfo.appendChild(cafeTitle);
//     const cafeScore = document.createElement('span');
//     cafeScore.textContent = cafes[choice].overall;
//     cafeInfo.appendChild(cafeScore);
//     const cafeAddress = document.createElement('h3');
//     cafeAddress.textContent = cafes[choice].address;
//     cafeInfo.appendChild(cafeAddress);

//     //************************** Work ****************************/
//     const workSection = document.getElementById('work-section');
//     const workWrapper = document.createElement('div');
//     workWrapper.setAttribute('class', 'work-wrapper');
//     const workIcon = document.createElement('img');
//     workIcon.src = 'assets/icons/work-icon.png';
//     const workScore = document.createElement('span');
//     workScore.textContent = cafes[choice].work;
//     workWrapper.appendChild(workIcon);
//     workWrapper.appendChild(workScore);
//     workSection.appendChild(workWrapper);

//     const workRatings = document.createElement('div');
//     workRatings.setAttribute('class','work-ratings');

//     // title and icons for work/space
//     const spaceTitle = document.createElement('h4');
//     spaceTitle.textContent = 'Space';
//     const spaceCups = document.createElement('div');
//     spaceCups.setAttribute('class', 'cups');
//     for(let i = cafes[choice].space; i > 0; i--){
//         const cupIcon = document.createElement('img');
//         cupIcon.src = 'assets/icons/cup-icon.png';
//         spaceCups.appendChild(cupIcon);
//     }

//     // title and icons for work/outlets
//     const outletsTitle = document.createElement('h4');
//     outletsTitle.textContent = 'Outlets';
//     const outletsCups = document.createElement('div');
//     outletsCups.setAttribute('class', 'cups');
//     for(let i = cafes[choice].outlets; i > 0; i--){
//         const cupIcon = document.createElement('img');
//         cupIcon.src = 'assets/icons/cup-icon.png';
//         outletsCups.appendChild(cupIcon);
//     }

//     // title and icons for work/atmosphere
//     const atmosphereTitle = document.createElement('h4');
//     atmosphereTitle.textContent = 'Atmosphere';
//     const atmosphereCups = document.createElement('div');
//     atmosphereCups.setAttribute('class', 'cups');
//     for(let i = cafes[choice].atmosphere; i > 0; i--){
//         const cupIcon = document.createElement('img');
//         cupIcon.src = 'assets/icons/cup-icon.png';
//         atmosphereCups.appendChild(cupIcon);
//     }

//     //append title and icon sections to ratings area
//     workRatings.appendChild(spaceTitle);
//     workRatings.appendChild(spaceCups);
//     workRatings.appendChild(outletsTitle);
//     workRatings.appendChild(outletsCups);
//     workRatings.appendChild(atmosphereTitle);
//     workRatings.appendChild(atmosphereCups);
//     workSection.appendChild(workRatings);

//     //************************** Menu ****************************/
//     const menuSection = document.getElementById('menu-section');
//     const menuWrapper = document.createElement('div');
//     menuWrapper.setAttribute('class', 'menu-wrapper');
//     const menuIcon = document.createElement('img');
//     menuIcon.src = 'assets/icons/menu-icon.png';
//     const menuScore = document.createElement('span');
//     menuScore.textContent = cafes[choice].menu;
//     menuWrapper.appendChild(menuIcon);
//     menuWrapper.appendChild(menuScore);
//     menuSection.appendChild(menuWrapper);

//     const menuRatings = document.createElement('div');
//     menuRatings.setAttribute('class','menu-ratings');

//     // title and icons for menu/quality
//     const qualityTitle = document.createElement('h4');
//     qualityTitle.textContent = 'Quality';
//     const qualityCups = document.createElement('div');
//     qualityCups.setAttribute('class', 'cups');
//     for(let i = cafes[choice].quality; i > 0; i--){
//         const cupIcon = document.createElement('img');
//         cupIcon.src = 'assets/icons/cup-icon.png';
//         qualityCups.appendChild(cupIcon);
//     }

//     // title and icons for work/variety
//     const varietyTitle = document.createElement('h4');
//     varietyTitle.textContent = 'Variety';
//     const varietyCups = document.createElement('div');
//     varietyCups.setAttribute('class', 'cups');
//     for(let i = cafes[choice].variety; i > 0; i--){
//         const cupIcon = document.createElement('img');
//         cupIcon.src = 'assets/icons/cup-icon.png';
//         varietyCups.appendChild(cupIcon);
//     }

//     // title and icons for work/price
//     const priceTitle = document.createElement('h4');
//     priceTitle.textContent = 'Price';
//     const priceCups = document.createElement('div');
//     priceCups.setAttribute('class', 'cups');
//     for(let i = cafes[choice].price; i > 0; i--){
//         const cupIcon = document.createElement('img');
//         cupIcon.src = 'assets/icons/cup-icon.png';
//         priceCups.appendChild(cupIcon);
//     }

//     //append title and icon sections to ratings area
//     menuRatings.appendChild(qualityTitle);
//     menuRatings.appendChild(qualityCups);
//     menuRatings.appendChild(varietyTitle);
//     menuRatings.appendChild(varietyCups);
//     menuRatings.appendChild(priceTitle);
//     menuRatings.appendChild(priceCups);
//     menuSection.appendChild(menuRatings);

//     /******************************Community**************************/
//     const commSection = document.getElementById('comm-section');
//     const commWrapper = document.createElement('div');
//     commWrapper.setAttribute('class', 'comm-wrapper');
//     const commIcon = document.createElement('img');
//     commIcon.src = 'assets/icons/comm-icon.png';
//     const commScore = document.createElement('span');
//     commScore.textContent = cafes[choice].comm;
//     commWrapper.appendChild(commIcon);
//     commWrapper.appendChild(commScore);
//     commSection.appendChild(commWrapper);

//     const commRatings = document.createElement('div');
//     commRatings.setAttribute('class','comm-ratings');

//     // title and icons for comm/kids
//     const kidsTitle = document.createElement('h4');
//     kidsTitle.textContent = 'Kid-friendliness';
//     const kidsCups = document.createElement('div');
//     kidsCups.setAttribute('class', 'cups');
//     for(let i = cafes[choice].kids; i > 0; i--){
//         const cupIcon = document.createElement('img');
//         cupIcon.src = 'assets/icons/cup-icon.png';
//         kidsCups.appendChild(cupIcon);
//     }

//     // title and icons for comm/local
//     const localTitle = document.createElement('h4');
//     localTitle.textContent = 'Local Business';
//     const localCups = document.createElement('div');
//     localCups.setAttribute('class', 'cups');
//     for(let i = cafes[choice].local; i > 0; i--){
//         const cupIcon = document.createElement('img');
//         cupIcon.src = 'assets/icons/cup-icon.png';
//         localCups.appendChild(cupIcon);
//     }

//     // title and icons for comm/neighborhood
//     const neighborhoodTitle = document.createElement('h4');
//     neighborhoodTitle.textContent = 'neighborhood';
//     const neighborhoodCups = document.createElement('div');
//     neighborhoodCups.setAttribute('class', 'cups');
//     for(let i = cafes[choice].neighborhood; i > 0; i--){
//         const cupIcon = document.createElement('img');
//         cupIcon.src = 'assets/icons/cup-icon.png';
//         neighborhoodCups.appendChild(cupIcon);
//     }

//     //append title and icon sections to ratings area
//     commRatings.appendChild(kidsTitle);
//     commRatings.appendChild(kidsCups);
//     commRatings.appendChild(localTitle);
//     commRatings.appendChild(localCups);
//     commRatings.appendChild(neighborhoodTitle);
//     commRatings.appendChild(neighborhoodCups);
//     commSection.appendChild(commRatings);
// }

// take form input, return to user
if (document.getElementById('suggest-form') != null) {
    const suggestForm = document.getElementById('suggest-form');
    //add click handler for the suggestForm
    suggestForm.addEventListener('submit', function(e){
        e.preventDefault();
        const suggestName = document.getElementById('suggest-cafe-name').value;
        localStorage.setItem('suggestName', JSON.stringify(suggestName));
        const suggestAddress = document.getElementById('suggest-cafe-address').value;
        localStorage.setItem('suggestAddress', JSON.stringify(suggestAddress));
        const suggestSite = document.getElementById('suggest-cafe-site').value;
        localStorage.setItem('suggestSite', JSON.stringify(suggestSite));
        const suggestion = document.getElementById('suggestion-return');
        const suggestList = document.createElement('ul');
        const listItemName = document.createElement('li');
        listItemName.textContent = suggestName;
        const listItemAddress = document.createElement('li');
        listItemAddress.textContent = suggestAddress;
        const listItemSite = document.createElement('li');
        listItemSite.textContent = suggestSite;
        suggestList.appendChild(listItemName);
        suggestList.appendChild(listItemAddress);
        suggestList.appendChild(listItemSite);
        suggestion.appendChild(suggestList);
        //Need to move the rendering out of click handler, constants called w/in handler not scoped to outside. Fix this. Eventually. Stretch goal.
    });
}