const Employee = require('./Employee')

class Intern extends Employee {
    constructor(employeeName, employeeID, email, school) {
        super(employeeName, employeeID, email)
        
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern 