const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragover);
	placeholder.addEventListener('dragenter', dragenter);
	placeholder.addEventListener('dragleave', dragleave);
	placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event) {
	event.target.classList.add('hold');
	setTimeout(() => event.target.classList.add('hide')); // Прячет остающейся экземпляр перемещаемого элемента
}
function dragend(event) {
	// event.target.classList.remove('hold'); \ первый вариант
	// event.target.classList.remove('hide'); |
	// event.target.classList.remove('hide', 'hold'); | второй вариант
	event.target.className = 'item'; // третий вариант, просто пересоздаётся параметр class
}

function dragover(event) {
	// отключает поведение по умолчанию
	event.preventDefault();
}

function dragenter(event) {
	event.target.classList.add('hovered');
}

function dragleave(event) {
	event.target.classList.remove('hovered');
}

function dragdrop(event) {
	event.target.classList.remove('hovered');
	event.target.append(item);
}
