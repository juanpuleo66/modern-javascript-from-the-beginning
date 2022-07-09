// Mouse events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Event handler
const runEvent = (e) => {
	console.error(`EVENT TYPE: ${e.type}`);
};

const runEventCard = (e) => {
	console.error(`EVENT TYPE: ${e.type}`);
	heading.innerText = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
	document.body.style.backgroundColor = `rgba(${e.offsetX}, ${e.offsetY}, 40  )`;
};

clearBtn.addEventListener('click', runEvent);
card.addEventListener('mousemove', runEventCard);
heading.addEventListener('dblclick', runEvent);

// Events: mouseup, mousedown, mouseenter, mouseleave, mouseover, mouseout, mousemove
