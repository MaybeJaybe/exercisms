const question = (answer: string): boolean => {
  return answer.endsWith('?')
}
const yell = (answer: string): boolean => {
  return /[A-Z]/.test(answer) && answer === answer.toUpperCase()
}
const nothing = (answer: string): boolean => {
  return answer.length === 0 || /^\s*$/.test(answer)
}

export function hey(message: string): string {
  if (yell(message) && question(message)) {
    return 'Calm down, I know what I\'m doing!'
  }
  if (yell(message)) {
    return 'Whoa, chill out!'
  }
  if (nothing(message)) {
    return 'Fine. Be that way!'
  }
  if (question(message.trimRight())) {
    return 'Sure.'
  }
    return 'Whatever.'
}