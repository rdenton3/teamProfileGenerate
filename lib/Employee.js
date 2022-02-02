class Employee {
    constructor(employeeName,employeeID, email) {
        this.employeeName = employeeName
        this.employeeID = employeeID
        this.email = email
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
    getRole(){
        return 'Employee';
        };
    }

module.exports = Employee
