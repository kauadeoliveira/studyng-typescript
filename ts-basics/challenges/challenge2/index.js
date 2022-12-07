function myFilter(array, callback) {
   return array.reduce((accumulator, currentTarget) => callback(currentTarget) ? [...accumulator, currentTarget] : accumulator, [])
}


console.log(myFilter([1, 2, 3, 4 ,5], (value) => value % 2 === 0))