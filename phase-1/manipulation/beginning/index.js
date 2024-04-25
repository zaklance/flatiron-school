/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`
// An application Programming Interface is a bridge between us and a data source.
// API's let us Create, Read, Update, Delete data is such external sources.
document // An API for communication between JS (this file) and HTML (index.html)
 /*
<body>
    <p> Some text </p>
    <div>
        <a href="link.com">Link</a>
    </div>
</body>

Dom
            body
              |
        |----------|
        p         div
                   |
                   p
*/


// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector('h1')); // read by tag name (singular)
console.log(document.querySelector('#today')); // read by tag name
console.log(document.querySelector('p.classy')); // read by class name
console.log(document.querySelectorAll('p')); // read multiple elements at the same time
console.log(document.querySelector('#today').textContent); // Read the text of the tag

const p = document.querySelector('#today'); //  saving a node to a avariable
console.log(p.textContent); // using a node variable

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector('#forever').textContent = 'Forever ever'; // edits the text content

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector('#forever').remove(); // removes p 

// ~ Create + Append a node
// -> createElement(), append()
const newH2 = document.createElement('h2');
// parent.append(child); // append the element child as a child of the element parent
newH2.textContent = 'H2 H2 H2';
document.body.append(newH2) 


/*
        div
         |
        elememt
         |
        newElement
*/

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
// displayList('Books', ['The Shining', 'Eragon']); // after today and tomorrow, before foreveer

// const newUl = document.createElement('ul');
// const newLi = document.createElement('li');
// document.querySelector('#dates').append(newUl);
// document.querySelector('ul').textContent = 'Books';
// document.querySelector('ul').append(newLi);
// document.querySelector('li').textContent = 'The Shining';
// document.querySelector('li').append(newLi);


const books = ['The Shining', 'Eragon', 'Jurassic Park'];
function displayList(name, array) {
    const div = document.querySelector('#dates');
    const heading = document.createElement('h2');
    heading.textContent = name;
    div.append(heading);
    const list = document.createElement('ul');
    array.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        list.append(li);
    });
    div.append(list);
};
displayList('books', books);

// function displayListTwo(listName, listItems) {
//     const parentElement =  document.querySelector('div#dates');

//     const newList = document.createElement('ul');
//     newList.textContent = listName;
//     parentElement.append(newList);

//     listItems.forEach(listItem => {
//         let newItem 
//     })


// 2. Replace the <strong> element with a newly created one.
