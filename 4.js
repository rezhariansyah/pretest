var array = [6,22,34,15,2,13,26,57,42,32]

var dataTerkecil = () => {
    array.sort((a,b)=>b-a)
    var terkecil = array[array.length-1]

    return `lowest number = ${terkecil}`
}

var dataTerbesar = () => {
    array.sort((a,b)=>a-b)
    var terbesar = array[array.length-1]

    return `highest number = ${terbesar}`
}


var ascending = () => {
    array.sort((a,b)=>a-b)
    
    return `Ascending Sort = ${array}`
}

var descending = () => {
    array.sort((a,b)=>b-a)
    
    return `Descending Sort = ${array}`
}

console.log(dataTerkecil())
console.log(dataTerbesar())
console.log(ascending())
console.log(descending())