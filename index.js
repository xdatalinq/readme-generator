// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generate-markdown.js');


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
              name: 'instructions',
              message: "Please enter installation instructions, press enter to skip.."
            },
            {
              type: 'input',
              name: 'usage',
              message: "Please enter usage instructions, press enter to skip.."
            },
            {
              type: 'list',
              name: 'license',
              message: "Please select which license you would like to use (select one)",
              choices: ['Apache 2.0 License', 'CC0 1.0 (Creative Commons)', 'GNU GPL v3',
              'The MIT License', 'Mozilla Public License 2.0', 'Public Domain Dedication and License (PDDL)']
            },
            {
              type: 'input',
              name: 'contribution',
              message: "Please enter contribution guidelines, press enter to skip.."
            },
            {
              type: 'input',
              name: 'testing',
              message: "Please enter Testing instructions, press enter to skip..",
            },
            {
              type: 'input',
              name: 'questions',
              message: "Please enter info for Questions section, press enter to skip.."
            }
        ])
    .then(readmeData => {
    return readmeData;
    })
};

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    console.log(`
        
    Welcome to README Generator v0.1: 
    
    
    `);
    promptUser()
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(pageMarkdown => {
        return writeFile(pageMarkdown);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        console.log(``);
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();