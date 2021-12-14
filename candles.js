function birthdayCakeCandles (candles) {
  let max = Math.max(...candles)

  //filter function will return an array of the filtered values
  //here it is filtering all the value that equal to the max value
  let n = candles.filter(item => item === max).length
  console.log(n)
}

birthdayCakeCandles([3, 3, 1, 3])
