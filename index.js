import inquirer from 'inquirer';

// create the classes
class Employee {
    constructor(employeeName, employeeID, email) {
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
        return "Employee"
    }
}

class Manager extends Employee {
    constructor(officeNum) {
        super(employeeName)
        super(employeeID)
        super(email)

        this.officeNum = officeNum
    }
    getName() {
        super.getName()
    }
    getId() {
        super.getId()
    }
    getEmail() {
        super.getEmail()
    }
    getRole() {
        return "Manager"
    }
}

class Engineer extends Employee {
    constructor(github) {
        super(employeeName)
        super(employeeID)
        super(email)

        this.github = github
    }
    getName() {
        super.getName()
    }
    getId() {
        super.getId()
    }
    getEmail() {
        super.getEmail()
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

class Intern extends Employee {
    constructor(school) {
        super(employeeName)
        super(employeeID)
        super(email)

        this.school = school
    }
    getName() {
        super.getName()
    }
    getId() {
        super.getId()
    }
    getEmail() {
        super.getEmail()
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}