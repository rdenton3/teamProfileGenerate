const Engineer = require('../lib/Engineer')

test('should create new manager object', () => {
    const engineer = new Engineer('Lisa', 5, 'lisa@gmail.com', 'github')

    expect(engineer.employeeName).toBe('Lisa');
    expect(engineer.employeeID).toEqual(5)
    expect(engineer.email).toBe('lisa@gmail.com')
    expect(engineer.github).toBe('github')
})

test('should retrieve engineer github', () => {
    const engineer = new Engineer('Lisa', 5, 'lisa@gmail.com', 'github')
    expect(engineer.getGithub()).toBe('github')
})

test('should retrieve engineer role', () => {
    const engineer = new Engineer('Lisa', 5, 'lisa@gmail.com','github')
    expect(engineer.getRole()).toBe('Engineer');
})



