// define function
const generateHTML = employeeArr => {
    return employeeArr.map((data) => {
        let role = data.getRole();
        if (role === 'Manager') {
            return `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Name: ${data.getName()}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
              <p class="card-text">ID: ${data.getId()}</p>
              <p class="card-text">Office Num: ${data.getOfficeNum()}</p>
              <a href="mailto:${data.getEmail()}" class="card-link">Email: ${data.getEmail()}</a>
            </div>
          </div>
            `
        }
        else if (role === 'Engineer') {
            return `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Name: ${data.getName()}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
              <p class="card-text">ID: ${data.getId()}</p>
              <p class="card-text">Github: ${data.getGithub()}</p>
              <a href="mailto:${data.getEmail()}" class="card-link">Email: ${data.getEmail()}</a>
            </div>
          </div>
            `
        }
        else if (role === 'Intern') {
            return `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Name: ${data.getName()}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
              <p class="card-text">ID: ${data.getId()}</p>
              <p class="card-text">School: ${data.getSchool()}</p>
              <a href="mailto:${data.getEmail()}" class="card-link">Email: ${data.getEmail()}</a>
            </div>
          </div>
            `
        }
    })
}

module.exports = (htmlData) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
  
    <body>
        <header>
            <h1>
            My Team 
            </h1>
        </header>
        ${generateHTML(htmlData).join('')}
    </body>
    </html>
    `
}

