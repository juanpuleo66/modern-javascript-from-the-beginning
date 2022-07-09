// DOM selectors for multiple elements

// // document.getElementsByClassName --> returns a HTML Collection
// // HTML Collections is not an array you have to convert it into an array arreglo = Array.from(HTMLCollection)
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);

// items[0].style.color = 'red';
// items[3].textContent = 'Hello World !!!';

// const listItems = document
// 	.querySelector('ul')
// 	.getElementsByClassName('collection-item');
// console.log(listItems);

// // document.getElementsByTagName  --> returns a HTML Collection
// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);

// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello World !!!';

// // HTML Collections is not an array you have to convert it into an array arreglo = Array.from(HTMLCollection)
// lis = Array.from(lis);

// lis.reverse();
// lis.forEach((li, index) => {
// 	console.log(li);
// 	li.textContent = `${index}: Hello`;
// });
// const formatDiv =
// 	'<div style="height: 100px; color: teal">Esto es una prueba</div>';
// lis[0].innerHTML = formatDiv;
// console.log(lis);

// document.querySelectorAll --> returns a Node list and you don't need to convert it to an array
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach((item, index) => {
	console.log(item);
	item.textContent = `${index}: Hello Item`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach((li) => {
	li.style.background = '#eee';
});

const liEven = document.querySelectorAll('li:nth-child(even)');
liEven.forEach((li) => {
	li.style.background = '#dcdcdc';
});

console.log(liEven);
