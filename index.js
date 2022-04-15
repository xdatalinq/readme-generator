// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
            {
              type: 'input',
              name: 'title',
              message: "Please enter a title for your file",
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a title!');
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'description',
              message: "Please enter a description",
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter a description!");
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'tablecontents',
              message: "Please enter table of contents",
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter table of contents!");
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'instructions',
              message: "Please enter installation instructions",
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter installation instructions!");
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'usage',
              message: "Please enter usage instructions",
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter usage instructions!");
                  return false;
                }
              }
            },
            {
                type: 'checkbox',
                name: 'license',
                message: "Please select which license you would like to use",
                choices: ['MIT', 'Apache', 'GPL', 'Affero GPL', 'BSD 3-Clause', 'BSD 2-Clause', 
                'Eclipse Public License v1.0', 'GPL v3', 'LGPL v2.1', 'LGPL v3', 
                'Mozilla Public License Version 2.0', 'Public Domain (Unlicensed']
            },
            {
              type: 'input',
              name: 'contribution',
              message: "Please enter contribution guidelines",
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter contribution guidelines!");
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'testing',
              message: "Please enter Testing instructions",
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter Testing instructions!");
                  return false;
                }
              }
            },
            {
              type: 'input',
              name: 'questions',
              message: "Please enter info for Questions section",
              validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter info for Questions section!");
                  return false;
                }
              }
            }
        ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
