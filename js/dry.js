'use strict';

// sets up arrays to loop through various categories and sub-categories
const categories = ['work', 'menu', 'comm'];
const scores = [];
const subcats = [];
subcats[0] = ['Space', 'Outlets', 'Atmosphere'];
subcats[1] = ['Quality', 'Variety', 'Price'];
subcats[2] = ['Kid Friendly', 'Local', 'Neighborhood'];

if (document.getElementById('profile') != null) {

    //renders hero header with name, address, overall rating
    JSON.parse(localStorage.cafes);
    const choice = JSON.parse(localStorage.id);
    const hero = document.getElementById('hero-profile');
    hero.style.backgroundImage = 'url(' + cafes[choice].src + ')';
    const cafeInfo = document.getElementById('hero-cafe-info');
    const cafeTitle = document.createElement('h1');
    cafeTitle.textContent = cafes[choice].name;
    cafeInfo.appendChild(cafeTitle);
    const cafeScore = document.createElement('span');
    cafeScore.textContent = cafes[choice].overall;
    cafeInfo.appendChild(cafeScore);
    const cafeAddress = document.createElement('h3');
    cafeAddress.textContent = cafes[choice].address;
    cafeInfo.appendChild(cafeAddress);

    // creates arrays of sub-category scores specific to the cafe chosen on search page
    scores[0] = [cafes[choice].space, cafes[choice].outlets, cafes[choice].atmosphere, cafes[choice].work];
    scores[1] = [cafes[choice].quality, cafes[choice].variety, cafes[choice].price, cafes[choice].menu];
    scores[2] = [cafes[choice].kids, cafes[choice].local, cafes[choice].neighborhood, cafes[choice].comm];

    // creates section for ratings, 
    for (let i = 0; i < categories.length; i++){
        const categorySection = document.getElementById(categories[i] + '-section');
        const categoryWrapper = document.createElement('div');
        categoryWrapper.setAttribute('class', categories[i] + '-icon');
        const categoryIcon = document.createElement('img');
        categoryIcon.src = 'assets/icons/' + categories[i] + '-icon.png';
        const categoryScore = document.createElement('span');
        categoryScore.textContent = scores[i][3];
        categoryWrapper.appendChild(categoryIcon);
        categoryWrapper.appendChild(categoryScore);
        categorySection.appendChild(categoryWrapper);
        const categoryRatings = document.createElement('div');
        categoryRatings.setAttribute('class', categories[i] + '-ratings');
        categorySection.appendChild(categoryRatings);

        // titles sub-cats and create cup section
        for (let j = 0; j < subcats.length; j++){
            const scoreBar = document.createElement('div');
            scoreBar.setAttribute('class', 'score-bar');
            const scoresTitle = document.createElement('h4');
            scoresTitle.textContent = subcats[i][j];
            const scoresCups = document.createElement('div');
            scoresCups.setAttribute('class', 'cups');

            // adds appropriate number of cup icons
            for(let n = scores[i][j]; n > 0; n--){
                const cupIcon = document.createElement('img');
                cupIcon.src = 'assets/icons/cup-icon.png';
                scoresCups.appendChild(cupIcon);
            }

            scoreBar.appendChild(scoresTitle);
            scoreBar.appendChild(scoresCups);
            categoryRatings.appendChild(scoreBar);
        }
    }
}