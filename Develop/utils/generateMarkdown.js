// function to generate markdown for README
// look into markdown cheatsheet to figure out how to write markdown
function generateMarkdown(answers) {
  return `
  # Title 
  # ${answers.title}

  ## Description
  ${answers.description}

  # Table of Contents
  * ${answers.installation} 
  * ${answers.description}
  * ${answers.usage} 
  * ${answers.license} 

  ## Installation:
  ${answers.installation} 

  ## License:
  ${answers.license} 

  ## Contributing:
  ${answers.contributing}

  ## Tests:
  ${answers.test}

  ## Usage Info:
  ${answers.usage} 
  ${answers.license} 

  ## Questions: 

If you have any questions, you can contact the creator of this repo here: [${answers.email}](mailto:${answers.email})
GitHub: (https://github.com/${answers.github}



`
}

module.exports = generateMarkdown;
