const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

let users = [];
let idCounter = 1;

//POST
app.post("/users/post", (req, res) => {
  const { name, age, email } = req.body;

  const newUsers = {
    id: idCounter++,
    name,
    age,
    email,
  };
  users.push(newUsers);
  res.status(201).json(newUsers);
});

//GET
app.get("/users/get", (req, res) => {
  res.status(200).json(users);
});

//PATCH
app.patch("/users/patch/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const user = users.find((u) => u.id === id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    };
    
    const {name,age, email} =req.body;

    // update values
    if (name !== undefined) user.name = name;
    if (age !== undefined) user.age = age;
    if (email !== undefined) user.email = email;

    res.json(user);
  } catch (error) {
    console.error("PATCH ERROR:", error);
    res.status(500).json({message: "Server error"})
  }
});

//DELETE
app.delete("/users/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);

  users = users.filter((user) => user.id != id);

  res.status(200).json({
    users: users,
    message: "User deleted!",
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
