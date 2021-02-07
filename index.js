const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// * Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please input your badge links',
      name: 'badge',
    },
    {
      type: 'input',
      message: 'Write your description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please provide installation steps',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please provide usage information',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please provide license',
      name: 'license',
    },
    {
      type: 'input',
      message: 'Please provide your github username',
      name: 'username',
    },
    {
        type: 'input',
        message: 'Please provide contributers',
        name: 'contributers',
    },
    {
      type: 'input',
      message: 'Please provide a link to your github profile',
      name: 'githublink',
    },
    {
      type: 'input',
      message: 'Please provide repo link',
      name: 'repository',
    },
    
  ])
  
    fs.writeFile('index.html', data, (err) =>
        err ? console.error(err) : console.log('Success!')
    ); 
  