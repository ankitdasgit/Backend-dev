const express = require("express");
const app = express();
//middilware function
app.use(express.json());

app.listen(3000);

let users = {};

app.get("/user", (req, res) => {
  res.send(users);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  users = req.body;
  res.json({
    message: "data received successfully",
    user: req.body,
  });
});

//update
app.patch("/user", (req, res) => {
  console.log("req.body->", req.body);
  res.json({
    message: "data updated successfully",
  });
});

//delete a data
app.delete("/user", (req, res) => {
  users = {};
  res.json({
    message: "data deleted successfully",
  });
});
