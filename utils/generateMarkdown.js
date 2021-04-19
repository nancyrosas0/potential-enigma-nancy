// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)`
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
      return `License used: [license](https://choosealicense.com/licenses/${license}/)`
      return "";
    }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `# License Section
This app has a/an ${license} license.`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title: ${data.title}
## Questions Section 
## Name: ${data.userName}
## GitHub User Name: ${data.githubUserName}
## Project Description
### ${data.description}
# Table of Contents
1. Questions
2. Installation Instructions
3. Usage
4. Contributors
5. Test Instructions
6. License
## Installation 
### ${data.installation}
# Usage
### ${data.usageInfo}
# Contributors
### ${data.contributors}
# Test Instructions
### ${data.testInstructions}
### ${renderLicenseLink(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;

