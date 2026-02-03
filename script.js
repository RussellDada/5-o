// add a listener to buttons
const planetButtonElements = document.querySelectorAll(".planet-button");
planetButtonElements.forEach(addPlanetButtonListener);

function addPlanetButtonListener(planetButtonElement) {
    planetButtonElement.addEventListener("click", planetButtonClick);
}

function planetButtonClick(event) {
    const clickedButton = event.currentTarget;

    // generate the class of the selected planet's details element
    // for example: ".planet-details-Venus" or ".planet-details-Earth"
    // const detailsElementCssSelector = ".planet-details-" + clickedButton.textContent;
    const target = clickedButton.getAttribute('data-target');
    const detailsElementCssSelector = ".planet-details-" + target;

    // find this element
    const detailsElement = document.querySelector(detailsElementCssSelector);

    // remove selected state from all buttons
    planetButtonElements.forEach(updateClickedButtonState);

    // remove selected state from all details elements
    const planetDetailElements = document.querySelectorAll(".planet-details");
    planetDetailElements.forEach(updatePlanetDetailState);

    // add selected state just to the clicked button
    detailsElement.classList.add("currently-selected-planet");
    clickedButton.classList.add("currently-selected-button");
}

function updateClickedButtonState(planetButtonElement) {
    planetButtonElement.classList.remove("currently-selected-button");
}

function updatePlanetDetailState(planetDetailElement) {
    planetDetailElement.classList.remove("currently-selected-planet");
}




// listen to changes in the search form
const searchInput = document.querySelector(".search");
// searchInput.addEventListener("input", updateSearchValue);
const searchButton = document.querySelector(".search-button");
// ONLY trigger the update when the button is clicked
searchButton.addEventListener("click", updateSearchValue);

// initial search value, which will be empty
let searchValue = "";

// check what search term has been entered
function updateSearchValue() {
    // trim() removes any spaces before/after the input
    // toLowerCase() makes the entered text lowercase
    searchValue = searchInput.value.trim().toLowerCase();

    console.log("You searched for: " + searchValue);

    // you will add some more code here shortly...

    // loop through all planet elements
    // show or hide each one based on the search term
    const planetElements = document.querySelectorAll(".planet");
    planetElements.forEach(showOrHidePlanet);
}

// every time the text field changes, run this
function showOrHidePlanet(planetElement) {
    // you will add some code here shortly

    // if no search value is set, show the planet
    if (searchValue.length === 0) {
        planetElement.classList.remove("hide");
    } else {
        // you will add code here shortly
        // get the name of the planet from its planet-name element
        const planetName = planetElement.querySelector(".planet-name").textContent.toLowerCase();
        if (planetName.includes(searchValue)) {
            planetElement.classList.remove("hide");
        } else {
            planetElement.classList.add("hide");
        }

    }
}

