//Object destructuring

// const person = {
// 	age: 35,
// 	location: {
// 		city: "Haarlem",
// 		temp: 30
// 	}
// };

// const { name: firstname = "Felix", age } = person;

// console.log(`${firstname} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (temperature && city) {
// 	console.log(`It's ${temperature} degrees in ${city}`);
// }

// const book = {
// 	title: "Ego is the enemy",
// 	author: "Ryan Holiday",
// 	publisher: {
// 		name: "Penguin"
// 	}
// };

// const { name: publisherName = "Unknown" } = book.publisher;

// console.log(publisherName);

//Array destructuring

const address = ["Bloemertstraat 1B", "Haarlem", "NH", "2011JP"];

const [, city, state = "NH", zipcode] = address;

console.log(`You are in ${city}, ${state}.`);
