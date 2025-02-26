"use strict";
// import { Grupo } from "./Grupo.js";

export class Planificacion {
  //Atributos
  #space;
  #curricular_unit;
  #general_competence;
  #specific_competence;
  #structural_content;
  #learning_goals;
  #learning_plans;
  #note;
  #group;
  #day;
  #teacher;

  //Constructor
  constructor(
    a_space,
    a_curricular_unit,
    a_general_competence,
    a_specific_competence,
    a_structural_content = [],
    a_learning_goals = [],
    a_learning_plans = [],
    a_note,
    a_group,
    a_day,
    a_teacher
  ) {
    this.#space = a_space;
    this.#curricular_unit = a_curricular_unit;
    this.#general_competence = a_general_competence;
    this.#specific_competence = a_specific_competence;
    this.#structural_content = a_structural_content;
    this.#learning_goals = a_learning_goals;
    this.#learning_plans = a_learning_plans;
    this.#note = a_note;
    this.#group = a_group;
    this.#day = a_day;
    this.#teacher = a_teacher;
  }

  //PRE: -
  //POS: retorna el espacio curricular
  getEspacio() {
    return this.#space;
  }

  //PRE: -
  //POS: retorna la unidad curricular
  getUnidadCurricular() {
    return this.#curricular_unit;
  }

  //PRE: -
  //POS: retorna la competencia general
  getCompetenciaGeneral() {
    return this.#general_competence;
  }

  //PRE: -
  //POS: retorna la competencia especifica
  getCompetenciaEspecifica() {
    return this.#specific_competence;
  }

  //PRE: -
  //POS: retorna el contenido estructural
  getContenidoEstructural() {
    return this.#structural_content;
  }

  //PRE: -
  //POS: retorna las metas de aprendizaje
  getMetasAprendizaje() {
    return this.#learning_goals;
  }

  //PRE: -
  //POS: retorna los planes de aprendizaje
  getPlanesAprendizaje() {
    return this.#learning_plans;
  }

  //PRE: -
  //POS: retorna la nota
  getNota() {
    return this.#note;
  }

  //PRE: -
  //POS: retorna el grupo
  getGrupo() {
    return this.#group;
  }

  //PRE: -
  //POS: retorna el dia
  getDia() {
    return this.#day;
  }

  //PRE: -
  //POS: retorna el docente
  getDocente() {
    return this.#teacher;
  }

  //PRE: Recibe un espacio curricular
  //POS: Asigna el espacio curricular al atributo correspondiente
  setEspacio(a_space) {
    this.#space = a_space;
  }

  //PRE: Recibe una unidad curricular
  //POS: Asigna la unidad curricular al atributo correspondiente
  setUnidadCurricular(a_curricular_unit) {
    this.#curricular_unit = a_curricular_unit;
  }

  //PRE: Recibe una competencia general
  //POS: Asigna la competencia general al atributo correspondiente
  setCompetenciaGeneral(a_general_competence) {
    this.#general_competence = a_general_competence;
  }

  //PRE: Recibe una competencia específica
  //POS: Asigna la competencia específica al atributo correspondiente
  setCompetenciaEspecifica(a_specific_competence) {
    this.#specific_competence = a_specific_competence;
  }

  //PRE: Recibe un contenido estructural
  //POS: Asigna el contenido estructural al atributo correspondiente
  setContenidoEstructural(a_structural_content) {
    this.#structural_content = a_structural_content;
  }

  //PRE: Recibe las metas de aprendizaje
  //POS: Asigna las metas de aprendizaje al atributo correspondiente
  setMetasAprendizaje(a_learning_goals) {
    this.#learning_goals = a_learning_goals;
  }

  //PRE: Recibe los planes de aprendizaje
  //POS: Asigna los planes de aprendizaje al atributo correspondiente
  setPlanesAprendizaje(a_learning_plans) {
    this.#learning_plans = a_learning_plans;
  }

  //PRE: Recibe una nota
  //POS: Asigna la nota al atributo correspondiente
  setNota(a_note) {
    this.#note = a_note;
  }

  //PRE: Recibe un grupo
  //POS: Asigna el grupo al atributo correspondiente
  setGrupo(a_group) {
    this.#group = a_group;
  }

  //PRE: Recibe un dia
  //POS: Asigna el dia al atributo correspondiente
  setDia(a_day) {
    this.#day = a_day;
  }

  //PRE: Recibe un dia
  //POS: Asigna el dia al atributo correspondiente
  setDocente(a_teacher) {
    this.#teacher = a_teacher;
  }
}
