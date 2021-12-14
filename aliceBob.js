function compareTriplets (a, b) {
  let pointsOfAlice = 0
  let pointsOfBob = 0
  for (let i = 0; i <= 3; i++) {
    if (a[i] > b[i]) {
      pointsOfAlice += 1
    }
    if (a[i] < b[i]) {
      pointsOfBob += 1
    }
  }
  console.log(pointsOfAlice, pointsOfBob)
}

compareTriplets([17, 28, 30], [99, 16, 8])
