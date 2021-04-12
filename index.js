// TODO: Include packages needed for this application
const generateMarkdown = require('./generateMarkdown');
//const genMD = new generateMarkdown();
const inquirer = require("inquirer");
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Project',
            message: 'What is the name of this project?',
        },
        {
            type: 'input',
            name: 'head',
            message: 'what is the title of the first heading?',
        },
       /* {
            type: 'checkbox';

        }*/
    
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile('README.md', `${process.argv[2]}\n`, (err) =>
    err ? console.error(err) : console.log('README.md updated!')
    );
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((anwsers) => writeToFile('README.md', generateMarkdown(data)))
    .then(() => console.log('README created'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
