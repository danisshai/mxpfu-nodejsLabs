const express = require('express');
const router = express.Router();


let notFound =  {status: "not found"};
let success = {status: "Success"};
let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(users);//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Copy the code here
  let email = req.params.email;
  let user = users.filter(user => user.email === email);
  if (user[0]) {
    res.send(user)
  }
  res.send(notFound)
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
  let newUser = req.query;
  users.push(newUser)
  res.send({...success, email: newUser.email})//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  let updated = false;
  users.map(user => {
      if (user.email === req.params.email) {
        updated = true;
          for ( let key in req.query){
              user[key] = req.query[key];
          }
      };
      return user;
  })
  if (updated) {
    res.send(success)
  }
  res.send(notFound)//This line is to be replaced with actual return value
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  users = users.filter(user => {
      if (user.email === req.params.email) {
          return
      }
      else {return user}
  })
  res.send({message: `Removed ${req.params.email}`})//This line is to be replaced with actual return value
});

module.exports=router;
