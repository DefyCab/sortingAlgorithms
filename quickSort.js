const array = [8, 6, 2, 1, 45, 67, 3, 45, 98, 10, 91, 101, 13, 23]

function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  // - 1 eftersom sista positionen är en mindre än längden.
  let pivot = arr[arr.length - 1]
  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else if (arr[i] > pivot) {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(array))
