//code for combinations of range values
// (2-4)(4-5),(4-5)

const listOfRanges = [
  { start: 2, end: 4 }, // 0
  { start: 1, end: 4 }, // 1
  { start: 4, end: 5 } // 2
]

function example (listRange, index = 0, temp = '', prevStart) {
  const len = listRange.length // 3

  if (index < len) {
    const { start, end } = listRange[index]

    for (let i = start; i <= end; i++) {
      if (prevStart && prevStart > i) {
        i = prevStart
      }
      const newTemp = temp + i
      example(listRange, index + 1, newTemp, i)
    }
  } else {
    console.log(temp)
  }
}

// { start: 2, end: 4 }
// { start: 4, end: 5 }
// { start: 4, end: 5 }

example(listOfRanges, 0)
