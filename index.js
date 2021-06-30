// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
let teamMembers = [];
const generateHTML = require("./src/generateHTML");

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

menu = () => {
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
