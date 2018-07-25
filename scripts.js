var	numSquares = 9,
	colorList = generateRandomColor(numSquares);

var squares = document.getElementsByClassName('square'),
	colorDisplay = document.getElementById('colorDisplay'),
	pickedColor = pickRandomColor(),
	message = document.getElementById('message'),
	h1 = document.querySelector('h1'),
	newGame = document.getElementById('newGame'),
	mode = document.querySelectorAll('.mode'),
	easy = document.getElementById('easy'),
	hard = document.getElementById('hard');

init();

function init() {
	// DISPLAY PICKED COLOR
	colorDisplay.textContent = pickedColor;
	// SET UP MODE BUTTONS
	setupMode();
	// SET UP SQUARES
	setupSquares();
	// RESET EEVERYTHING
	resetFunc();
} 

// New Game Button
newGame.addEventListener('click', function () {
	resetFunc();
})

// Setup Mode Function
function setupMode () {
	for (var i = 0; i < mode.length; i++) {
		mode[i].addEventListener('click', function () {
			mode[0].classList.remove('selected');
			mode[1].classList.remove('selected');
			this.classList.toggle('selected');
			this.textContent === 'Easy' ? numSquares = 6: numSquares = 9;
			/*
			if (this.textContent === 'Easy') {
				numSquares = 6;
			} else if (this.textContent === 'Hard') {
				numSquares = 9;
			}
			*/
			resetFunc();
		})
	} 
}

// Setup Squares Function
function setupSquares () {
	for (var i = 0; i < squares.length; i++) {
		// Add Initial Colors
		squares[i].style.background = colorList[i];
		// Add Click Events
		squares[i].addEventListener('click', function () {
			// Grab Color of Clicked Square
			var clickedColor = this.style.backgroundColor;
			// Compare Color to Picked Color
			if (clickedColor === pickedColor) {
				message.textContent = 'Correct';
				changeColorAllSquares(clickedColor);
				h1.style.background = clickedColor;
				newGame.textContent = 'Play Again';
			} else {
				this.style.backgroundColor = '#232323';
				message.textContent = 'Try Again';
			}
		});
	}		
}

// Change Color of All Squares Function
function changeColorAllSquares(color) {
	// Loop Through All Squares
	for (var i = 0; i < squares.length; i++) {
		// Change Each Color to Match Picked Color
		squares[i].style.background = color;
	}
}

// Pick a Random Color Function 
function pickRandomColor () {
	var random = Math.floor(Math.random() * colorList.length);
	return colorList[random];
}

// Generate Random Colors List Function
function generateRandomColor(num) {
	// Make an array
	var arr = [];
	// Add num random colors to array
	for (var i = 0; i < num; i++) {
		// Pick a "red" from 0-255
		var r = Math.floor(Math.random() * 256)
		// Pick a "green" from 0-255
		var g = Math.floor(Math.random() * 256)
		// Pick a "blue" from 0-255
		var b = Math.floor(Math.random() * 256)
		// Return RGB
		var rgb =  'rgb(' + r +', ' + g + ', ' + b + ')';		
		// Push that RGB into array
		arr.push(rgb)
	}
	// Return that array
	return arr;
}

// Reset All Function
function resetFunc() {
	newGame.textContent = 'New Colors';
	// Generate all new colors
	colorList = generateRandomColor(numSquares);
	// Pick a new random color from array
	pickedColor = pickRandomColor();
	// Display that color in RGB
	colorDisplay.textContent = pickedColor;
	// Change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colorList[i]) {
			squares[i].style.display = 'block';
			squares[i].style.background = colorList[i];			
		} else {
			squares[i].style.display = 'none';
		}
	}
	// Change h1 background
	h1.style.backgroundColor = 'steelblue';
	// Hide message
	message.textContent = '';
}



// Reference for easy and hard button code
/* 
easy.addEventListener('click', function () {
	newGame.textContent = 'New Colors';
	easy.classList.toggle('selected');
	hard.classList.remove('selected');
	numSquares = 6;
	//Generate 6 new colors
	colorList = generateRandomColor(numSquares);
	//Pick a random color
	pickedColor = pickRandomColor();
	//Display that color in RGB
	colorDisplay.textContent = pickedColor;
	//Change colors of squares
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.background = colorList[i];
	}
	//Change h1 background
	h1.style.backgroundColor = 'steelblue'	
	//Hide last three squares
	for (var i = 6; i < 9; i++) {
		squares[i].style.display = 'none';
	}
})
hard.addEventListener('click', function () {
	newGame.textContent = 'New Colors';
	hard.classList.toggle('selected');
	easy.classList.remove('selected');	
	numSquares = 9;	
	//Generate 6 new colors
	colorList = generateRandomColor(numSquares);
	//Pick a random color
	pickedColor = pickRandomColor();
	//Display that color in RGB
	colorDisplay.textContent = pickedColor;
	//Change h1 background
	h1.style.backgroundColor = 'steelblue'	
	//Change colors of squares
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.background = colorList[i];
		//Reveal hidden squares
		squares[i].style.display = 'block';		
	}	
})
*/