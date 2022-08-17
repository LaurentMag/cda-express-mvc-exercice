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
router.get("/edit/:id", controler.getRenderEdit);

router.get("/detail/:id", controler.getRenderDetail);
// router.get("/submitForm", controler.getFormSubmit);

router.get("/delete/:id", controler.otherMethod);

export {router};
