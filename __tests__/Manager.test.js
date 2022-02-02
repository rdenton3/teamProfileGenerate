const Manager = require('../lib/Manager')

test('should create new manager object', () => {
    const manager = new Manager('Lisa', 5, 'lisa@gmail.com', 67)

    expect(manager.employeeName).toBe('Lisa');
    expect(manager.employeeID).toEqual(5)
    expect(manager.email).toBe('lisa@gmail.com')
    expect(manager.officeNum).toEqual(67)
})

test('should retrieve manager office number', () => {
    const manager = new Manager('Lisa', 5, 'lisa@gmail.com', 67)
    expect(manager.getOfficeNum()).toEqual(67)
})

test('should retrieve manager role', () => {
    const manager = new Manager('Lisa', 5, 'lisa@gmail.com')
    expect(manager.getRole()).toBe('Manager');
})



