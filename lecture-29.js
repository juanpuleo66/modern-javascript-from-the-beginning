// Event listeners and the event object

const btnClearTask = document.querySelector('.clear-tasks');
// btnClearTask.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.error('btnClearTask-e:', e);
// });
// btnClearTask.setAttribute('title', 'Estes es el titulo para este boton');
btnClearTask.setAttribute('id', 'id-btn');
const innerText = btnClearTask.innerText;
console.error('innerText:', innerText);

btnClearTask.addEventListener('click', onClick);

function onClick(e) {
	// const onClick = (e) => {
	e.preventDefault();
	console.error('onClick-e:', e);

	let val;
	// Event target element
	val = e.target;
	val = e.target.id;
	val = e.target.className;
	val = e.target.classList;
	e.target.innerText = 'Hello';

	// Event type
	val = e.type;

	// Timestamp
	val = e.timestamp;

	// Coord event realtive to the window
	val = e.clientY;
	val = e.clientX;

	// Coord event realtive to the element
	val = e.offsetY;
	val = e.offsetX;

	console.log(val);
}
