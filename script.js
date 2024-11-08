const interjections = ["dang it", "thanks", "wow", "oops", "cool"];
const techPersonalities = ["Steve Jobs", "Jeff Bezos", "Elon Musk", "Bill Gates", "Mark Zuckerberg"];

function getRandomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function generateInterjection() {
	const randomInterjection = getRandomElement(interjections);
	const randomPersonality = getRandomElement(techPersonalities);
	const interjectionElement = document.getElementById("interjection");
	interjectionElement.textContent = `${randomInterjection}, ${randomPersonality}`;
}

generateInterjection();