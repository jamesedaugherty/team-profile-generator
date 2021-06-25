const Intern = require("../lib/Intern");

test("Can instantiate Intern instance", () => {
    const newEmp = new Intern();
    expect(typeof(newEmp)).toBe("object")
});

test("getName() return intern name", () => {
    const newEmp = new Intern("James");
    expect(newEmp.getName()).toBe("James");
});

test("getID() return intern ID", () => {
    const newEmp = new Intern("James", 56);
    expect(newEmp.getID()).toBe(56);
});

test("getEmail() return intern email", () => {
    const newEmp = new Intern("James", 56, "james@email.com");
    expect(newEmp.getEmail()).toBe("james@email.com");
});

test("getSchool() return intern school", () => {
    const newEmp = new Intern("James", 56, "james@email.com", "John Hopkins University");
    expect(newEmp.getSchool()).toBe("jamesedaugherty");
});

test("getRole() return intern" , () => {
    const newEmp = new Intern("James", 56, "james@email.com", "John Hopkins University");
    expect(newEmp.getRole()).toBe("Intern");
});

