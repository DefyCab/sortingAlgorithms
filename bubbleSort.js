const array = [8, 6, 2, 1, 45, 67, 3, 45, 98, 10, 91, 101, 13, 23]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = 0; k < arr.length - 1 - i; k++) {
      if (arr[k + 1] < arr[k]) {
        let temp = arr[k + 1]
        arr[k + 1] = arr[k]
        arr[k] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort(array))
