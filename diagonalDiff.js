function diagonalDifference (arr) {
  let sumLeft = 0,
    sumRight = 0
  let num = 1
  if (num % 2 == 1) {
    for (let i = 0; i < arr.length; i++) {
      sumLeft += arr[i][i]
      sumRight += arr[i][arr.length - i - 1]
    }
    console.log(sumLeft + ' ' + sumRight)

    let diaDiff = Math.abs(sumLeft - sumRight)
    console.log(diaDiff)
  }
  console.log('cant do it')
}

diagonalDifference([
  [11, 1, 8],
  [2, 8, 5],
  [0, 9, 7],
  [4, 5, 6]
])
