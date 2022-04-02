// Imports employee class since it is the parent that will be extended to
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Name, id, and email are already defined in the parent so this is necesarry and efficient
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // Overridden
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;