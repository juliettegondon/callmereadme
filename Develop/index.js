const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What would you like to include in the project description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installation guidelines?',
    }, 
    {
        type: 'input',
        name: 'usage',
        message: 'What is this repo used for?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'which license will you be using?',
        choices: ['Apache', 'GNU', 'MIT']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please include the names of any other contributors',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Is there any testing information?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'please share your email address here',
    }
];

// function to write README file
//generatemarkdown function
 //return the data using the writefilesync function
function writeToFile(fileName, answers) {
   return fs.writeFileSync(fileName, answers);
    
  
}

// function to initialize program
function init() {

inquirer
  .prompt(questions)
  .then(answers => {
    console.log('ANSWERS--->',answers);
    writeToFile("README.md",generateMarkdown(answers));
})
  };




// function call to initialize program
init();


