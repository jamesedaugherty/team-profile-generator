const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const newEmp = new Employee();
    expect(typeof(newEmp)).toBe("object")
});

test("getName() return employee name", () => {
    const newEmp = new Employee("James");
    expect(newEmp.getName()).toBe("James");
});

test("getID() new employee id", () => {
    const newEmp = new Employee("James", 2);
    expect(newEmp.getID()).toBe(2);
});

test("getEmail() returns employee email", () => {
    const newEmp = new Employee("James", 2, "james@email.com");
    expect(newEmp.getEmail()).toBe("james@email.com");
});

test(" get role() return employee" , () => {
    const newEmp = new Employee("James", 2, "james@email.com");
    expect(newEmp.getRole()).toBe("Employee");
});

