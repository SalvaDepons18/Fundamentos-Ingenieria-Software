"use strict";
// import { Grupo } from "./Grupo.js";
// import { Planificacion } from "./Planificacion.js";

export class Docente {
  //Atributos
  #name;
  #groups;
  #planifications;

  //Constructor
  constructor(a_name) {
    this.#name = a_name;
    this.#groups = [];
    this.#planifications = [];
  }

  //PRE: -
  //POS: Retorna el nombre del docente
  getNombre() {
    return this.#name;
  }

  //PRE: -
  //POS: Retorna la lista de grupos
  getGrupos() {
    return this.#groups;
  }

  //PRE: -
  //POS: Retorna la lista de planificaciones
  getPlanificacion() {
    return this.#planifications;
  }

  // PRE: Recibe un nombre
  // POS: Asigna el nombre del docente
  setNombre(a_name) {
    this.#name = a_name;
  }

  // PRE: Recibe una lista de grupos
  // POS: Asigna la lista de grupos del docente
  setGrupos(group) {
    this.#groups = group;
  }

  // PRE: Recibe una lista de planificaciones
  // POS: Asigna la lista de planificaciones del docente
  setPlanificacion(a_planification) {
    this.#planifications = a_planification;
  }

  // PRE: Recibe un grupo
  // POS: Agrega el grupo a la lista de grupos del docente
  addGrupo(group) {
    this.#groups.push(group);
  }

  // PRE: Recibe un grupo
  // POS: Elimina el grupo de la lista de grupos del docente
  removeGrupo(group) {
    for (let i = 0; i < this.#groups.length; i++) {
      if (this.#groups[i] === group) {
        this.#groups.splice(i, 1); // Elimina el evento en la posición 'i'
      }
    }
  }

  // PRE: Recibe una planificacion
  // POS: Si ya existe una planificacion para el mismo día, la reemplaza. Si no, agrega la nueva planificacion
  addPlanificacion(a_planification) {
    for (let i = 0; i < this.#planifications.length; i++) {
      if (
        this.#planifications[i].getDia() === a_planification.getDia() &&
        this.#planifications[i].getGrupo() === a_planification.getGrupo()
      ) {
        this.#planifications[i] = a_planification;
        return;
      }
    }
    this.#planifications.push(a_planification);
  }
  // PRE: Recibe una planificacion
  // POS: Elimina la planificacion de la lista de planificaciones del docente
  removePlanificacion(a_planification) {
    for (let i = 0; i < this.#planifications.length; i++) {
      if (this.#planifications[i] === a_planification) {
        this.#planifications.splice(i, 1); // Elimina el evento en la posición 'i'
      }
    }
  }
}
