const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const teamMembers = [];




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
            message: "What is the team manager's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?",
        }
    ]).then(({name, id, email, officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager); 
        menu();
        console.log(manager)
    });
}

//Menu boilerplate from inquirer docs
const menu = () => {
    inquirer
  .prompt([
    {type: "list",
    name: "options",
    message: "Select the type of team member you'd like to create.",
    choices: ["Engineer", "Intern", "Exit"], //Third option to exit application if not picking engineer or intern
    }])
  .then((options) => {
      console.log(options)
    if (options.options === "Engineer") {
        createEngineer();
    } else if (options.options === "Intern") 
    {
        createIntern()
    } //else create html
  })
}
//menu();

const createEngineer = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's primary email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the team members GitHub username?",
        }
    ]).then(({name, id, email, github}) => {
        const engineer = new Engineer(name, id, email, github);
        teamMembers.push(engineer);
        console.log(engineer);
        menu();
    });

//
const createIntern = () => {
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
            message: "What is the intern's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "Where did the intern attend school?",
        }

    ]).then(({name, id, email, school}) => {
        const intern = new Intern (name, id, email, school);
        teamMembers.push(intern);
        console.log(intern);
        menu();
    })}}


    // Copied over from readme generator
    // function writeToFile(fileName, data) {
    //     fs.writeFile(fileName, data, (err) => {
    //       if (err) {
    //         return console.log(err);
    //       }
      
    //       console.log("Your README.md has been successfully generated!");
    //     });
    //   }

    createManager ();