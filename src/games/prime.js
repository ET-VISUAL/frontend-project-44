import { runGame } from '../engine.js'

function isPrime(num) {
  if (num < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function randomJustNumber() {
  return Math.floor(Math.random() * 100) + 2
}

function getRoundData() {
  const randomNumber = randomJustNumber()
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'
  const question = String(randomNumber)
  return { question, correctAnswer }
}

export default function playBrainPrime() {
  runGame('Answer "yes" if given number is prime. Otherwise answer "no".', getRoundData)
}
