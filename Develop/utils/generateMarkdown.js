// function to generate markdown for README
// look into markdown cheatsheet to figure out how to write markdown
function generateMarkdown(answers) {
  return `#Title
  # ${answers.title}


  #Description

  ## ${answers.description}

`;
}

module.exports = generateMarkdown;
