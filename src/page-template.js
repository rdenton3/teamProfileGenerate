// define function
const generateHTML = employeeArr => {
    return employeeArr.map((data) => {
        console.log(data)
        let role = data.getRole();
        if (role === 'Manager') {
            return `<div class="card col mx-5">
            <div class="card-body">
              <h5 class="card-title">Name: ${data.getName()}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${data.getId()}</li>
              <li class="list-group-item">Office Number: ${data.getOfficeNum()}</li>
              <li class="list-group-item"><a href="mailto:${data.getEmail()}" class="card-link">Email: ${data.getEmail()}</a></li>
                </ul>
            </div>
          </div>
            `
        }
        else if (role === 'Engineer') {
            return `<div class="card col mx-5">
            <div class="card-body">
              <h5 class="card-title">Name: ${data.getName()}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${data.getId()}</li>
              <li class="list-group-item">Github: ${data.getGithub()}</li>
              <li class="list-group-item"><a href="mailto:${data.getEmail()}" class="card-link">Email: ${data.getEmail()}</a></li>
                </ul>
            </div>
          </div>
            `
        }
        else if (role === 'Intern') {
            return `<div class="card col mx-5">
            <div class="card-body">
              <h5 class="card-title">Name: ${data.getName()}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
              <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${data.getId()}</li>
              <li class="list-group-item">School: ${data.getSchool()}</li>
              <li class="list-group-item"><a href="mailto:${data.getEmail()}" class="card-link">Email: ${data.getEmail()}</a></li>
                </ul>
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
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
                <p class="lead">Please see team details below.</p>
            </div>
        </div>
        <div class="row">
        ${generateHTML(htmlData).join('')}
        </div>
    </body>
    </html>
    `
}

