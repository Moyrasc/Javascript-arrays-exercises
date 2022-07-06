var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below

function deletePerson(deletename){
    let newArray = people.filter(elemento => elemento !== deletename);
    return newArray
}


console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
