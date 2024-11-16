// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project? ",
        name: "title",
    },
    {
        type: "input",
        message: "What is a short description of your project? ",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions? ",
        name: "installation",
    },
    {
        type: "input",
        message: "What do you want to include in the usage information? ",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the contribution guidelines? ",
        name: "contribution",
    },
    {
        type: "input",
        message: "What are the test instructions? ",
        name: "test",
    },
    {
        type: "list",
        message: "What license are you using? ",
        name: "license",
        choices: ['MIT', 'Apache License 2.0', 'GPL', 'BSD'],
    },
    {
        type: "input",
        message: "What is your GitHub username? ",
        name: "username",
    },
    {
        type: "input",
        message: "messageWhat is your email address? ",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then ((answers) => {
            fs.writeFile("./application/README.md", writeToFile(answers), (err) =>
                err ? console.error(err) : console.log('Your README is now ready')
            );
        });
}

// Function call to initialize app
init();