const inquirer = require('inquirer');
const fs = require('fs');

// * Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Where are you located?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Write your description',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Please provide installation steps',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'Please provide usage information',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please provide your github username',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Please provide a link to your github profile',
      name: 'githublink',
    }
    
  ])
  .then((response) => {
    let data = `
    <!DOCTYPE html>
    <html>
        <head>
            <style>
                p {
                    font-size: 20px;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div>
                <p>
                    Name: ${response.name}<br>
                    Location: ${response.location}<br>
                    Bio: ${response.bio}<br>
                    LinkedIn URL: ${response.linkedin}<br>
                    GitHub URL: ${response.github}
                </p>
            </div>
        </body>
    <html>
    `
    fs.writeFile('index.html', data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    }
  );

  