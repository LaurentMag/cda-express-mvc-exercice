export class UserDefault {
  name: string;
  address: {
    city: string;
  };

  constructor(name: string, city: string) {
    this.name = name;
    this.address = {city: city};
  }
}

// data transfert object
// permet de typer et fusionner les objects
