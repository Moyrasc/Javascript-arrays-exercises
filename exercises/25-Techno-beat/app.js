// Add your code here
function lyricsGenerator(arr){
    let aux ="";
    let contador = 0;
    for(let i of arr){
        if(i ===0){
            aux += "Boom "
            contador = 0
        }else{
            contador = contador + 1;
            if (contador == 3){
                aux+="!!!Break the base!!! "
                contador = 0
            }else{
                aux+= "Drop the base "
            }
            
            
        }

    }
    return aux
}


// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))