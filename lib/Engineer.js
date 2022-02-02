
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(employeeName, employeeID, email, github) {
        super(employeeName, employeeID, email)

        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer