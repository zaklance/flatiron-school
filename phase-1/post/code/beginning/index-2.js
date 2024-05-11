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

function handleLiClick(li, dog) {
    const dogId = dog.id;
    li.addEventListener("click", event => {
        fetch(`http://localhost:3000/dogs/${dogId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                age: dog.age + 1,
                isADog: true
            })
        })
        .then(response => response.json())
        .then(updatedDog => {
            console.log(updatedDog);
            li.textContent = `${updatedDog.name} (${updatedDog.age})`;
        })
    });
}

function handleDelete(li, deleteButton, dog) {
    // Handle clicks on the delete button by making a DELETE request
    deleteButton.addEventListener("click", () => {
        fetch(`http://localhost:3000/dogs/${dog.id}`, { method: "DELETE" })
        .then(response => {
            // If the deletion was successful...
            if (response.ok) {
                // ...then remove the li element from the DOM
                li.remove();
                deleteButton.remove();
            };
        });
    });
}

// Let's try making a GET request to display existing data on the page.
fetch("http://localhost:3000/dogs")
.then(response => { return response.json() })
.then(dogs => {
    const ul = document.querySelector("#dogs");
    dogs.forEach(dog => {
        const li = document.createElement("li");
        li.textContent = `${dog.name} (${dog.age})`;
        // Add a delete button to the li
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        ul.append(li, deleteButton);
        handleLiClick(li, dog);
        handleDelete(li, deleteButton, dog);        
    });
});

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
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
        const li = document.createElement("li");
        li.textContent = `${newDog.name} (${newDog.age})`;
        ul.append(li);
    });
});





// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 2.5. Replace the forms with an "Add a Pet" form where you can add a dog or a cat.
// 3. Try writing PATCH and DELETE requests!