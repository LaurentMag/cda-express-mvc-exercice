import {Request, Response} from "express";
// import {ExoModel} from "../model/model";

import {UsersModel} from "../model/userModel";

export class ExoControler {
  // private _model: ExoModel;

  // constructor(model: ExoModel) {
  //   this._model = model;
  // }

  // getRenderData = (req: Request, res: Response) => {
  //   console.log("c'est l'accueil");
  //   res.render("accueil", {data: this._model.sendData()});
  // };

  // -----------------------------------------------------------

  private _usersModel: UsersModel;

  constructor(usersModel: UsersModel) {
    this._usersModel = usersModel;
  }

  getRenderUserData = async (req: Request, res: Response) => {
    const data = await this._usersModel.fetchUserData().then((res: any) => res.json().then((res: any) => res));

    res.render("accueil", {usersData: data});
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
