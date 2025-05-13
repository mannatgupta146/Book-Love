const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

const secretCode = 'madam';
const nextPageUrl = 'main.html';

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();
	
	if (userInput === secretCode) {
		resultDiv.innerHTML = 'Madam Ji 💖 Redirecting...';
		setTimeout(() => {
			window.location.href = nextPageUrl;
		}, 1000);
	} else {
		resultDiv.innerHTML = 'Naa tum meri madam ji nahi hoo, kon hooo tum?';
		codeInput.value = '';
		codeInput.focus();
	}
});