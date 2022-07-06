let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(newArray){
    let odd = [];
    let even = [];
    
    for(i of newArray){
        
        if(i % 2 == 0){
            even.push(i)
        }
        else{
            odd.push(i)
        }
        
    }
    let lastArray = [...odd,...even]
  
    return lastArray

}
console.log(mergeTwoList(list_of_numbers))
