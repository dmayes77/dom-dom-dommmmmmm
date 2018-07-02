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

		div.addEventListener('mouseenter', function() {
			let span = document.createElement('span');
			let divText = document.createTextNode(this.id);
			span.appendChild(divText);
			div.appendChild(span);
			
			div.addEventListener('mouseleave', function() {
				div.innerText = " ";
			});
		});
	});
});
