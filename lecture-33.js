// Local and session storage

// Local storage: will stay until you manually clear it out even if the browser is closed
// Session storgae: will go away once your browser is closed (session ends)
// To save turn into a string with JSON.stringify()
// To use parse it back with JSON.parse()

// set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
// set session storage item
// sessionStorage.setItem('name', 'Julia');

// remove from storage
// localStorage.removeItem('name');

// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear();

// console.log(name, age);

document.querySelector('form').addEventListener('submit', (e) => {
	// debugger;
	e.preventDefault();
	const task = document.querySelector('#task').value;

	let tasks;

	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));

	alert('Task saved');
});

console.log(
	'0',
	typeof localStorage.getItem('tasks'),
	localStorage.getItem('tasks')
);

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach((task, i) => {
	console.log(`${i + 1} task: ${task}`);
});
