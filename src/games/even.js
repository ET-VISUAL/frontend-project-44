import { runGame } from '../engine.js'

// функция принимает на вход то число, которое делится на два без остатка, тоесть четное.
function isEven(number) {
  return number % 2 === 0
}

// функция возвращает случайную генерацию
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRoundData() {
  const randomNumber = getRandomNumber(1, 100)
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'
  const question = String(randomNumber)
  return { question, correctAnswer }
}

export default function playBrainEven() {
  runGame('Answer "yes" if the number is even, otherwise answer "no".', getRoundData)
}
