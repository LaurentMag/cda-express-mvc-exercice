import express, {Request, Response} from "express";
import * as path from "path";
//path appartient a node et nécessaire pour spécifier où aller chercher les path
import {router} from "./router/exoRouter";

import "dotenv/config";

const app = express();
const port = process.env.PORT;

//middleWare
app.use(express.json());

app.use(router);

// define views
app.set("views", path.join(process.cwd(), "/src/view"));
app.set("view engine", "ejs");

// define public folder

app.use("/public", express.static(path.join(process.cwd(), "/src/public")));

// ___________________________________________
// un port c'est un point d'accès pour une application ( et il ne peut y avoir qu'une appli par port )
//
app.listen(port, () => {
  console.log(`server lancé sur le port ${port}`);
  console.log(process.cwd());
});
