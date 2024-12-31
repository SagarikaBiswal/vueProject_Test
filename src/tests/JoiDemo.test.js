import Joi from 'joi';

// const userSchema = Joi.object({
//     name: Joi.string().min(3).max(30).required(),
//     email: Joi.string().email().required(),
//     age: Joi.number().integer().min(18).max(100).optional(),
//   });
  
//  error message display. message()
const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        'string.base': 'Name must be a string.',
        'string.empty': 'Name is required.',
        'string.min': 'Name must be at least 3 characters long.',
        'any.required': 'Name is a required field.',
      }),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(18).max(100).optional(),
  });


test("Schema Validation", () => {
    const userInput = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 25,
      };
      
      const { error, value } = userSchema.validate(userInput);
      
      if (error) {
        console.error('Validation Error:', error.details[0].message);
      } else {
        console.log('Validated Data:', value);
      }
})

test("Schema Validation with error", () => {
    const userInput = {
        name: 134,
        email: 'john.doe@example.com',
        age: 25,
      };
      
      const { error, value } = userSchema.validate(userInput);
      
      if (error) {
        console.error('Validation Error:', error.details[0].message);
      } else {
        console.log('Validated Data:', value);
      }
})
  
  