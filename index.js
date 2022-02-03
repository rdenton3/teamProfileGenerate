const inquirer = require('inquirer');
const fs = require('fs')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// empty array to push all employees into
const employeeArr = []

// Create an array of questions for user input
const managerQuestions = () => {
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
        ]).then((data) => {
            let manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNum)
            employeeArr.push(manager)
            console.log(manager)
            employeeQuestions()
        })}

const employeeQuestions = () => {
    return inquirer.prompt([{
        type: 'checkbox',
        name: 'employee',
        message: 'Which type of employee would you like to add?',
        choices: ['Engineer', 'Intern']
    }
]).then(data => {
    console.log(data)
    if (data.employee == 'Engineer') {
        return inquirer.prompt([{
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the engineer?',
            validate: managerNameInput => {
                if (managerNameInput) {
                  return true;
                } else {
                  console.log('Please enter an engineer name.');
                  return false;
                }
              }
            },
            {
                type: 'input',
                name: 'engineerID',
                message: 'Please enter an engineer ID number.',
                validate: idInput => {
                    if (idInput) {
                    return true;
                    } else {
                    console.log('Please enter an engineer ID number.');
                    return false;
                    }
                }
                },
                {
                type: 'input',
                name: 'engineerEmail',
                message: 'Please provide an engineer email address.',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter a eningeer email address.');
                        return false;
                    }
                    }
                    },    
            {
                type: 'input',
                name: 'github',
                message: 'Please provide the engineer github username.',
                validate: officeInput => {
                    if (officeInput) {
                      return true;
                    } else {
                      console.log('Please enter a github username.');
                      return false;
                    }
                  }
                },
            {
                type: 'confirm',
                name: 'confirm',
                message: 'Would you like to add another employee?'
            }
            ]).then(data => {
                if (data.confirm) {
                    employeeQuestions();
                }
                else {
                    console.log('generating page')
                }
            })
    }
    else {
        return inquirer.prompt([{
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the intern?',
            validate: managerNameInput => {
                if (managerNameInput) {
                  return true;
                } else {
                  console.log('Please enter an intern name.');
                  return false;
                }
              }
            },
            {
                type: 'input',
                name: 'internID',
                message: 'Please enter an intern ID number.',
                validate: idInput => {
                    if (idInput) {
                    return true;
                    } else {
                    console.log('Please enter an intern ID number.');
                    return false;
                    }
                }
                },
                {
                type: 'input',
                name: 'engineerEmail',
                message: 'Please provide an intern email address.',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter an intern email address.');
                        return false;
                    }
                    }
                    },    
            {
                type: 'input',
                name: 'school',
                message: 'Please provide the school of the intern.',
                validate: officeInput => {
                    if (officeInput) {
                      return true;
                    } else {
                      console.log('Please enter a school.');
                      return false;
                    }
                  }
                },
            {
                type: 'confirm',
                name: 'confirm',
                message: 'Would you like to add another employee?'
            }
            ]).then(data => {
                if (data.confirm) {
                    employeeQuestions();
                }
                else {
                    console.log('generating page')
                }
            })
    }
})
}

managerQuestions();
