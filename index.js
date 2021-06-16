const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");



// createManager = () => {
//     inquirer
//     .prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "Enter the managers name",
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "What is the team manager's id?",
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is the team manager's email?",
//         },
//         {
//             type: "input",
//             name: "officeNumber",
//             message: "What is the team manager's office number?",
//         }
//     ]).then(({name, id, email, officeNumber}) => {
//         const manager = new Manager(name, id, email, officeNumber);
//         console.log(manager)
//     });
// }
// createManager ();

//Menu boilerplate from inquirer docs
menu = () => {
    inquirer
  .prompt([
    {type: "list",
    name: "answers",
    message: "Select the type of team member you'd like to create.",
    choices: ["Engineer", "Intern"],
    }])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.choices === "Engineer") {
        createEngineer();
    } else createIntern();
  })
}

createEngineer = () => {
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
        console.log(engineer)
    });

//
createIntern = () => {
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
        console.log(intern)
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