// DOM selector for single elements

// document.getElementById()
const taskTitle = document.getElementById('task-title');
console.log(taskTitle);
console.log(taskTitle.id);

// Change styling
taskTitle.style.background = 'teal';
taskTitle.style.color = '#FFF';
taskTitle.style.padding = '10px';
// taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List'; // returns the full text contained in a node
taskTitle.innerText = 'List of Tasks'; // returns visble text contained in a node
const div = '<span style="color: red">Tax List in a span</span>';
taskTitle.innerHTML = div;

// document.querySelector()
document.querySelector('li').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'purple';
document.querySelector('li:nth-child(4)').textContent = 'Hello World !!!';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// document.getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
