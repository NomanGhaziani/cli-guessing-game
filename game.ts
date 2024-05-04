#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to Noman Ghaziani - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([{
    name: "user Guessed Number",
    type: "number",
    message:"Enter your guess number(number limit 1 to 5)",
},
]);
if(answer.userGuessedNumber ===randomNumber){
console.log("congratulation ! you guess a correct number.");
}
else{
    console.log("sorry you guess a worng number");
}