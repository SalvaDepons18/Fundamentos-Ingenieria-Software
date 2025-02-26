"use strict";
import { Calendario } from "./Calendario.js";
// import { Director } from "./Director.js";
// import { Docente } from "./Docente.js";

export class Institucion {
  // Atributos
  #calendar;
  #name;
  #teachers;
  #director;

  // Constructor
  constructor(a_name, a_director = null, initial_teacher = []) {
    this.#name = a_name;
    this.#calendar = new Calendario();
    this.#teachers = initial_teacher;
    this.#director = a_director;
  }

  //PRE: -
  //POS: retorna el nombre de la intitucion
  getNombre() {
    return this.#name;
  }

  //PRE: -
  //POS: retorna el calendario de la intitucion
  getCalendario() {
    return this.#calendar;
  }

  //PRE: -
  //POS: retorna una lista con los docentes de la institucion
  getDocentes() {
    return this.#teachers;
  }

  //PRE: -
  //POS: retorna el director asociado a la intitucion
  getDirector() {
    return this.#director;
  }

  //PRE: recibe un calendario
  //POS: asigna el calendario al atributo correspondiente
  setCalendario(a_calendar) {
    this.#calendar = a_calendar;
  }

  //PRE: recibe un nombre válido
  //POS: asigna el nombre al atributo correspondiente
  setNombre(a_name) {
    this.#name = a_name;
  }

  //PRE: recibe una lista de docentes
  //POS: asigna la lista de docentes al atributo correspondiente
  setDocentes(teachers) {
    this.#teachers = teachers;
  }

  //PRE: recibe un director
  //POS: asigna el director al atributo correspondiente
  setDirector(a_director) {
    this.#director = a_director;
  }

  //PRE: recibe un docente
  //POS: lo agrega a la lista de docentes
  addDocente(a_teacher) {
    if (a_teacher) {
      this.#teachers.push(a_teacher);
    }
  }

  //PRE: recibe un docente
  //POS: lo elimina de la lista de docentes
  removeDocente(a_teacher) {
    for (let i = 0; i < this.#teachers.length; i++) {
      if (this.#teachers[i] === a_teacher) {
        this.#teachers.splice(i, 1); // Elimina el docente en la posición 'i'
      }
    }
  }
}
