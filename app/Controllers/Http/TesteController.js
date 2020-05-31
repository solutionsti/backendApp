"use strict";

const Owner = use("App/Models/Owner");

class TesteController {
  async index() {
    let users = await Owner.all();

    let user = await Owner.findBy("cpf", query);

    users = users.toJSON();
    return users[0].full_name;
  }
}

module.exports = TesteController;
