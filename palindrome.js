function palindrome (word) {
  let stack = []

  let rword = ''
  for (let i = 0; i < word.length; i++) {
    stack.push(word[i])
  }

  for (let i = 0; i < word.length; i++) {
    rword += stack.pop()
  }

  if (rword === word) {
    console.log('this word is a palindrome')
  } else {
    console.log('this word is not palindrome')
  }
}

palindrome('sample')
