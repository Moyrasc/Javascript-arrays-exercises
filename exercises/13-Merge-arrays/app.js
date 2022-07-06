var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    for(i in firstArray){
        newArray.push(firstArray[i])
    }
    for(x in secondArray){
        newArray.push(secondArray[x])
    }

    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));