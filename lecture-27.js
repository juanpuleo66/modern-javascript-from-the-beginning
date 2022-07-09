// Creating elements

// Create li element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('tittle', 'New Item');

// Add style
li.style.cursor = 'pointer';

// Create text node and append
const textNode = document.createTextNode('New first item in the list');
li.appendChild(textNode);

// Create new a element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.setAttribute('href', '#');

// Create new i element and append to link
const i = document.createElement('i');
i.className = 'fa fa-plus';
link.appendChild(i);

// Append link into li
li.appendChild(link);

// Append li as child to ul
const ul = document.querySelector('.collection');
ul.appendChild(li);

console.log('li:', li);

////////////////////////////////
const li2 = document.createElement('li');
li2.className = 'collection-item';

const textNode2 = document.createTextNode('New second item in the list');
li2.appendChild(textNode2);

const a2 = document.createElement('a');
a2.className = 'delete-item secondary-content';
a2.setAttribute('href', '#');

// const i2 = document.createElement('i');
// i2.className = 'fa fa-plus';
// a2.appendChild(i2);

const i2 = '<i class="fa fa-plus"></i>';
a2.innerHTML = '<i class="fa fa-minus"></i>';

li2.appendChild(a2);

// const link2 = '<a href="#" class="delete-item secondary-content"';
// li2.innerHTML = link2;

const ul2 = document.querySelector('.collection');
ul2.appendChild(li2);
