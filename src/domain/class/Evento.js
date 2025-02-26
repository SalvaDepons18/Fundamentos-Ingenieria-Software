"use strict";

export class Evento {
  #name;
  #description;
  #color;
  #day;
  #mounth;
  #year;

  constructor(a_name, a_descripcion, a_color, a_day, a_mounth, a_year) {
    this.#name = a_name;
    this.#description = a_descripcion;
    this.#color = a_color;
    this.#day = a_day;
    this.#mounth = a_mounth;
    this.#year = a_year;
  }

  //PRE: -
  //POS: Retorna la fecha del evento en formato (DD/MM/AAAA)
  getFecha() {
    return this.#day + "/" + this.#mounth + "/" + this.#year;
  }

  //PRE: -
  //POS: Retorna el nombre del evento
  getNombre() {
    return this.#name;
  }

  //PRE: -
  //POS: Retorna la descripción del evento
  getDescripcion() {
    return this.#description;
  }

  //PRE: -
  //POS: Retorna el color del evento
  getColor() {
    return this.#color;
  }

  //PRE: Recibe un nombre válido como parámetro
  //POS: Asigna el nombre al atributo correspondiente
  setNombre(a_name) {
    this.#name = a_name;
  }

  //PRE: Recibe una descripción válida como parámetro
  //POS: Asigna la descripción al atributo correspondiente
  setDescripcion(a_descripcion) {
    this.#description = a_descripcion;
  }

  //PRE: Recibe un color válido como parámetro
  //POS: Asigna el color al atributo correspondiente
  setColor(color) {
    this.#color = color;
  }

  //PRE: Recibe el día, mes y año válidos como parámetros
  //POS: Asigna la fecha al atributo correspondiente en formato (DD/MM/AAAA)
  setFecha(a_dia, a_mounth, a_year) {
    this.#day = a_dia;
    this.#mounth = a_mounth;
    this.#year = a_year;
  }
}
