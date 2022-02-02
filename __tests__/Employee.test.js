const Employee = require('../lib/Employee')

test('should create new employee object', () => {
    const employee = new Employee('Lisa', 5, 'lisa@gmail.com')

    expect(employee.employeeName).toBe('Lisa');
    expect(employee.employeeID).toEqual(5)
    expect(employee.email).toBe('lisa@gmail.com')
})

test('should retrieve employee name', () => {
    const employee = new Employee('Lisa', 5, 'lisa@gmail.com')
    expect(employee.getName()).toBe('Lisa');
})

test('should retrieve employee id', () => {
    const employee = new Employee('Lisa', 5, 'lisa@gmail.com')
    expect(employee.getId()).toEqual(5);
})

test('should retrieve employee email', () => {
    const employee = new Employee('Lisa', 5, 'lisa@gmail.com')
    expect(employee.getEmail()).toBe('lisa@gmail.com');
})

test('should retrieve employee role', () => {
    const employee = new Employee('Lisa', 5, 'lisa@gmail.com')
    expect(employee.getRole()).toBe('Employee');
})



