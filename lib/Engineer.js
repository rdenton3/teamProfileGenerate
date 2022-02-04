
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(employeeName, employeeID, email, github) {
        super(employeeName, employeeID, email)

        this.github = github
    }
    getName(){
        return this.employeeName
      }
      getId(){
        return this.employeeID
      }
      getEmail(){
        return this.email
      }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer