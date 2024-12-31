const Joi = require("joi");
const { test } = require("vitest");

const schema = Joi.object({
    a: Joi.string().min(10)
})


test("basic schema creation", () => {
    const { error, value } = schema.validate({  a: 'Demo string'}) 

    if (error) {
        console.error('Validation Error:', error.details[0].message);
      } else {
        console.log('Validated Data:', value);
      }
})

test("basic schema creation", () => {
    const { error, value } = schema.validate({  a: 'Demo string'}) 

    if (error) {
        console.log("Validation Error:", error.details[0].message);
    } else {
        console.log("Validation Data:", value);
    }
})
test("Assert Joi.number()", () => {
    console.log(Joi.assert(123, Joi.number()));
    // it is considered as string but it has number within
    Joi.assert("123", Joi.number());
    // ?String with braces should fail
    try {
        Joi.assert('abc', Joi.number(), 'String value entered'); 
    } catch (error) {
        console.error(error.message)
    }
    
})
test("Assert Joi.string()", () => {
    // False
    // console.log(Joi.assert(123, Joi.string()));4
    // it is  considered as string
    console.log(Joi.assert("123", Joi.string()));
    console.log(Joi.assert("123abc", Joi.string()));
    console.log(Joi.assert('abc', Joi.string()));
})


// Validate and attempt are bpth methods used to validate date against a schema
// Validate - does NOT throw error instead return error in error property
// attempt() - throws error. use try catch. used to strictly validate
test('attempt Funct', () => {
    const schema = Joi.object({
        name :Joi.string().alphanum().min(3),
        password: Joi.string().alphanum().min(4)
    })
    try {
        console.log(Joi.attempt(
            {name:'Sr', password:"qwe123"}, 
            schema,
            'Validation Error:',
              //concats the 'Validation error' and actual error msg i.e., name ... 
              
        ));
    } catch (error) {
       console.error(error.message);
        
    }
    //Added git testing Code
    test("test Brach ", ()=> {

    }) 
})
