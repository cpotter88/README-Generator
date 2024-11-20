// packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// an array of questions for user input
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
        choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },
    {
        type: "input",
        message: "What is your GitHub username? ",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address? ",
        name: "email",
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return `# ${data.title}
## Description
${data.description}

[${data.license} License](https://img.shields.io/badge/License-${data.license}%20-blue.svg)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Licensing](#licensing)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
- GitHub: github.com/${data.username}
- For additional questions: ${data.email}

## Licensing
${data.title} is released under the ${data.license} license. See license documentation for further information.
`
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then ((answers) => {
            fs.writeFile("./assets/README.md", writeToFile(questions, answers), (err) =>
                err ? console.error(err) : console.log('Your README is now ready')
            );
        });
}

// Function call to initialize app
init();