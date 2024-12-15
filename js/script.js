const characters =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";

let password = document.getElementById("pw");

function sixDigit() {
	let newPassword = "";
	for (i = 0; i < 6; i++) {
		newPassword += characters[Math.floor(Math.random() * characters.length)];
	}
	password.textContent = newPassword;
}

function eightDigit() {
	let newPassword = "";
	for (let i = 0; i < 8; i++) {
		newPassword += characters[Math.floor(Math.random() * characters.length)];
	}
	password.textContent = newPassword;
}

function tenDigit() {
	let newPassword = "";
	for (let i = 0; i < 10; i++) {
		newPassword += characters[Math.floor(Math.random() * characters.length)];
	}
	password.textContent = newPassword;
}

function twelveDigit() {
	let newPassword = "";
	for (let i = 0; i < 12; i++) {
		newPassword += characters[Math.floor(Math.random() * characters.length)];
	}
	password.textContent = newPassword;
}

function clearPassword() {
	password.textContent = "";
}

function copyPassword() {
	const textToCopy = password.textContent;
	navigator.clipboard
		.writeText(textToCopy)
		.then(() => {
			alert("Password copied to clipboard!");
		})
		.catch((err) => {
			console.error("Failed to copy: ", err);
		});
}
