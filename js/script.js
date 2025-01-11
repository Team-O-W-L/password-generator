const year = document.getElementById("year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
const lettersSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbersSet = "0123456789";
const symbolsSet = "!@#$%^&*()_+[]{}|;:,.<>?";
const generateBtn = document.getElementById("generate-pw-btn");
const pwText = document.getElementById("pw-text");
const digitsSelect = document.getElementById("digits");
const lettersToggle = document.getElementById("letters-toggle");
const numbersToggle = document.getElementById("numbers-toggle");
const symbolsToggle = document.getElementById("symbols-toggle");

generateBtn.addEventListener("click", () => {
	const pwLength = digitsSelect.value;
	const letters = lettersToggle.checked;
	const numbers = numbersToggle.checked;
	const symbols = symbolsToggle.checked;
	const password = generatePassword(pwLength, letters, numbers, symbols);
	pwText.textContent = password;
});

function getRandomChar(charSet) {
	const index = Math.floor(Math.random() * charSet.length);
	return charSet[index];
}

function getRandomLetter() {
	return getRandomChar(lettersSet);
}

function getRandomNumber() {
	return getRandomChar(numbersSet);
}

function getRandomSymbol() {
	return getRandomChar(symbolsSet);
}

function generatePassword(pwLength, letters, numbers, symbols) {
	const Password = [];
	if (letters) {
		Password.push(getRandomLetter());
	}
	if (numbers) {
		Password.push(getRandomNumber());
	}
	if (symbols) {
		Password.push(getRandomSymbol());
	}
	let allChars = "";
	if (letters) allChars += lettersSet;
	if (numbers) allChars += numbersSet;
	if (symbols) allChars += symbolsSet;
	while (Password.length < pwLength) {
		const char = getRandomChar(allChars);
		Password.push(char);
	}
	return Password.join("");
}

function copyPassword() {
	navigator.clipboard.writeText(pwText.textContent);
}

function copyPassword() {
	navigator.clipboard
		.writeText(pwText.textContent)
		.then(() => {
			alert("Password copied to clipboard");
		})
		.catch((err) => {
			alert("Failed to copy password to clipboard: ", err);
		});
}
