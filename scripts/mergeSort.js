const array = [8, 6, 2, 1, 45, 67, 3, 45, 98, 10, 91, 101, 13, 23]

function mergeSort(arr) {
  //base-case for recursion
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  // lefArr får element från 0 till mitten
  const leftArr = arr.slice(0, mid)
  // rightArr får element från mitten och framåt.
  const rightArr = arr.slice(mid)

  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftarr, rightarr) {
  const sortedArr = []
  // while kollar om båda är tomma, först då slutar loopen
  while (leftarr.length && rightarr.length) {
    if (leftarr[0] <= rightarr[0]) {
      // leftarr.shift() hämtar det första elementet och returnerar det.
      sortedArr.push(leftarr.shift())
    } else {
      sortedArr.push(rightarr.shift())
    }
  }
  return [...sortedArr, ...leftarr, ...rightarr]
}
