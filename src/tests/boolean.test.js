const Joi = require("joi");
// const { test } = require("vitest");
// uncommenting the above line throws error??

test('Boolean funct. falsy', () => {
    // both the value must match i.e., Cancel then only it willll give the result false
    // Instead of Cancel we can put anything
    // const val = Joi.boolean().falsy("Cancel")
    // const { error, value }  = val.validate("Cancel")
    

    const val = Joi.boolean().falsy("Cancel")
    const { error, value }  = val.validate("No")
    

    if (error) {
        console.error('Validation Error:', error.details[0].message);
      } else {
        console.log('Validated Data:', value);
      }
      
    //   const { error, value }  = val.validate("Nooo")
})

test('Boolean funct. sensative', () => {
    // both the value must match i.e., Cancel then only it willll give the result false
    // Instead of Cancel we can put anything
    // const val = Joi.boolean().sensative("Cancel")
    // const { error, value }  = val.validate("Cancel")
    

    const val = Joi.boolean().sensative("Cancel")
    const { error, value }  = val.validate("No")
    

    if (error) {
        console.error('Validation Error:', error.details[0].message);
      } else {
        console.log('Validated Data:', value);
      }
      
    //   const { error, value }  = val.validate("Nooo")
})

test('Boolean funct. sensative', () => {
    // both the value must match i.e., Cancel then only it willll give the result false
    // Instead of Cancel we can put anything
    // const val = Joi.boolean().sensative("Cancel")
    // const { error, value }  = val.validate("Cancel")
    

    const val = Joi.boolean().sensative("Cancel")
    const { error, value }  = val.validate("No")
    

    if (error) {
        console.error('Validation Error:', error.details[0].message);
      } else {
        console.log('Validated Data:', value);
      }
      
    //   const { error, value }  = val.validate("Nooo")
})