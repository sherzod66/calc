const calcContent = document.querySelector('.calc__body-grid');
const screen = document.querySelector('.calc__null');
let a = '';
let b = '';
let numAction = '';
let c = '';
/*const firstNumber = [
	{ number: a }
]*/

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['/', 'X', '-', '+',];


calcContent.addEventListener("click", valueButton);



function valueButton(event) {
	if (event.target.closest('.calc__body__column')) {
		let examination = event.target.textContent;
		if (number.includes(examination)) {
			if (b == '' && numAction == '') {
				a += examination;
				screen.innerHTML = a;
			} else {
				b += examination;
				screen.innerHTML = b;
				console.log(`Это = ${b}`);
			}
		} else if (event.target.textContent === 'ac') {
			console.log('Очистка');
			a = '';
			numAction = '';
			b = '';
			screen.innerHTML = '0';
		} else if (action.includes(examination)) {
			numAction = examination;
			console.log(numAction);
		} else if (event.target.textContent === '=') {
			if (numAction === '/') {
				c = +a / +b;
				screen.innerHTML = c;
				console.log(c);
				numAction = '';
				c = a;
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
		}

	}
	console.log(`Это а= ${a}`);
}

