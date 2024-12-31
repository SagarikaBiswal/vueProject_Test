// const { expect } = require("vitest");

const user = {
    name: "Matt",
    age: 32
};

test ("Matt age is 22", () =>{
    expect(user.name).toBe("Matt");
    expect(user.age).toBe(32)
})