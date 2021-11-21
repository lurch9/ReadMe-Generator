function init () {

    const inquirer = require('inquirer');
    const fs = require('fs'); 
    const generate = require('./utils/generateMarkdown.js');
    const path = require('path');
    
    inquirer
      .prompt([
        { 
          type: "input",
          message: "Please Enter a Title for Your Project: ",
          name: "title",  
             },
        { 
          type: "input",
          message: "Please Enter a Description for Your Project: ",
          name: "description",  
             },
        {
           type: "input",
           message: "Please Enter Installation Instructions for Your Project: ",
           name: "installation",
        },
        {
            type: "input",
            message: "Please Enter the Typical Use of Your Project: ",
            name: "usage",
        },
        {
            type: "checkbox",
            message: "Which license, if any, did you use for this repository?",
            choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0", "Unlicensed"],
            name: "license",
        },
        {
            type: "input",
            message: "How can people Contribute to your project?",
            name: "contributing",
        },
       {
            type: "input",
            message: "How do people update the tests for your project?",
            name: "tests"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email address where users and contributors can send questions?",
            name: "email"
        },
      ])
      
    }
    
    init();

