// keyboard and input events

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('#task-title');

// clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);
// function runEvent(e) {
// 	e.preventDefault();
// 	console.error(`Event Type: ${e.type}`);
// 	console.error('Value:', taskInput.value);
// }

// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('copy', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
taskInput.addEventListener('input', runEvent);

function runEvent(e) {
	console.error(`Event Type: ${e.type}`);
	console.error('Value:', e.target.value);
	// heading.innerText = taskInput.value;
}

const selecetList = document.querySelector('select');
console.log(selecetList);
selecetList.addEventListener('change', (e) => runEvent(e));
