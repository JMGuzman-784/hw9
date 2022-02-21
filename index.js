const inquirer = require('inquirer');
const fs = require('fs');


const generateREADME = ({ title, description, preview, license, githubUsername, githublink, linktopage, emailAddress }) => `# ${title}
## Description
${description}
    
## Preview
![Webpage preview](${preview})
    
## License
${license}

## Link to GithubPages
* Github Username : ${githubUsername}
* Here is the link to Github : [Github/User]${githublink}
    
## Link to Webpages
* Here is the link to Webpage : [GWebpage/User]${linktopage}

##
* Email Address : ${emailAddress}

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
        type: 'checkbox',
        name: 'license',
        message: 'Which license did you use?',
        choices: ['The MIT License', 'The GPL License', 'Apache license', 'N/A'],
        validate: (value) => {
            if(value){return true} else {return "Select a License or 'N/A' to continue."}
        }
    },
    {
        type: 'input',
        name: 'preview',
        message: 'Upload a Preview screenshot?',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your Github Username?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Link to github pages?',
        validate: async (input) => {
            const valid = input.startsWith("https://");
            return valid || "Please enter a valid website";
        },
    },
    {
        type: 'input',
        name: 'webpage',
        message: 'Link to webpage?',
        validate: async (input) => {
            const valid = input.startsWith("https://");
            return valid || "Please enter a valid website";
        },
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'What is your Email Address?',
    },
]).then((answers) => {
      const readMePageContent = generateREADME(answers);
        console.log(answers);
      fs.writeFile('READMe.md ', readMePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created ☑️ README.md!')
    );
});