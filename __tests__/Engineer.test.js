const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer instance", () => {
    const newEmp = new Engineer();
    expect(typeof(newEmp)).toBe("object")
});

test("getName() return engineer name", () => {
    const newEmp = new Engineer("James");
    expect(newEmp.getName()).toBe("James");
});

test("getID() return engineer ID", () => {
    const newEmp = new Engineer("James", 33);
    expect(newEmp.getID()).toBe(33);
});

test("getEmail() return engineers email", () => {
    const newEmp = new Engineer("James", 33, "james@email.com");
    expect(newEmp.getEmail()).toBe("james@email.com");
});

test("getGitHub() return employee GitHub", () => {
    const newEmp = new Engineer("James", 33, "james@email.com", "jamesedaugherty");
    expect(newEmp.getGithub()).toBe("jamesedaugherty");
});

test("get role() return employee" , () => {
    const newEmp = new Engineer("James", 33, "james@email.com", "jamesedaugherty");
    expect(newEmp.getRole()).toBe("Engineer");
});

