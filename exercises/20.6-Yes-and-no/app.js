let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let wikiWoko = theBools.map(function(number){

    if(number === 1){
        return "wiki"
    }
    else {
        return "woko"
    }

})
console.log(wikiWoko)