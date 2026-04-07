import { runGame } from '../engine.js'

const arrOperators = ['+', '-', '*']

// использую условный оператор switch. Он принимает на себя числа и константу с выбором рандомных операторов.
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '*': return num1 * num2
    default: return null
  }
}

function getRoundData() {
  // использую цикл для генерации числа от 0 до 30
  const num1 = Math.floor(Math.random() * 30) + 1
  const num2 = Math.floor(Math.random() * 30) + 1
  // константа ниже принимает на себя рандомный выбор операторов из массива доступных операторов
  const operator = arrOperators[Math.floor(Math.random() * arrOperators.length)]
  const correctAnswer = calculate(num1, num2, operator)
  const question = `${num1} ${operator} ${num2}`
  return { question, correctAnswer }
}

export default function playBrainCalc() {
  runGame('What is the result of the expression?', getRoundData)
}
