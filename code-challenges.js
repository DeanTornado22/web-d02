//1.	Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's
// corresponding value squared in the second array. The frequency of
// values must be the same
Object.defineProperties(Array.prototype, {
  count: {
    value: function (value) {
      return this.filter((x) => x == value).length
    },
  },
})

const sameSquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  else {
    const squareArr2 = arr2.map((el) => Math.pow(el, 2)) // Square array 2
    for (let el1 of arr1) {
      const el1CountInArr1 = arr1.count(el1) // Count el1 in array 1
      const el1CountInArr2 = arr2.count(el1) // Count el1 in array 2
      if (el1CountInArr1 !== el1CountInArr2) {
        return false
      } else {
        const squareEl1 = el1 * el1 // Square of el1
        if (squareArr2.includes(squareEl1)) return true
      }
    }
  }
}
const arr = [1, 1, 4, 2]
// const arr2 = [3, 5, 4, 2]
// const arr2 = [3, 2, 4, 2]
const arr2 = [1, 4, 2, 1]
console.log(arr.map((el) => Math.pow(el, 2)))
console.log(sameSquared(arr, arr2))
