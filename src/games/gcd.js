import { runGame } from '../engine.js'

function gcd(a, b) {
  // здесь переменные используют модуль для перевода в положительное число
  a = Math.abs(a)
  b = Math.abs(b)

  // используем один из методов Евклида. Пока остаток не станет = 0, код продолжит выполнение
  while (b !== 0) {
    let temp = b
    b = a % b
    a = temp
  }
  return a
}

function getRoundData() {
  const a = Math.floor(Math.random() * 30) + 1
  const b = Math.floor(Math.random() * 30) + 1
  const question = `${a} ${b}`
  const correctAnswer = gcd(a, b)
  return { question, correctAnswer }
}

export default function playBrainGcd() {
  runGame('Find the greatest common divisor of given numbers.', getRoundData)
}
