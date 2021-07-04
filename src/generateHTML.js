const generateHTML = (employeeArray) => {
  for (var i = 0; i < employeeArray.length; i++) {
    const currentEmployee = employeeArray[i];

    if (currentEmployee.getRole() === "Manager") {
        return
      `<div class="card" style="width:18rem;">
        <div class="card-header">
          <h2>${currentEmployee.name}</h2>
        </div>
        <p>Role - ${currentEmployee.getRole()}</p>
        <p>Email - ${currentEmployee.email}</p>
        <p>Office - ${currentEmployee.officeNumber}</p>
        <p></p>
      </div>`;

    } else if (currentEmployee.getRole() === "Engineer") {
        return
      `<div class="card" style="width: 18rem;">
        <div class="card-header">
          <h2>${currentEmployee.name}</h2>
        </div>
        <p>Role - ${currentEmployee.getRole()}</p>
        <p>Email - ${currentEmployee.email}</p>
        <p>GitHub - ${currentEmployee.github}</p>
        <p></p>
      </div>`;

    } else {
      //this by default is the Intern
      return
      `<div class="card" style="width: 18rem;">
        <div class="card-header">
          <h2>${currentEmployee.name}</h2>
        </div>
        <p>Role - ${currentEmployee.getRole()}</p>
        <p>Email - ${currentEmployee.email}</p>
        <p>School - ${currentEmployee.school}</p>
        <p></p>
      </div>`;
    }
  }
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
            <div id="roles">
            ${card}
            </div>
    </body>
    
    </html>
    `
;
};

module.exports = generateHTML;
