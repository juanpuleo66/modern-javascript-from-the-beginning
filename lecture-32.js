// Event bubbling and event delegation
// EVENT BUBBLING is the bubbling up of the events trough the DOM

// const bloque =
// 	'<div style="height: 100px; background-color: teal"><a style="color: #fff" href="http://google.com">Google</a></div>';
// const cardTitle = document.querySelector('.card-title');
// cardTitle.innerText = 'Nuevo titulo';
// cardTitle.textContent = 'Segundo nuevo titulo';
// cardTitle.innerHTML = bloque;

// const cardContent = document.querySelector('.card-content');
// const card = document.querySelector('.card');
// const col = document.querySelector('.col');
// const row = document.querySelector('.row');
// const container = document.querySelector('.container');
// const body = document.querySelector('body');

// cardTitle.addEventListener('click', (e) => {
// 	console.log('cardTitle');
// 	e.preventDefault();
// });

// cardContent.addEventListener('click', () => {
// 	console.log('cardContent');
// });

// card.addEventListener('click', function () {
// 	console.log('card');
// });

// col.addEventListener('click', () => {
// 	console.log('col');
// });

// row.addEventListener('click', () => {
// 	console.log('row');
// });

// container.addEventListener('click', () => {
// 	console.log('container');
// });

// body.addEventListener('click', () => {
// 	console.log('body');
// });

// EVENT DELEGATION event listener an a parent and then going down
// cuando se tienen varios elementos iguales no se puede crear un addEventlistener en
// ninguno de ellos porque solo toma en cuenta el primero, se crea el addEventListener
// en cualquier parent que los contenga a todos

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
	// const deleteItem = () => {
	// if (e.target.parentElement.className === 'delete-item secondary-content') {
	if (e.target.parentElement.classList.contains('delete-item')) {
		console.log('deleteItem');
		e.target.parentElement.parentElement.remove();
	}
}
