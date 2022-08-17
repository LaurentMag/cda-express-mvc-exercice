import express from "express";
import {ExoControler} from "../controler/controler";
import {ExoModel} from "../model/model";

// def le router
const router = express.Router();

const exoModel: ExoModel = new ExoModel();
const controler = new ExoControler(exoModel);

router.get("/", controler.getRenderData);
router.get("/ajout", controler.getRenderAjout);
router.get("/edit", controler.getRenderEdit);
// router.get("/submitForm", controler.getFormSubmit);

export {router};
