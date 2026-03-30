#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { greet } from '../src/cli.js'

const ROUNDS_COUNT = 3 // константа для раундов

// функция принимает на вход то число, которое делится на два без остатка, тоесть четное.
function isEven(number) {
  return number % 2 === 0
}

// функция возвращает случайную генерацию
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function playBrainEven() {
  console.log('Welcome to the Brain Games!')
  const userName = greet()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let round = 1; round <= ROUNDS_COUNT; round += 1) {
    const randomNumber = getRandomNumber(1, 100)
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no'

    console.log(`Question: ${randomNumber}`)
    // константа ниже спрашивает ответ юзера, а методы помогают распределить правильность строк trim, и буквы в нижнем регистре toLowerCase
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase()

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}

playBrainEven()
