// Imports employee class since it is the parent that will be extended to
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Name, id, and email are already defined in the parent so this is necesarry and efficient
        super(name, id, email);

        this.school = school;
    }

    // Overridden
    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;