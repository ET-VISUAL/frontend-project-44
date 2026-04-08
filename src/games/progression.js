import { runGame } from '../engine.js'

function getRoundData() {
  // Задаю параметры для прогрессии
  const start = Math.floor(Math.random() * 20) + 1
  const step = Math.floor(Math.random() * 3) + 9
  const length = Math.floor(Math.random() * 8) + 5

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
  const question = partsQuestion.join(' ')
  return { question, correctAnswer }
}

export default function playBrainProgression() {
  runGame('What number is missing in the progression?', getRoundData)
}
