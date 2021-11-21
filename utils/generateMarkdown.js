function licenseBadge(data) {

  
  const licenseType = data.license[0];
  let licenseString = "";
  switch(licenseType)
  {
    case 'MIT':
      licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    case 'GNU General Public License 2.0':
      licenseString = '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)';
      break;
    case 'Apache License 2.0':
      licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
      break;
    case 'GNU General Public License 3.0':
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
      break;
    case 'Unlicensed':
      licenseString = '';
      break;
  }
  return licenseString;
  
  };

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

