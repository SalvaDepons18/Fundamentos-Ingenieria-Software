"use strict";

export class Grupo {
  // Atributos
  #name;
  #grade;
  #students_count;

  // Constructor
  constructor(a_name, a_grade, a_students_count) {
    this.#name = a_name;
    this.#grade = a_grade;
    this.#students_count = a_students_count;
  }

  //PRE: -
  //POS: retorna el nombre
  getNombre() {
    return this.#name;
  }

  //PRE: -
  //POS: retorna el grado
  getGrado() {
    return this.#grade;
  }

  //PRE: -
  //POS: retorna la cantidad de alumnos
  getCantidadAlumnos() {
    return this.#students_count;
  }

  //PRE: recibe un nombre de grupo
  //POS: asigna el nombre al atributo correspondiente
  setNombre(a_name) {
    this.#name = a_name;
  }

  //PRE: recibe un grado
  //POS: asigna el grado al atributo correspondiente
  setGrado(a_grade) {
    this.#grade = a_grade;
  }

  //PRE: recibe la cantidad de alumnos
  //POS: asigna la cantidad de alumnos al atributo correspondiente
  setCantidadAlumnos(a_students_count) {
    this.#students_count = a_students_count;
  }
}
