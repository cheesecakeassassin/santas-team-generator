// Imports employee class since it is the parent that will be extended to
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Name, id, and email are already defined in the parent so this is necesarry and efficient
        super(name, id, email);

        this.github = github;
    }

    // Overridden
    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;