const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // Overridden
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;