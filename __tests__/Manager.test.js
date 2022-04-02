const Manager = require('../lib/Manager.js');

test("creates an manager object", () => {
    const manager = new Manager('Sebastian', 5696132, "santasebastian@yahoo.com", 301);

    expect(manager.name).toBe('Sebastian');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('santasebastian@yahoo.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name", () => {
    const manager = new Manager('Sebastian', 5696132, "santasebastian@yahoo.com", 301);

    expect(manager.getName()).toEqual(expect.stringContaining("Sebastian"));
});

test("gets manager's id", () => {
    const manager = new Manager('Sebastian', 5696132, "santasebastian@yahoo.com", 301);

    expect(manager.getId()).toEqual(manager.id);
});

test("gets manager's email", () => {
    const manager = new Manager('Sebastian', 5696132, "santasebastian@yahoo.com", 301);

    expect(manager.getEmail()).toEqual(expect.stringContaining("santasebastian@yahoo.com"));
});

test("gets manager's role", () => {
    const manager = new Manager('Sebastian', 5696132, "santasebastian@yahoo.com", 301);

    expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});