// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let renderLicenseBadge = (license) => {
  switch (license) {
    case "Apache 2.0 License":
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case "CC0 1.0 (Creative Commons)":
      return `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`;
    case "GNU GPL v3":
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    case "MIT License":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case "Mozilla Public License 2.0":
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    case "Public Domain Dedication and License (PDDL)":
      return `![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)`;
    default:
      return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
let renderLicenseLink = (license) => {
  switch (license) {
    case "Apache 2.0 License":
      return `https://opensource.org/licenses/Apache-2.0`;
    case "CC0 1.0 (Creative Commons)":
      return `http://creativecommons.org/publicdomain/zero/1.0/`;
    case "GNU GPL v3":
      return `https://www.gnu.org/licenses/gpl-3.0`;
    case "MIT License":
      return `https://opensource.org/licenses/MIT`;
    case "Mozilla Public License 2.0":
      return `https://opensource.org/licenses/MPL-2.0`;
    case "Public Domain Dedication and License (PDDL)":
      return `https://opendatacommons.org/licenses/pddl/`;
    default:
      return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let renderLicenseSection = (license) => {
  if (!license) {
    return '';
  }
  return `This project is licensed under [${license}](${renderLicenseLink(license)})`;
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  let badge = renderLicenseBadge(data.license)
  return `
  # ${data.title}
  ${badge}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)  
  
  ## Description
  ${data.description}
  ## Installation
  ${data.instructions}
   
  ## Usage
  ${data.usage}
    
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contribution}
    
  ## Tests
  ${data.testing}
  
  ## Questions
  For any questions, please send an email to [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;