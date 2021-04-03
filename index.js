const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you run the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should this project be used?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Insert any contributors or technology used.'
    },

];

inquirer.prompt(questions).then(function(data){
        fs.writeFile('README.md', generate(data), function(err) {
            if (err) {
                throw err;
            };
            console.log('Successfully created README file.')
        });
    });
// function to write README file

// function to initialize program

// function call to initialize program
