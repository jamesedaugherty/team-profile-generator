const Manager = require("../lib/Manager");

test("Can instantiate Manager instance", () => {
    const newEmp = new Manager();
    expect(typeof(newEmp)).toBe("object")
});

test("getName() return Manager name", () => {
    const newEmp = new Manager("James");
    expect(newEmp.getName()).toBe("James");
});

test("getID() return Manager ID", () => {
    const newEmp = new Manager("James", 111);
    expect(newEmp.getID()).toBe(111);
});

test("getEmail() return Manager email", () => {
    const newEmp = new Manager("James", 111, "james@email.com");
    expect(newEmp.getEmail()).toBe("james@email.com");
});

test("getOfficeNum() return Manager office number", () => {
    const newEmp = new Manager("James", 111, "james@email.com", "410");
    expect(newEmp.getOfficeNum()).toBe("410");
});

test("getRole() return Manager" , () => {
    const newEmp = new Manager("James", 111, "james@email.com", "410");
    expect(newEmp.getRole()).toBe("Manager");
});