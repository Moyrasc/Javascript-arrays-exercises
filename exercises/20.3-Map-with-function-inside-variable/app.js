let names = ['Alice','Bob','Marry','Joe','Hilary','Stevia','Dylan'];

let prepender = function(name){
	return 'My name is: '+name;
};

//your code here
let myNewArray = names.map(prepender);
console.log(myNewArray)
