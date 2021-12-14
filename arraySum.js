function arrSum (ar) {
  let sum = 0
  for (let i = 0; i < ar.length; i++) {
    console.log(ar[i])
    sum += ar[i]
  }
  console.log(sum)
}

arrSum([1, 2, 3, 4, 5])
