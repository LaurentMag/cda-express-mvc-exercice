import express, {NextFunction, Request, Response} from "express";
import bodyParser from "body-parser";
import * as path from "path";
//path appartient a node et nécessaire pour spécifier où aller chercher les path
import {router} from "./router/exoRouter";
import {UsersModel} from "./model/userModel";

import "dotenv/config";

const app = express();
const port = process.env.PORT;

//middleWare
app.use(express.json());
// body parser is depresiated
// app.use(bodyParser.json());

// middleware to gather info from submit in url
app.use(express.urlencoded());

// both middleware need to be declared before the router, as its "started" before the router
// and thoses
app.use(router);

// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// define views
app.set("views", path.join(process.cwd(), "/src/view"));
app.set("view engine", "ejs");

// define public folder
app.use("/public", express.static(path.join(process.cwd(), "/src/public")));

// SEND USER --------------------------------------------------------------------------
// app.post("/submitForm", function (req, res, next) {
//   const {nom, prenom, ville} = req.body;
//   const newUserToAdd: any = {name: nom, firstname: prenom, address: {city: ville}};

//   // display object
//   //res.send(stringData);

//   const usersModel = new UsersModel();
//   usersModel.addUser(newUserToAdd);

//   res.redirect("/");
// });

// ___________________________________________

app.listen(port, () => {
  console.log(`server lancé sur le port ${port}`);
  console.log(process.cwd());
});
