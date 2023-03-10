const express = require('express')
const app = express()



require("./db");


const Users = require("./models/users");

const users = [
  {
    nombre: "NewUser_10_03_2023",
    apellido: "Mei",
    dni: "31155898",
  },
];

// READ
const getAllUsers = async () => {
  const users = await Users.find();
  return users;
};
const usersDB = getAllUsers()
  .then((res) => {
    // console.log(res);
    return res
  })
  .catch((err) => {
    console.log(err);
  });

// SAVE
// const userSave = async (users) => {
//   let newUser;
//   await users.map((user) => {
//     let addUser = new Users({
//       nombre: user.nombre,
//       apellido: user.apellido,
//       dni: user.dni,
//     });

//     newUser = addUser.save();
//   });
//   return newUser;
// };
// userSave(users)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Server

const PORT = process.env.PORT || 8082

// Leo los datos que se encuentran en MongoAltlas
app.get('/users', async (req, res) => {
  const usersMongoAltas = await usersDB
  res.json({ users: usersMongoAltas })
})



app.listen(PORT, () => {
  console.log(`server run on port: ${PORT}`);
})

