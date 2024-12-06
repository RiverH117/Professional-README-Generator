// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  let badge;
  
  switch (license) {
    case "GNU AGPLv3":
      badge = { name: "GNU+AGPLv3", color: "orange" };
      break;
    case "GNU GPLv3":
      badge = { name: "GNU+GPLv3", color: "red" };
      break;
    case "GNU LGPLv3":
      badge = { name: "GNU+LGPLv3", color: "blue" };
      break;
    case "Mozilla Public License 2.0":
      badge = { name: "Mozilla+2.0", color: "yellow" };
      break;
    case "Apache License 2.0":
      badge = { name: "Apache+2.0", color: "green" };
      break;
    case "MIT License":
      badge = { name: "MIT", color: "brightgreen" };
      break;
    case "Boost Software License 1.0":
      badge = { name: "Boost+Software+1.0", color: "yellowgreen" };
      break;
    case "The Unlicense":
      badge = { name: "The+Unlicense", color: "blueviolet" };
      break;
  }
   return `https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color})`;
};
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let path;

  switch (license) {
    case "GNU AGPLv3":
      path = "agpl-3.0";
      break;
    case "GNU GPLv3":
      path = "gpl-3.0";
      break;
    case "GNU LGPLv3":
      path = "lgpl-3.0";
      break;
    case "Mozilla Public License 2.0":
      path = "mpl-2.0";
      break;
    case "Apache License 2.0":
      path = "apache-2.0";
      break;
    case "MIT License":
      path = "mit";
      break;
    case "Boost Software License 1.0":
      path = "bsl-1.0";
      break;
    case "The Unlicense":
      path = "unlicense";
      break;
  }

  return `https://choosealicense.com/licenses/${path}/`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponse) {
    const licenseBadge = renderLicenseBadge(userResponse.license);
    const licenseUrl = renderLicenseLink(userResponse.license);
    const githubUser = userResponse.username;
    const result = (

     `# ${userResponse.title}
      
      \n![License](${licenseBadge}\n
      
      \n## Description
      ${userResponse.description};
      
      \n## Table of Contents
      
      \n* [Installation](#installation)
      \n* [Usage](#usage)
      \n* [Contribution](#contribution)
      \n* [Tests](#tests)
      \n* [License](#license)
      \n* [Questions](#questions);
      
      \n## Installation \n
      \n ${userResponse.installation}
      
      \n## Usage
      \n${userResponse.usage}
      
      \n## License
      \n This project is licensed under the ${userResponse.license} - see the [License](${licenseUrl}) page for more information.
      
      \n## Contribution
      \n${userResponse.contributing}

      \n## Tests
      \n${userResponse.tests}

    
      \n## Questions?
      \n Click my Github username to redirect you to my profile [${githubUser}](https://github.com/${githubUser}).
      \n Contact me at ${userResponse.email} if you have additional questions about the README generator.
    
    `
   )  
  
  return result;
}
export default generateMarkdown;
