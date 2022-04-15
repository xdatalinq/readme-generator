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
              message: "Please enter table of contents, press enter to skip"
            },
            {
              type: 'input',
              name: 'instructions',
              message: "Please enter installation instructions, press enter to skip"
            },
            {
              type: 'input',
              name: 'usage',
              message: "Please enter usage instructions, press enter to skip"
            },
            {
              type: 'checkbox',
              name: 'license',
              message: "Please select which license you would like to use",
              choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License',
              'CC0 (Creative Commons)', 'Attribution 4.0 International', 'Attribution-ShareAlike 4.0 International', 
              'Attribution-NonCommercial 4.0 International', 'Attribution-NoDerivates 4.0 International', 
              'Attribution-NonCommmercial-ShareAlike 4.0 International', 'Attribution-NonCommercial-NoDerivatives 4.0 International', 
              'Eclipse Public License 1.0', 'GNU GPL v3', 'GNU GPL v2', 'GNU AGPL v3', 'GNU LGPL v3', 'GNU FDL v1.3', 
              'The Hippocratic License 2.1', 'The Hippocratic License 3.0', 'IBM Public License Version 1.0', 'ISC License (ISC)',
              'The MIT License', 'Mozilla Public License 2.0', 'Attribution License (BY)', 'Open Database License (ODbL)',
              'Public Domain Dedication and License (PDDL)', 'The Perl License', 'The Artistic License 2.0', 'SIL Open Font License 1.1',
              'The Unlicense', 'The Do What the Fuck You Want to Public License', 'The zlib/libpng License', 'Public Domain (Unlicensed)']
            },
            {
              type: 'input',
              name: 'contribution',
              message: "Please enter contribution guidelines, press enter to skip"
            },
            {
              type: 'input',
              name: 'testing',
              message: "Please enter Testing instructions, press enter to skip",
            },
            {
              type: 'input',
              name: 'questions',
              message: "Please enter info for Questions section, press enter to skip"
            }
        ]);
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
    ==================================
    Welcome to README Generator v0.1: 
    
    1337 1337 1337 1337 1337 1337 1337
    1337 1337 1337 1337 1337 1337 1337
    1337 1337 1337 1337 1337 1337 1337
    1337 1337 1337 1337 1337 1337 1337
    1337 1337 1337 1337 1337 1337 1337
    1337 1337 1337 1337 1337 1337 1337
    1337 1337 1337 1337 1337 1337 1337
    1337 1337 1337 1337 1337 1337 1337
    ==================================
    `);
    promptUser()
    .then(readmeData => {
        return generateReadme(readmeData);
    })
    .then(pageMarkdown => {
        return writeFile(pageMarkdown);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();