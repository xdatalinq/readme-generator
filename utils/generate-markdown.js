// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  console.log("This is MARKDOWN step data: "+data.title)
  return `
  # README GENERATOR
  // License here 
  ## Description
  Read me generator
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)  
  ## Installation
  // List here
   
  ## Usage
  // Usage notes
    
  ## License
  This project is s licensed under...
  
  ## Contributing
  N/A
    
  ## Tests
  Test info here
  
  ## Questions
  Insert questions here
  `;
}

module.exports = generateMarkdown;
// module.exports = templateData => {
//   // destructure page data by section
//   const { projects, about, ...header } = templateData;

//   return `

// Sections to look for in data:
// title 
// description
// tablecontents
// instructions
// usage
// license
// contribution
// testing
// questions