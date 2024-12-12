import chalk from "chalk";

const myUnusedVariable = 'test1'
myUnusedVariable === 'test2' ? console.log('It works') : console.log('It does not work')

console.log(chalk.blue('Also making a conflict here')) // use the changes from main