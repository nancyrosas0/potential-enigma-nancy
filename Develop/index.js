// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
inquirer
    .prompt([
    {
        type: 'input',
        name: 'userName',
        message: 'What is your name?'   
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Add a description of your project.'
    }
    ])
    .then(function(data) {
        writeToFile('README.md', generatePage(data));
        console.log(data);
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
    
        console.log('The README has been created.');
    });

}


// TODO: Create a function to initialize app
function init() {


}

// Function call to initialize app
init();

