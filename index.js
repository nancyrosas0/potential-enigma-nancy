// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "userName",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "githubUserName",
      message: "What is your GitHub user name?",
    },
    {
      type: "input",
      name: "description",
      message: "Add a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
    },
    {
        type: "input",
        name: "usageInfor",
        message: "What is the Usage info?",
    },
    {
        type: "input",
        name: "contributors",
        message: "Who were the contributors?",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "What are the instructrions for testing?",
    },
    {
      type: "list",
      name: "license",
      message: "Would you like to choose a license?",
      choices: ["mit", "gpl-3.0", "apache-2.0", "unlicense"],
    },
  ])
  .then(function (data) {
    writeToFile("README.md", generatePage(data));
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

