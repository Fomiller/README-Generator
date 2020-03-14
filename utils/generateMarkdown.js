function generateMarkdown(data) {
// store api response object
const { gitData } = data;
// store inquirer response object 
const { questionData } = data;
// function to loop through questionData.content to output table of contents.
const createTable = function(data) {
  // create new array with string literals using map()
  const array2 = data.map(element => `* ${element}`);
  // create table variable that is string of array2 values each value starts a new line.
  var table = array2.join("\n");
  return table;
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

<img src="${gitData.avatar_url}" alt="${gitData.login}" width="150" height="150" />


[Click here to visit my website](${gitData.blog})
`;
};

module.exports = {generateMarkdown};
