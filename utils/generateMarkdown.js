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
## Description
${data.description}

## Table of Contents
${createTable(questionData.contents)}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.License}

## Contributing
${data.contribution}

`;
};

module.exports = {generateMarkdown};

'Installation',
'Usage',
'Contributing',
'License',
'Credits',
'Badges',
'Test',
'Contact'
// # ${data.title}
// ## ${gitData.login}
// ### ${gitData.blog}

// ## Table of contents
// ## Credits
// * ${data.Credits[0]}
// * ${data.Credits[1]}
// * ${data.Credits[2]}
// ## languages
// * ${data.badges}
// * ${data.badges}
// * ${data.badges}