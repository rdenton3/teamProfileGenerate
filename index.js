const inquirer = require('inquirer');
const fs = require('fs')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the manager?',
        validate: managerNameInput => {
            if (managerNameInput) {
              return true;
            } else {
              console.log('Please enter a manager name.');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Please enter a manager ID number.',
            validate: idInput => {
                if (idInput) {
                return true;
                } else {
                console.log('Please enter a manager ID number.');
                return false;
                }
            }
            },
            {
            type: 'input',
            name: 'managerEmail',
            message: 'Please provide a manager email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a manager email address.');
                    return false;
                }
                }
                },    
        {
            type: 'input',
            name: 'managerOfficeNum',
            message: 'Please provide a manager office number',
            validate: officeInput => {
                if (officeInput) {
                  return true;
                } else {
                  console.log('Please enter a manager office number.');
                  return false;
                }
              }
            }
        ])}

        questions().then((data) => {
            console.log(data)
        })

