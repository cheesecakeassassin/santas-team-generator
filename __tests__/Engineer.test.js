const Engineer = require('../lib/Engineer.js');

test("creates an engineer object", () => {
    const engineer = new Engineer('Sebastian', 5696132, "santasebastian@yahoo.com", "cheesecakeassassin");

    expect(engineer.name).toBe('Sebastian');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('santasebastian@yahoo.com');
    expect(engineer.github).toBe('cheesecakeassassin');
});

test("gets engineer's name", () => {
    const engineer = new Engineer('Sebastian', 5696132, "santasebastian@yahoo.com", "cheesecakeassassin");

    expect(engineer.getName()).toEqual(expect.stringContaining("Sebastian"));
});

test("gets engineer's id", () => {
    const engineer = new Engineer('Sebastian', 5696132, "santasebastian@yahoo.com", "cheesecakeassassin");

    expect(engineer.getId()).toEqual(engineer.id);
});

test("gets engineer's email", () => {
    const engineer = new Engineer('Sebastian', 5696132, "santasebastian@yahoo.com", "cheesecakeassassin");

    expect(engineer.getEmail()).toEqual(expect.stringContaining("santasebastian@yahoo.com"));
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Sebastian', 5696132, "santasebastian@yahoo.com", "cheesecakeassassin");

    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});

test("gets engineer's github", () => {
    const engineer = new Engineer('Sebastian', 5696132, "santasebastian@yahoo.com", "cheesecakeassassin");

    expect(engineer.getGithub()).toEqual(expect.stringContaining("cheesecakeassassin"));
});