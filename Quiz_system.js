"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var quiz = await inquirer_1.default.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Typescript is a typed superset of ?",
        choices: ["C#", "Java", "JavaScript", "ReactJS"]
    },
    {
        name: "question_2",
        type: "list",
        message: "TypeScript file compiled into ?",
        choices: ["JavaScript", "VBScript", "TypeScript", "None of the above"]
    },
    {
        name: "question_3",
        type: "list",
        message: "What are the three main `simple types` in Typescript ? ",
        choices: [" 1.Array 2.Object 3.Boolean ", " 1. Boolean 2. Number 3. String ", " 1. Object 2. String 3. Number ", " 1. Object 2. Array 3. Symbol "]
    },
    {
        name: "question_4",
        type: "list",
        message: "Which of the following statement declares a variable in TypeScript ?",
        choices: [" let myVar = 123; ", " var myVar: number = 123; ", " let myVar: number = 123; ", "All of the above"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Which configuration file is required to compile the whole TypeScript project?",
        choices: [" tsconfig.js ", " tsconfig.json ", " web.config ", " app.json "]
    }
]);
var score = 0;
switch (quiz.question_1) {
    case "JavaScript":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "JavaScript":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "1. Boolean 2. Number 3. String ":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case "All of the above":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "tsconfig.json":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
