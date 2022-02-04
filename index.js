const inquirer = require('inquirer');
const generateHTML = require('./src/page-template')
const fs = require('fs')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// empty array to push all employees into
const employeeArr = []
// start by asking manager questions
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
            // then after responses have been submitted, push data into array
        ]).then((data) => {
            let manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNum)
            employeeArr.push(manager)
            // call next set of questions
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
                // push employee into array and if user wants to add another employee, call employeeQuestions again
                let engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.github)
                employeeArr.push(engineer)
                if (data.confirm) {
                    employeeQuestions();
                }
                else {
                    let file = generateHTML(employeeArr);
                    writeFile(file)
                }
            })
    }
    else {
        return inquirer.prompt([{
            type: 'input',
            name: 'internName',
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
                name: 'internEmail',
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
                let intern = new Intern(data.internName, data.internID, data.internEmail, data.school)
                employeeArr.push(intern)
                if (data.confirm) {
                    employeeQuestions();
                }
                else {
                    let file = generateHTML(employeeArr);
                    writeFile(file)
                }
            })
    }
})
}

// function to write to file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };
  
managerQuestions();
