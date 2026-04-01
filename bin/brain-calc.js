#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { greet } from '../src/cli.js'

const ROUNDS_COUNT = 3 // Константа для раундов
const arrOperators = ['+', '-', '*']

function playBrainCalc() {
  console.log('Welcome to the Brain Games!')
  const userName = greet()
  console.log('What is the result of the expression?')

  for (let round = 1; round <= ROUNDS_COUNT; round++) {
    // использую цикл для генерации числа от 0 до 30
    const num1 = Math.floor(Math.random() * 30) + 1
    const num2 = Math.floor(Math.random() * 30) + 1
    // константа ниже принимает на себя рандомный выбор операторов из массива доступных операторов
    const operator = arrOperators[Math.floor(Math.random() * arrOperators.length)]
    const correctAnswer = calculate(num1, num2, operator)

    console.log(`Question: ${num1} ${operator} ${num2}`)
    const userAnswer = readlineSync.question(`Your answer: `).trim()

    if (parseInt(userAnswer) === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
playBrainCalc()

// использую условный оператор switch. Он принимает на себя числа и константу с выбором рандомных операторов.
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
    default: return null
  }
}
