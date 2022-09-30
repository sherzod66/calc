const calcContent = document.querySelector('.calc__body-grid');
const screen = document.querySelector('.calc__null');
const orange = document.querySelectorAll('.orange')

let a = '';
let b = '';
let numAction = '';
let c = '';

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['/', 'X', '-', '+',];


calcContent.addEventListener("click", valueButton);



function valueButton(event) {
	if (event.target.closest('.calc__body__column')) {
		let examination = event.target.textContent;
		if (number.includes(examination)) {
			if (b == '' && numAction == '') {
				if (a.length < 16) {
					a += examination;
					screen.innerHTML = a;
				}

			} else {
				if (b.length < 16) {
					b += examination;
					screen.innerHTML = b;
					console.log(`Это = ${b}`);
				}
			}
		} else if (event.target.textContent === 'ac') {
			a = '';
			numAction = '';
			b = '';
			screen.innerHTML = '0';
		} else if (action.includes(examination)) {
			numAction = examination;
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
				numAction = '';
				a = c;
				b = '';
			}
			if (numAction === '+') {
				c = +a + +b;
				screen.innerHTML = c;
				numAction = '';
				a = c;
				b = '';

			}
			if (numAction === '-') {
				c = +a - +b;
				screen.innerHTML = c;
				numAction = '';
				a = c;
				b = '';
			}
		} else if (event.target.textContent === '+/-') {
			if (b == '' && numAction == '') {
				let minus = a;
				a = '-' + minus;
				screen.innerHTML = a;
			} else {
				let minus = b
				b = '-' + minus;
				screen.innerHTML = b;
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
