const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';

const APP_ID = 'b0899925';
const APP_key = '7fd072f84dfb08edec096184a180e8e2';
// const baseURl = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}`;



searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    // console.log(searchQuery);
    fetchAPI();
    
});
async function fetchAPI() {
    const baseURl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&to=20`;
    const response = await fetch(baseURl);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results) {
    container.classList.remove('initial');


    let generatedHTML = '';
    results.map(result => {

        // <img src="./backgound.jpeg">
        generatedHTML +=
            `
            <div class="item">
                    <img src="${result.recipe.image}">
                    <div class="flex-container">
                        <h1 class="title">${result.recipe.label}</h1>
                        <a href="${result.recipe.url}" target="_blank" class="view-btn">View Recipe</a>
                    </div>
                    <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
                    <p class="item-data">Diet Label: ${result.recipe.dietLabels.length > 0 ?
            result.recipe.dietLabels : 'No Data Found'}</p>
                    <p class="item-data">Health Label: ${result.recipe.healthLabels.length>=6?
                  result.recipe.healthLabels:'dzdjada'}</p>
                </div>
            `
    })
    searchResultDiv.innerHTML = generatedHTML;
}



































