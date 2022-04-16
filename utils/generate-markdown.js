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
  Markdown Example
  ===============
  
  This is the raw markdown used to generate the below web content.
  
  Bulleted List
  -------------
  
  * Foo
  * Bar
  
  Numbered List
  -------------
  
  1. Foo
  2. Bar
  
  Formatting
  ----------
  
  Can be **bold** or *italic*
  
  Links
  -----
  
  Click [here](http://foo.com) to go somewhere.
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
