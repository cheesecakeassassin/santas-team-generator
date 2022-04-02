// Tests for Intern class
const Intern = require('../lib/Intern.js');

test("creates an intern object", () => {
    const intern = new Intern('Sebastian', 5696132, "santasebastian@yahoo.com", "Florida International University");

    expect(intern.name).toBe('Sebastian');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('santasebastian@yahoo.com');
    expect(intern.school).toBe('Florida International University');
});

test("gets intern's name", () => {
    const intern = new Intern('Sebastian', 5696132, "santasebastian@yahoo.com", "Florida International University");

    expect(intern.getName()).toEqual(expect.stringContaining("Sebastian"));
});

test("gets intern's id", () => {
    const intern = new Intern('Sebastian', 5696132, "santasebastian@yahoo.com", "Florida International University");

    expect(intern.getId()).toEqual(intern.id);
});

test("gets intern's email", () => {
    const intern = new Intern('Sebastian', 5696132, "santasebastian@yahoo.com", "Florida International University");

    expect(intern.getEmail()).toEqual(expect.stringContaining("santasebastian@yahoo.com"));
});

test("gets intern's role", () => {
    const intern = new Intern('Sebastian', 5696132, "santasebastian@yahoo.com", "Florida International University");

    expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
});

test("gets intern's school", () => {
    const intern = new Intern('Sebastian', 5696132, "santasebastian@yahoo.com", "Florida International University");

    expect(intern.getSchool()).toEqual(expect.stringContaining("Florida International University"));
});