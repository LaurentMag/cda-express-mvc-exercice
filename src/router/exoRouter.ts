import express from "express";
import {ExoControler} from "../controler/controler";
// import {ExoModel} from "../model/model";
import {UsersModel} from "../model/userModel";

// def le router
const router = express.Router();

// const exoModel: ExoModel = new ExoModel();

const usersData: UsersModel = new UsersModel();
const controler = new ExoControler(usersData);

router.get("/", controler.getRenderUserData);

router.get("/ajout", controler.getRenderAjout);
router.get("/edit", controler.getRenderEdit);
// router.get("/submitForm", controler.getFormSubmit);

export {router};
