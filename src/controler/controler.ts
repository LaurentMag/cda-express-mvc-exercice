import {Request, Response} from "express";
import {ExoModel} from "../model/model";

export class ExoControler {
  private _model: ExoModel;

  constructor(model: ExoModel) {
    this._model = model;
  }

  getRenderData = (req: Request, res: Response) => {
    console.log("c'est l'accueil");
    res.render("accueil", {data: this._model.sendData()});
  };

  getRenderAjout = (req: Request, res: Response) => {
    console.log("Ajouter");
    res.render("ajout");
  };

  getRenderEdit = (req: Request, res: Response) => {
    console.log("edition");
    res.render("edit");
  };
}
