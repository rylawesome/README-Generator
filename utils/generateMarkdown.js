// function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**

${data.description}

## Table of Contents

 -[Description](#Description)
 -[Installation](#Installation)
 -[Usage](#Usage)
 -[License](#License)
 -[Credits](#Credits)

## Installation

  ${data.installation}

## Usage

  ${data.usage}

##License

${data.license}

## Credits

${data.credits}

`;
}

module.exports = generateMarkdown;
