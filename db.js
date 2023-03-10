const mongosee = require("mongoose");

// const patchConnet =
//   "mongodb+srv://Alejandro:admin@ecommerce.rioie.mongodb.net/coder_ecommerce?retryWrites=true&w=majority";

const patchConnet = "mongodb+srv://coder_render:coder_render_pwd@cluster0.yrdekb0.mongodb.net/?retryWrites=true&w=majority"

mongosee.connect(patchConnet);

mongosee.connection.on("open", () => {
  console.log("Base de datos conectada!!..");
});

mongosee.connection.on("error", (err) => {
  console.log("Error en la conexion", err);
});
