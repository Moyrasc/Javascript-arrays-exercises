let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];


function getEdad(birthDate){
	let today = new Date();
	let year = today.getFullYear() - birthDate.getFullYear();
	let month = today.getMonth() - birthDate.getMonth();
	if(month < 0 || (month === 0 && today.getDate()< birthDate.getDate())){
		year --;
	}
	return year;


}
let simplifier = function(person){
	let age = getEdad(person.birthDate)
	return `Hello, my name is ${person.name} and I am ${age} years old`
};

console.log(people.map(simplifier));