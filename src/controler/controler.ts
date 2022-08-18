import express, {Request, Response, NextFunction} from "express";
// import bodyParser from "body-parser";
//
import {UsersModel} from "../model/userModel";

import {UserDefault} from "../dto/userType";
// -----------------------------------------------------------
// -----------------------------------------------------------
export class ExoControler {
  private _usersModel: UsersModel;

  constructor(usersModel: UsersModel) {
    this._usersModel = usersModel;
  }

  // DISPLAY LIST HOMEPAGE
  getRenderUserData = async (req: Request, res: Response) => {
    const data = await this._usersModel
      .fetchUserData()
      .then((res: any) => res.json().then((res: any) => res))
      .catch((err) => console.error(err));
    res.render("accueil", {usersData: data});
  };

  // DISPLAY DETAIL IN DETAIL PAGE
  getRenderDetail = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const oneUser = await this._usersModel.fetchUserId(id).then((res: any) => res.json().then((res: any) => res));

    res.render("detail", {oneUser});
  };

  // -----------------------------------------------------------
  // AJOUT USER PAGE
  getRenderAjout = (req: Request, res: Response) => {
    res.render("ajout");
  };

  // EDIT PAGE
  getRenderEdit = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const userToEdit = await this._usersModel.fetchUserId(id).then((res) => res.json().then((res) => res));
    res.render("edit", {id});
  };

  // -----------------------------------------------------------
  // DELETE USER
  otherMethod = (req: Request, res: Response) => {
    const id: string = req.params.id;
    this._usersModel.deleteUserById(id);

    res.redirect("/");
  };

  // SUBMITED DATA. DONT WORK HERE.. IN INDEX YES
  postSubmitAddFormInfo = (req: Request, res: Response) => {
    const {nom, prenom, ville} = req.body;

    const nomT: string = `${nom} ${prenom}`;

    const defaultUser: UserDefault = new UserDefault(nomT, ville);
    const newUserToAdd: UserDefault = defaultUser;

    this._usersModel.addUser(newUserToAdd);

    res.redirect("/");
  };

  // USER INFORMATION EDITION
  editUserInfo = (req: Request, res: Response) => {
    const id: string = req.params.id;
    const {nom, prenom, ville} = req.body;

    const nomT: string = `${nom} ${prenom}`;

    const defaultUser: UserDefault = new UserDefault(nomT, ville);

    this._usersModel.updateUser(id, defaultUser);
    res.redirect("/");

    // DEBUG
    // console.log("edit");
    // res.send("ok");
  };
}
