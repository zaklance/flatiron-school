/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

*/

// Let's try making a GET request to display existing data on the page.
fetch("http://localhost:3000/dogs")
.then(response => response.json())
.then(dogs => {
    const ul = document.querySelector("#dogs");
    // for(let i = 0; i < dogs.length; i++) {
        // console.log(dogs[i]);
    // }
    dogs.forEach(dog => {
        const li = document.createElement('li');
        li.textContent = `${dog.name} is ${dog.age} years old`;
        ul.append(li);
    });
});

fetch("http://localhost:3000/cats")
.then(response => response.json())
.then(cats => {
    const ul = document.querySelector("#cats");
    cats.forEach(cat => {
        const li = document.createElement('li');
        li.textContent = `${cat.name} is ${cat.age} years old`;
        ul.append(li);
    });
});

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.
/*
document.querySelector("#dogForm").addEventListener("submit", event => {
    event.preventDefault();
    // get information aka event.target
    const dogName = event.target.name.value;
    const dogAge = event.target.age.value;
    console.log(dogName + dogAge);
    fetch("http://localhost:3000/dogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: dogName,
            age: dogAge,
            isGoodDog: true 
        })
    })
    .then(response => response.json())
    .then(newDog => {
        console.log(newDog);
        const ul = document.querySelector("#dogs");
        const li = document.createElement('li');
        li.textContent = `${newDog.name} is ${newDog.age} years old`;
        ul.append(li);
    });
});
*/
/*
document.querySelector("#catForm").addEventListener("submit", event => {
    event.preventDefault();
    // get information aka event.target
    const catName = event.target.name.value;
    const catAge = event.target.age.value;
    console.log(catName + catAge);
    fetch("http://localhost:3000/cats", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: catName,
            age: catAge,
            isACat: true 
        })
    })
    .then(response => response.json())
    .then(newCat => {
        console.log(newCat);
        const ul = document.querySelector("#cats");
        const li = document.createElement('li');
        li.textContent = `${newCat.name} is ${newCat.age} years old`;
        ul.append(li);
    });
});
*/

const petSelector = document.querySelector('#petSelector');
if(petSelector.animals.value === "chooseCat") {
    document.querySelector("#petSelector").addEventListener("submit", event => {
        event.preventDefault();
        // get information aka event.target
        const catName = event.target.name.value;
        const catAge = event.target.age.value;
        fetch("http://localhost:3000/cats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: catName,
                age: catAge,
                isACat: true 
            })
        })
        .then(response => response.json())
        .then(newCat => {
            console.log(newCat);
            const ul = document.querySelector("#cats");
            const li = document.createElement('li');
            li.textContent = `${newCat.name} is ${newCat.age} years old`;
            ul.append(li);
        });
    });
} else {
    document.querySelector("#petSelector").addEventListener("submit", event => {
        event.preventDefault();
        // get information aka event.target
        const dogName = event.target.name.value;
        const dogAge = event.target.age.value;
        console.log(dogName + dogAge);
        fetch("http://localhost:3000/dogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: dogName,
                age: dogAge,
                isGoodDog: true 
            })
        })
        .then(response => response.json())
        .then(newDog => {
            console.log(newDog);
            const ul = document.querySelector("#dogs");
            const li = document.createElement('li');
            li.textContent = `${newDog.name} is ${newDog.age} years old`;
            ul.append(li);
        });
    });
}

// 1. Listens for pet type
// 2. 

// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 2.5 Replace the forms with an "Add a Pet" form where you can add a dog or a cat.
// 3. Try writing PATCH and DELETE requests!