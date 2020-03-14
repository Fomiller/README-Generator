function generateMarkdown(data) {
// store api response object
const { gitData } = data;
// store inquirer response object 
const { questionData } = data;
// function to loop through questionData.content to output table of contents.
const createTable = function(data) {
  // create new array with string literals using map()
  const array2 = data.map(element => `* [${element}](#${element})`);
  // create table variable that is string of array2 values each value starts a new line.
  var table = array2.join("\n");
  return table;
};

const createBadges = function(data) {
  // array of colors for badges
  let colorsArray = ["brightgreen","yellow","orange","red","blue","blueviolet","ff69b4"]
  // maps the original array of languages to markdown format, create a random number to access the color array, adds tabs to each so they stay on one line.
  const array2 = data.map(element => `![${element}](https://img.shields.io/badge/language-${element}-${colorsArray[Math.floor(Math.random()*7)]})&ensp;`);
  // join all badges into a string.
  var badges = array2.join("");
  return badges;
}

return `
# ${questionData.title}
![Commits](https://img.shields.io/github/last-commit/${gitData.login}/${questionData.repo})  
## Languages
${createBadges(questionData.languages)}
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
${questionData.contact}

<img src="${gitData.avatar_url}" alt="${gitData.login}" width="150" height="150" />


[Click here to visit my website](${gitData.blog})
`;
};

module.exports = {generateMarkdown};
