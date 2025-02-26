"use strict";

export class Director {
  // Atributos
  #name;

  // Constructor
  constructor(a_name) {
    this.#name = a_name;
  }

  //PRE: -
  //POS: retorna el nombre
  getNombre() {
    return this.#name;
  }

  //PRE: recibe un nombre
  //POS: setea el nombre como atributo
  setNombre(a_name) {
    this.#name = a_name;
  }
}
