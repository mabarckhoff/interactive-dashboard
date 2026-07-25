let answers = [
	'Seems unlikely.',
	'Not a chance.',
	'Ask again later.',
	'Signs point to yes.',
	'No.',
	'Yes.',
	'Nope.'
]

let question = document.getElementById("question");
let ball = document.getElementById("ball");
let reset = document.getElementById("reset");
let circle = document.getElementById("circle" );


// No question entered
ball.addEventListener('mousedown', () => {
	if(question.value == '') {
		alert("Please enter a question!");
	}
	else {
		displayAnswer();
	}
})

// Clears the answer and hides the circle
reset.addEventListener('click', () => {
	circle.style.display = 'none';

})

// display answer on the 8-ball
function displayAnswer() {
	let index = Math.floor(Math.random() * answers.length);
	let answer = answers[index];

	circle.style.display = 'inline-block';
	circle.innerHTML = '<br><br><br>' + answer  ;
}

// new response button
let addResponse = document.getElementById("addResponse");

addResponse.addEventListener('click', () => {
	let newResponse = prompt("Enter a new 8-ball response:");
	if(newResponse) {
		answers.push(newResponse);
		console.log("New response added: " + newResponse);
		console.log("There is a total of: " + answers.length + " responses.");
	}
});
