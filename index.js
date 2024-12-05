// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
    },
    
    
    {
        type: 'input',
        name: 'email',
        message: "Enter email address for people to contact you:?",
    },


    {
        type: 'input',
        name: 'title',
        message:'What is your Project Name?',
    },
    
    {
        type: 'input',
        name:'description',
        message:'Give a detail description about your project:',
    },
    
    {
        type: 'input',
        name: 'installation',
        message: "Describe the steps required to install your project.",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples of your project.",
    },
    
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Provide guidelines on how other developers can contribute to your project.",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Provide any tests written for your application and provide examples on how to run them.",
    },
    
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!')
    });
}

// TODO: Create a function to initialize app
 function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init().then(userResponse =>{
    console.log('Your Response:', userResponse);
    console.log('Making Your ReadMe file');

    const markdown = generateMarkdown(userResponse);
    console.log(markdown);

    writeToFile('ExampleREADME.md', markdown);
    console.log("README file Complete");
});
