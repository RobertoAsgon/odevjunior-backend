module.exports = app => {
  const users = require("../controller/user.controller.js");
  const auth = require("../middleware/auth")

  app.get("/", (_req, res) => res.send('Ok!'));

  // Login user
  app.post("/login", users.login);

  // Create a new User
  app.post("/users", users.create);

  // Find all users
  app.get("/users",  auth(true), users.findAll);

  // Find a single User with userId
  app.get("/users/:userId", users.findOne);

  // Update a User with userId
  app.put("/users/:userId", users.update);

  // Delete a User with userId
  app.delete("/users/:userId", users.delete);

  // Create a new User
  app.delete("/users", users.deleteAll);
};