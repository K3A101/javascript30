/* eslint-disable */
const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []; // Make a new empty array to put the data in

fetch(endpoint) // fetch the url -> gives a promise
  .then((blob) => blob.json()) // gives a response and give an object back with the json() method. For best practices use response as a parameter to make it more readable. 
  .then((data) => cities.push(...data)); //Push data into an array
 
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// finds word matches from the cities array, use two parameters wordMatch en the cities
function findMatches(wordMatch, cities) {
  return cities.filter((place) => {
     // here we need to figure out if the city or state matches  what was searched
     const regex = new RegExp(wordMatch, 'gi'); // g -> global, || i -> insensitive so upper and lowercase.
    return  place.city.match(regex) || place.state.match(regex)

        });
}

function displayMatches() {
   const matchArray = findMatches(this.value, cities); // uses the value the user type in and the array as arguments and stores it into the matchArray variables 
   const html = matchArray.map(place => { // loop make the html to display the data 
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`) // replace the html with a span with a class to highlight the word while your typing/
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
   }).join(''); // this method concatenate all elements together and  makes everything a string 
    suggestions.innerHTML = html // Add the li into the ul.suggestions
}

//select the search input and the unordered list 
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('input', displayMatches); //listen for data that the user type in 