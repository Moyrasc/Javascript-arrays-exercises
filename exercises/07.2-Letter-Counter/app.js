let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

function contarLetras(frase){
    let myFrase = frase.replace(/\s+/g, '').toLowerCase();
    //console.log(myFrase);
    for(let i in myFrase){
        console.log(myFrase[i])
        if(!counts[myFrase[i]]){
            counts[myFrase[i]] =1;
        }
        else{
            counts[myFrase[i]]+=1;
        }
    }

}
contarLetras(par);

console.log(counts);
