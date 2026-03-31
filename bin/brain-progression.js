#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { greet } from '../src/cli.js'

function progressionQuestion() {
  // Задаю параметры для прогрессии
  // NOSONAR
  const start = Math.floor(Math.random() * 10) + 1
  const step = Math.floor(Math.random() * 2) + 6
  const length = Math.floor(Math.random() * 6) + 5

  // задаю массив, который по циклу будет добавлять шаги по выполнению
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }

  // Далее выбираем случайный индекс для пропуска
  const hiddenIndex = Math.floor(Math.random() * length)
  const correctAnswer = progression[hiddenIndex]

  // строка для вывода
  const partsQuestion = []
  for (let i = 0; i < progression.length; i++) {
    if (i === hiddenIndex) {
      partsQuestion.push('..')
    }
    else {
      partsQuestion.push(progression[i])
    }
  }
  // создаю обьект, где будет вопрос и правильный ответ
  return {
    question: partsQuestion,
    answer: correctAnswer,
  }
}

function playBrainProgression() {
  console.log('Welcome to the Brain Games!')
  const userName = greet()
  console.log('What number is missing in the progression?')

  for (let round = 1; round < 4; round++) {
    const { question, answer } = progressionQuestion()

    console.log(`Question: ${question.join(' ')}`)
    const userAnswer = readlineSync.question(`Your answer: `)

    if (parseInt(userAnswer) === answer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`)
      console.log(`Let's try again, ${userName}`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
playBrainProgression()
