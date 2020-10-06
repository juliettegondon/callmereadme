// function to generate markdown for README
// look into markdown cheatsheet to figure out how to write markdown
function generateMarkdown(answers) {
  let badges = "https://img.shields.io/badge/license-MIT-green";
  if (answers.license == "Apache") {
    badges = "https://img.shields.io/badge/license-Apache-blue";
  } else if (answers.license == "GNU") {
    badges = "https://img.shields.io/badge/license-GNU-HSL(20%C2%B0%2C%20100%25%2C%2050%25)";
  } else {
    badges = "https://img.shields.io/badge/license-MIT-green"
  };
  return `
  # Title ${answers.title}

  ## Description
  ${answers.description}

  # Table of Contents
  *  Installation 
  *  Contributing 
  *  Tests 
  *  Usage 
  *  Questions 

  ## Installation:
  ${answers.installation} 

  ## License:
  ${answers.license}
  ![badge](${badges}) 
  

  ## Contributing:
  ${answers.contributing}

  ## Tests:
  ${answers.tests}

  ## Usage:
  ${answers.usage} 
  ## Questions: 

If you have any questions, you can contact the creator of this repo here: [${answers.email}](mailto:${answers.email})
GitHub: https://github.com/${answers.github}



`
}

module.exports = generateMarkdown;
