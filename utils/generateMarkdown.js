function generateMarkdown(data) {
const { gitData } = data;
const { questionData } = data;

const createTable = function(data) {
  const array2 = data.map(element => `* ${element}`)
  var table = array2.join("\n")
  return table
};

return `
# ${questionData.title}
![badge](https://img.shields.io/github/downloads/${gitData.login}/${questionData.repo}/total)
## Description
${questionData.description}

## Table of Contents
${createTable(questionData.contents)}

## Installation
${questionData.installation}

## Usage
${questionData.usage}

## License
${questionData.license}

## Contributing
${questionData.contributing}

## Contact
${questionData.authors}

![GitHub Avatar](${gitData.avatar_url})  

[Blog](${gitData.blog})
`;
};

module.exports = {generateMarkdown};
