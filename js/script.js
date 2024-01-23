const calcContent = document.querySelector('.calc__body-grid');
const screen = document.querySelector('.calc__null');
const orange = document.querySelectorAll('.orange')
const minus = document.querySelector('._minus');

let a = '';
let a2 = '';
let b2 = '';
let b = '';
let numAction = '';
let c = '';


const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['/', 'X', '-', '+',];


calcContent.addEventListener("click", valueButton);




function valueButton(event) {
	if (event.target.closest('.calc__body__column')) {
		let examination = new Intl.NumberFormat().format(+event.target.textContent);
		if (number.includes(examination)) {
			if (b == '' && numAction == '') {
				if (a.length < 19) {
					a += examination;
					a2 += examination;
					screen.innerHTML = a;
				}
			} else {
				if (b.length < 16) {
					b += examination;
					b2 += examination;
					screen.innerHTML = b;
					console.log(`Это = ${b}`);
				}
			}
		} else if (event.target.textContent === 'ac') {
			a = '';
			a2 = '';
			numAction = '';
			b = '';
			b2 = '';
			xz = '';
			screen.innerHTML = '0';
			minus.classList.remove('_remove__minus');
		} else if (action.includes(examination)) {
			numAction = examination;
			console.log(numAction);
		} else if (event.target.textContent === '=') {
			if (numAction === '/') {
				c = +a / +b;
				screen.innerHTML = c;
				console.log(c);
				numAction = '';
				a = c;
				b = '';
			}
			if (numAction === 'X') {
				c = +a * +b;
				screen.innerHTML = c;
				console.log(c);
				numAction = '';
				a = c;
				b = '';
			}
			if (numAction === '+') {
				c = +a + +b;
				screen.innerHTML = c;
				console.log(c);
				numAction = '';
				a = c;
				b = '';

			}
			if (numAction === '-') {
				c = +a - +b;
				screen.innerHTML = c;
				console.log(c);
				numAction = '';
				a = c;
				b = '';
			}
		} else if (event.target.textContent == '+/-') {
			minus.classList.toggle('_remove__minus');
			if (b == '' && numAction == '') {
				if (minus.classList.contains('_remove__minus')) {
					let minusL = a;
					a = '-' + minusL;
					console.log(`a2 = ${a2}`);
					screen.innerHTML = a;
				} else {
					a = a2;
					screen.innerHTML = a;
				}

			} else {
				if (minus.classList.contains('_remove__minus')) {
					let minus = b
					b = '-' + minus;
					console.log(`xz = ${b2}`);
					screen.innerHTML = b;
				} else {
					b = b2;
					screen.innerHTML = b;
				}

			}
		} else if (event.target.textContent === '%') {
			if (b == '' && numAction == '') {
				let precent = a;
				a = +precent / 100;
				screen.innerHTML = a;
			} else {
				let precent = b;
				b = +precent / 100;
				screen.innerHTML = b;
			}
		}

	}

}


