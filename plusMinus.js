function plusMinus (arr) {
  let pos = 0,
    neg = 0,
    zero = 0,
    length = arr.length
  arr.forEach(n => {
    console.log(n)
    if (n > 0) pos++
    else if (n < 0) neg++
    else zero++
  })
  // console.log((pos / length).toFixed(6))
  // console.log((neg / length).toFixed(6))
  // console.log((zero / length).toFixed(6))
}

plusMinus([-4, 3, -9, 0, 4, 1])
