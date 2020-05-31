"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Owner extends Model {
  static get table() {
    return "dpgis_sfin.owner";
  }
}

module.exports = Owner;
