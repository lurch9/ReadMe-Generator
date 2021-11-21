function licenseBadge(data) {

  
  const licenseType = data.license[0];
  let license = "";
  switch(licenseType)
  {
    case 'MIT':
      license = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case 'GNU General Public License 2.0':
      license = '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)';
      break;
    case 'Apache License 2.0':
      license = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
      break;
    case 'GNU General Public License 3.0':
      license = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
      break;
    case 'Unlicensed':
      license = '';
      break;
  }
  return license;
  
};


function generateMarkdown(data) {
  
    return `# ${data.title}
## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage)  
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [GitHub](#GitHub)
  8. [E-mail](#E-mail)

## Description
${data.description} 

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
${licenseBadge(data)}

## GitHub
${data.github}

## E-mail
${data.email}`
}
module.exports = generateMarkdown;

