// Code goes here
function matrixBuilder(number){
    let myArray=[]
    let theFinalArray=[]
    for( let i=0; i<number; i++){
        let random = Math.round(Math.random())
        myArray.push(random)
        theFinalArray.push(myArray)
    }
 return theFinalArray
}



// do not change anything from this line down
console.log(matrixBuilder(5))