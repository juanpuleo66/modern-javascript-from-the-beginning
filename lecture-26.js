// Traversing the DOM

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// Get child nodes with childNodes --> returns a Node list and adds the line breaks as #text \n
const childNodes = list.childNodes;
val = childNodes.forEach((child) => {
	console.log('1', child);
});

val = childNodes;
val = childNodes[0];
val = childNodes[0].nodeName;
val = childNodes[0].nodeType;
val = childNodes[1].nodeType;
console.log('2', val);

// 1 - Element
// 2 - Attribute (deptrecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes --> returns an HTML Collection of all the elements
console.log('3', list.children);

val = Array.from(list.children);
val.forEach((child) => {
	console.log('4', child);
});

list.children[1].textContent = 'Hello';
//Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children;

//First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parents node
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
