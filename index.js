const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");



const generateHTML = require("./src/generateHTML");
let teamMembers = [];



const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the managers name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the managers employee id?",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the managers email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter the managers office number?",
      },
    ])
    .then(({ name, id, email, officeNumber }) => {
      const manager = new Manager(name, id, email, officeNumber);
      teamMembers.push(manager);
      console.log(manager);
      menu();
    });
};

const menu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "options",
        message: "Select the type of team member you'd like to create?",
        choices: ["Engineer", "Intern", "Exit Menu."],
      },
    ])
    .then(({ options }) => {
      if (options === "Engineer") {
        createEngineer();
      } else if (options === "Intern") {
        createIntern();
      } else {
        createTeam();
      }
    });
};

const createEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineers name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineers employee id.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineers email address.",
      },
      {
        type: "input",
        name: "gitHub",
        message: "Enter the engineers GitHub username.",
      },
    ])
    .then(({ name, id, email, gitHub }) => {
      const engineer = new Engineer(name, id, email, gitHub);
      teamMembers.push(engineer);
      console.log(engineer);
      menu();
    });
};

const createIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the interns name.",
      },
      {
        type: "input",
        name: "id",
        message: "Enter the interns employee id.",
      },
      {
        type: "input",
        name: "email",
        message: "Enter the interns email address.",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the interns school.",
      },
    ])
    .then(({ name, id, email, school }) => {
      const intern = new Intern(name, id, email, school);
      teamMembers.push(intern);
      console.log(intern);
      menu();
    });
};

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("Please wait while we generate your file.")
  );
}

function createTeam() {
  writeToFile("./dist/team.html", generateHTML(teamMembers));
 
}

createManager();


