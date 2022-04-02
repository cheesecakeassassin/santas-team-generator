// Inquirer to ask questions to the user
const inquirer = require('inquirer');

// This will allow the program to pass over information from the inquirer to the page creation js
const generatePage = require('../src/page-template');

// Allows for writing and copying files
const fs = require('fs');

// Importing classes that will be used with the inquirer to store important information
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// Class that serves a purpose to create a team by asking the user a series of questions
class Team {
    constructor() {
        // These 3 constructor instance variables will hold the information that will be passed over to page creation later
        this.manager;
        this.engineers = [];
        this.interns = [];
    }

    // This method starts the program and creates the team manager
    buildTeam() {
        console.log("Welcome to Santa's Team Profile Builder!");

        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the team manager's name?",
                    validate: (nameInput) => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log(
                                "Please provide the team manager's name!"
                            );
                            return false;
                        }
                    },
                },
                {
                    type: 'number',
                    name: 'id',
                    message: "What is the team manager's id?",
                    validate: (idInput) => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log(
                                "Please provide the team manager's id!"
                            );
                            return false;
                        }
                    },
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the team manager's email?",
                    validate: (emailInput) => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log(
                                "Please provide the team manager's email!"
                            );
                            return false;
                        }
                    },
                },
                {
                    type: 'number',
                    name: 'officeNumber',
                    message: "What is the team manager's office number?",
                    validate: (officeNumberInput) => {
                        if (officeNumberInput) {
                            return true;
                        } else {
                            console.log(
                                "Please provide the team manager's officeNumber!"
                            );
                            return false;
                        }
                    },
                },
            ])
            // The users input will be used to create a new Manager object and store it in the manager instance variable
            .then(({ name, id, email, officeNumber }) => {
                this.manager = new Manager(name, id, email, officeNumber);

                console.log(this.manager);

                // Calls method that gives user the choice to add more members or finish up the team right away
                this.choice();
            });
    }

    // Method with the purpose of giving the user the option of adding more employees or finishing the team
    choice() {
        inquirer
            .prompt({
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Add engineer', 'Add intern', 'Finish building team'],
            })
            .then(({ action }) => {
                if (action === 'Add engineer') {
                    this.addEngineer();
                } else if (action === 'Add intern') {
                    this.addIntern();
                } else {
                    this.completeTeam();
                }
            });
    }

    // Method to add a new Engineer object to the engineers array
    addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the engineers's name?",
                    validate: (nameInput) => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Please provide the engineer's name!");
                            return false;
                        }
                    },
                },
                {
                    type: 'number',
                    name: 'id',
                    message: "What is the engineer's id?",
                    validate: (idInput) => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log("Please provide the engineer's id!");
                            return false;
                        }
                    },
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the engineer's email?",
                    validate: (emailInput) => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Please provide the engineer's email!");
                            return false;
                        }
                    },
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "What is the engineer's github username?",
                    validate: (githubInput) => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log(
                                "Please provide the engineer's github username!"
                            );
                            return false;
                        }
                    },
                },
            ])
            // Gathers all the user data to create a new Engineer object and store it in the engineers array
            .then(({ name, id, email, github }) => {
                this.engineers.push(new Engineer(name, id, email, github));

                console.log(this.engineers);

                // Prompts user to choose between more employees or finishing the team
                this.choice();
            });
    }

    // Method to create a new Intern object and store it in the interns array
    addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the intern's name?",
                    validate: (nameInput) => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Please provide the intern's name!");
                            return false;
                        }
                    },
                },
                {
                    type: 'number',
                    name: 'id',
                    message: "What is the intern's id?",
                    validate: (idInput) => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log("Please provide the intern's id!");
                            return false;
                        }
                    },
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the intern's email?",
                    validate: (emailInput) => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Please provide the intern's email!");
                            return false;
                        }
                    },
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What is the intern's school name?",
                    validate: (schoolInput) => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log(
                                "Please provide the intern's school name!"
                            );
                            return false;
                        }
                    },
                },
            ])
            // Gathers all the information and creates an Intern object that is then pushed into the interns array
            .then(({ name, id, email, school }) => {
                this.interns.push(new Intern(name, id, email, school));

                console.log(this.interns);

                // Prompts user to choose between more employees or finishing the team
                this.choice();
            });
    }

    // Method that gathers all the collected information and pushes it to page creation, then an html file will be created with the information
    completeTeam() {
        // Writes the html file to the dist folder
        fs.writeFile('./dist/TeamProfile.html', generatePage(this.manager, this.engineers, this.interns), (err) => {
                if (err) throw new Error(err);

                console.log('Page created! Check it out in the dist folder of the directory.');
            }
        );
        
        // Copies the css file from the src folder to the dist file so it can beautify the production html that was created
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) throw new Error(err);

            console.log('Stylesheet copied!! Check it out in the dist folder of the directory.');
            }
        );
    }
}

module.exports = Team;
