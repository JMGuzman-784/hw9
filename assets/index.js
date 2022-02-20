const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, preview, githublink, linktopage }) => `
# ${title}
## Description
${description}
    
## Preview
![Webpage preview](${preview})
    
## Link to GithubPages
* Here is the link to Github : [Github/User](${githublink})
    
## Link to Webpages
* Here is the link to Webpage : [GWebpage/User](${linktopage})

`;

inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about?',
    },
    {
        type: 'input',
        name: 'preview',
        message: 'Upload a Preview screenshot?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Link to github pages?',
        link: 'Link?',
    },
    {
        type: 'input',
        name: 'webpage',
        message: 'Link to webpage?',
        link: 'Link?',
    },
]).then((answers) => {
      const readMePageContent = generateREADME(answers);
  
      fs.writeFile('READMe.md ', readMePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created ☑️ README.md!')
    );
});