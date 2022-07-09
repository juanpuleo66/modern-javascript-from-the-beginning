// Removing and replacing elements in the DOM

// Replace element
// Create element
const newHeading = document.createElement('h4');
newHeading.id = 'task-title';
// New text node
const textnode = document.createTextNode('Task List - New Heading');
newHeading.appendChild(textnode);

// Get the old heading
const oldHeading = document.querySelector('#task-title');
console.log(oldHeading);
// Parent
const cardAction = document.querySelector('.card-action');
// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Classess and Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
link.setAttribute('title', 'Goto google.com');
val = link;

console.log(val);
