const Employee = require('./Employee')

class Manager extends Employee {
    constructor(employeeName, employeeID, email, officeNum) {
        super(employeeName, employeeID, email)
        this.officeNum = officeNum
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
    getOfficeNum() {
        return this.officeNum
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager