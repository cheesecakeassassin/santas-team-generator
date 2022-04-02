const Employee = require('../lib/Employee.js');

test("creates an employee object", () => {
    const employee = new Employee('Sebastian', 5696132, "santasebastian@yahoo.com");

    expect(employee.name).toBe('Sebastian');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('santasebastian@yahoo.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Sebastian', 5696132, "santasebastian@yahoo.com");

    expect(employee.getName()).toEqual(expect.stringContaining("Sebastian"));
});

test("gets employee's id", () => {
    const employee = new Employee('Sebastian', 5696132, "santasebastian@yahoo.com");

    expect(employee.getId()).toEqual(employee.id);
});

test("gets employee's email", () => {
    const employee = new Employee('Sebastian', 5696132, "santasebastian@yahoo.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining("santasebastian@yahoo.com"));
});

test("gets employee's role", () => {
    const employee = new Employee('Sebastian', 5696132, "santasebastian@yahoo.com");

    expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
});