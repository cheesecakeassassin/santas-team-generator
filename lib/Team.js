const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

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
            .then(({ name, id, email, officeNumber }) => {
                this.manager = new Manager(name, id, email, officeNumber);

                console.log(this.manager);

                this.choice();
            });
    }

    choice() {
        inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Add engineer', 'Add intern', 'Finish building team']
        })
        .then(({ action }) => {
            if (action === 'Add engineer') 
            {
                this.addEngineer();
            } else if (action === 'Add intern') 
            {
                this.addIntern();
            } else
            {
                this.completeTeam();
            }
        });
    }

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
                            console.log(
                                "Please provide the engineer's name!"
                            );
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
                            console.log(
                                "Please provide the engineer's id!"
                            );
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
                            console.log(
                                "Please provide the engineer's email!"
                            );
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
            .then(({ name, id, email, github }) => {
                this.engineers.push(new Engineer(name, id, email, github));

                console.log(this.engineers);

                this.choice();
            });
    }

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
                            console.log(
                                "Please provide the intern's name!"
                            );
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
                            console.log(
                                "Please provide the intern's id!"
                            );
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
                            console.log(
                                "Please provide the intern's email!"
                            );
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
            .then(({ name, id, email, school }) => {
                this.interns.push(new Intern(name, id, email, school));

                console.log(this.interns);

                this.choice();
            });
    }

    completeTeam() {
        
    }
}

module.exports = Team;
