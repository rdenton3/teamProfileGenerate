const Employee = require('./Employee')

class Intern extends Employee {
    constructor(employeeName, employeeID, email, school) {
        super(employeeName, employeeID, email)

        this.school = school
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
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern 