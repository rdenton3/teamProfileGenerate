const Intern = require('../lib/Intern')

test('should create new manager object', () => {
    const intern = new Intern('Lisa', 5, 'lisa@gmail.com', 'umd')

    expect(intern.employeeName).toBe('Lisa');
    expect(intern.employeeID).toEqual(5)
    expect(intern.email).toBe('lisa@gmail.com')
    expect(intern.school).toBe('umd')
})

test('should retrieve intern github', () => {
    const intern = new Intern('Lisa', 5, 'lisa@gmail.com', 'umd')
    expect(intern.getSchool()).toBe('umd')
})

test('should retrieve intern role', () => {
    const intern = new Intern('Lisa', 5, 'lisa@gmail.com','umd')
    expect(intern.getRole()).toBe('Intern');
})



