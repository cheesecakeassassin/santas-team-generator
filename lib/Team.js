const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Team {
    constructor() {
        this.manager;
        this.engineers = [];
        this.interns = [];
    }

    buildTeam() {
        console.log("Welcome to Santa's Team Builder!");

        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please provide the team manager's name!");
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: "What is the team manager's id?",
                validate: (idInput) => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please provide the team manager's id!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email?",
                validate: (emailInput) => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please provide the team manager's email!");
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'officeNumber',
                message: "What is the team manager's office number?",
                validate: (officeNumberInput) => {
                    if (officeNumberInput) {
                        return true;
                    } else {
                        console.log("Please provide the team manager's officeNumber!");
                        return false;
                    }
                }
            }
        ])
        .then(({ name, id, email, officeNumber }) => {
            this.manager = new Manager(name, id, email, officeNumber);

            console.log(this.manager);
        });
    }
}

module.exports = Team;