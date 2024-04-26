/*

Phase 1 -> GET
Updated March 14, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.
Get: read
Post: create
Patch: modify
Delete: 
*/

// A synchronous request to https://cat-fact.herokuapp.com/facts/random.
// Make a GET request for dog facts
fetch('https://dog-api.kinduff.com/api/facts?number=1')
// convert the json respoinse into javascript
.then((response) => response.json())
// Using the resulting JS! // data is an array so we can pull the specific data by going to facts and it's first index
.then((data) => {
    const span = document.querySelector('#cat');
    span.textContent = data.facts[0];
    // is the element I'm working with already in the DOM,
    // if so then select and modify the element, otherwise 
    // create, modify, and append the element.
})
// log error
.catch((error) => console.log(error));

// A synchronous request to https://anapioficeandfire.com/api/books.
fetch('https://anapioficeandfire.com/api/books')
.then((response) => response.json())
.then ((books) =>{
    const got = document.querySelector('#got');
    books.forEach((book) => {
        const listItem = document.createElement('li');
        got.append(listItem);
        listItem.textContent = `${book['name']} (${book.numberOfPages})`;
    });
});

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
// Await is required for async functions
async function getPokemon(name) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
    const pokemon = await response.json();
    console.log(pokemon);
    document.querySelector("#pokemon").textContent =
      pokemon.name[0].toUpperCase() + pokemon.name.slice(1) + " (" + pokemon.id + ")";
  }
  getPokemon("ditto");

// ~ Challenge: Make a GET request to an API of your choice!
// fetch('https://meowfacts.herokuapp.com');
// .then((response) => response.json())
// .then((meomw) => {
//     const cats = document.querySelector('#cat');
//     cats.textContent = meow.data[0];
//     // const ulLocation = document.querySelector('body');
//     // const newUl = document.createElement('ul');
//     // const newLi = document.createElement('li');
//     // ulLocation.append(newUl);
// })
// .catch((error) => console.log(error));