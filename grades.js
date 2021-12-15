function gradingStudents (grades) {
  return grades.map(function (grade) {
    console.log(grade >= 38 && grade % 5 >= 3 ? grade + 5 - (grade % 5) : grade)
  })
}

gradingStudents([73, 67, 38, 33])
