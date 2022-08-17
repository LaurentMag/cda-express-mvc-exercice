import {Axios, AxiosResponse} from "axios";
import "dotenv/config";
import axios from "axios";

const URI = process.env.URI;

export class UsersModel {
  private _data: string[] = [];

  // fetchUserData = () => {
  //   axios.get(`${URI}`).then((response: AxiosResponse) => console.log(response));
  // };

  fetchUserData = () => {
    return fetch(`${URI}`);
    // .then((res) => res.json())
    // .then((res) => (this._data = res))
    // .then(() => this._data);
  };

  fetchUserId = (id: string) => {
    return fetch(`${URI}/${id}`);
  };

  deleteUserById = (id: string) => {
    fetch(`${URI}/${id}`, {method: "DELETE"});
  };
}
