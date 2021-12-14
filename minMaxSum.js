function miniMaxSum (arr) {
  //reduce fn will add current value with previous value
  let sum = arr.reduce((a, b) => a + b)

  let maxSum = sum - Math.max(...arr)
  let minSum = sum - Math.min(...arr)

  console.log(maxSum, minSum)
}

miniMaxSum([1, 2, 3, 4, 5])
