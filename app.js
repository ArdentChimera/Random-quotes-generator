let generateBtn = document.getElementById('generateBtn')
let quoteString = '';
let authorString = '';

fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
	.then(response => response.json())
	.then(data => {
		quoteString = data.quotes[0].text
		authorString = data.quotes[0].author
		console.log(quoteString);
		console.log(authorString);
		
	});