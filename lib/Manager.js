const Employee = require('./Employee')

class Manager extends Employee {
    constructor(employeeName, employeeID, email, officeNum) {
        super(employeeName, employeeID, email)
        this.officeNum = officeNum
    }
    getOfficeNum() {
        return this.officeNum
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager