const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

menu = () => {}
    
createManager = () => {
    inquirer.prompt([
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
        console.log(manager)
    });
}
//
createEngineer = () => {
    inquirer.prompt([
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
        const manager = new Engineer(name, id, email, github);
        console.log(engineer)
    });
}

//
createIntern = () => {
    inquirer.prompt([
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
        const manager = new Intern (name, id, email, school);
        console.log(manager)
    });
}
createManager();


Menu();