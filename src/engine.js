import readlineSync from 'readline-sync'
import { greet } from './cli.js'

export function runGame(description, getRoundData) {
    console.log('Welcome to the Brain Games!')
    const userName = greet()
    console.log(description)

    for (let round = 1; round <= 3; round++) {
        const { question, correctAnswer } = getRoundData()
        console.log(`Question: ${question}`)
        const userAnswer = readlineSync.question('Your answer: ').trim()

        if (parseInt(userAnswer) !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${userName}!`)
            return
        }
        console.log('Correct!')
    }
    console.log(`Congratulations, ${userName}!`)
}