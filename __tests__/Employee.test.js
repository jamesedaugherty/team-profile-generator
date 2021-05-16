const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

TestScheduler("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object")
})

