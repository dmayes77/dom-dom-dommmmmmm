document.addEventListener('DOMContentLoaded', function() {
	let div = document.createElement('div');
	let button = document.createElement('button');
	let btnText = document.createTextNode('Add Square');
	button.appendChild(btnText);
	div.appendChild(button);
	document.body.appendChild(div);

	let id = 1;
	button.addEventListener('click', function() {
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.className = 'black-square';
		div.setAttribute('id', id);
		id++;

		function getRandomColor() {
			var r = Math.floor(Math.random() * 256);
			var g = Math.floor(Math.random() * 256);
			var b = Math.floor(Math.random() * 256);
			return 'rgb(' + r + ', ' + g + ', ' + b + ')';
		}

		div.addEventListener('click', function() {
			div.style.backgroundColor = getRandomColor();
		});

		div.addEventListener('dblclick', function() {
			var id = Number(this.id);
			if (id % 2 === 0 && this.nextSibling) {
					this.nextSibling.remove();
				} else if (id % 3 === 0 && this.previousSibling.className === 'black-square'){
					this.previousSibling.remove();
				} else {
					alert('There is nothing to remove!')
				}
		});

		div.addEventListener('mouseenter', function() {
			let span = document.createElement('span');
			let divText = document.createTextNode(this.id);
			span.appendChild(divText);
			div.appendChild(span);

			div.addEventListener('mouseleave', function() {
				div.innerText = ' ';
				// div.style.backgroundColor = 'black';
			});
		});
	});
});
