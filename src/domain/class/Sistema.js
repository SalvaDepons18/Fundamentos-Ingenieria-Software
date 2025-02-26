"use strict";
// import { Calendario } from "./Calendario.js";
//import { Docente } from "./Docente.js";
// import { Evento } from "./Evento.js";
import { Grupo } from "./Grupo.js";
// import { Planificacion } from "./Planificacion.js";

export class Sistema {
  // Atributos
  #teachers;
  #planifications;
  #groups;
  #calendars;
  #events;

  // Constructor
  constructor() {
    this.#teachers = [];
    this.#planifications = [];
    this.#groups = [];
    this.#calendars = [];
    this.#events = [];
  }

  //PRE: -
  //POS: Retorna la lista de docentes
  getDocentes() {
    return this.#teachers;
  }

  //PRE: -
  //POS: Retorna la lista de planificaciones
  getPlanificaciones() {
    return this.#planifications;
  }

  //PRE: -
  //POS: Retorna la lista de grupos
  getGrupos() {
    return this.#groups;
  }

  //PRE: -
  //POS: Retorna la lista de calendarios
  getCalendarios() {
    return this.#calendars;
  }

  //PRE: -
  //POS: Retorna la lista de eventos
  getEventos() {
    return this.#events;
  }

  // PRE: Recibe una lista de docentes
  // POS: Asigna la lista de docentes a Docentes
  setDocentes(teachers) {
    this.#teachers = teachers;
  }

  // PRE: Recibe una lista de planificaciones
  // POS: Asigna la lista de planificaciones a Planificacion
  setPlanificaciones(planifications) {
    this.#planifications = planifications;
  }

  // PRE: Recibe una lista de grupos
  // POS: Asigna la lista de grupos a Grupos
  setGrupos(groups) {
    this.#groups = groups;
  }

  // PRE: Recibe una lista de calendarios
  // POS: Asigna la lista de calendarios a Calendarios
  setCalendarios(calendars) {
    this.#calendars = calendars;
  }

  // PRE: Recibe una lista de eventos
  // POS: Asigna la lista de eventos a Eventos
  setEventos(events) {
    this.#events = events;
  }

  //PRE: Recibe un docente
  //POS: Agrega el docente a la lista de docentes
  addDocente(a_teacher) {
    this.#teachers.push(a_teacher);
  }

  //PRE: Recibe un grupo
  //POS: Agrega el grupo a la lista de grupos
  addGrupo(a_group) {
    this.#groups.push(a_group);
  }

  //PRE: Recibe un calendario
  //POS: Agrega el calendario a la lista de calendarios
  addCalendario(a_calendar) {
    this.#calendars.push(a_calendar);
  }

  //PRE: Recibe un evento
  //POS: Agrega el evento a la lista de eventos
  addEvento(a_event) {
    this.#events.push(a_event);
  }

  //PRE: Recibe un docente
  //POS: Elimina el docente de la lista de docentes
  removeDocente(a_teacher) {
    for (let i = 0; i < this.#teachers.length; i++) {
      if (this.#teachers[i] === a_teacher) {
        this.#teachers.splice(i, 1);
      }
    }
  }

  //PRE: Recibe una planificación
  //POS: Elimina la planificación de la lista de planificaciones
  removePlanificacion(a_planification) {
    for (let i = 0; i < this.#planifications.length; i++) {
      if (this.#planifications[i] === a_planification) {
        this.#planifications.splice(i, 1);
      }
    }
  }

  removeGrupo(a_group) {
    for (let i = 0; i < this.#groups.length; i++) {
      const g = this.#groups[i];
      if (g === a_group) {
        this.#groups.splice(i, 1);
      }
    }
  }

  //PRE: Recibe un calendario
  //POS: Elimina el calendario de la lista de calendarios
  removeCalendario(a_calendar) {
    for (let i = 0; i < this.#calendars.length; i++) {
      if (this.#calendars[i] === a_calendar) {
        this.#calendars.splice(i, 1);
      }
    }
  }

  //PRE: Recibe un evento
  //POS: Elimina el evento de la lista de eventos
  removeEvento(a_event) {
    for (let i = 0; i < this.#events.length; i++) {
      if (this.#events[i] === a_event) {
        this.#events.splice(i, 1);
      }
    }
  }

  //PRE: recibe un nombre de docente
  //POS: devuelve el objeto docente con ese nombre o null en el caso que no exista
  getDocenteByName(a_name) {
    for (let i = 0; i < this.#teachers.length; i++) {
      if (this.#teachers[i].getNombre() === a_name) {
        return this.#teachers[i];
      }
    }
    return null;
  }

  //PRE: recibe un nombre de grupo
  //POS: devuelve el objeto grupo con ese nombre o null en el caso que no exista
  getGroupByName(a_name) {
    for (let i = 0; i < this.#groups.length; i++) {
      if (this.#groups[i].getNombre() === a_name) {
        return this.#groups[i];
      }
    }
    return null; // esto pasa si no existe ese grupo
  }

  // PRE: Recibe los atributos de un grupo y un docente
  // POS: Agrega a la lista de grupos en el sistema y en la lista del docente. Lanza un error si el docente no es válido.
  groupAdd(a_name, a_grade, a_student_cant, a_teacher) {
    if (!a_teacher) {
      throw new TypeError("El docente proporcionado no es válido.");
    }

    const new_group = new Grupo(a_name, a_grade, a_student_cant);
    this.#groups.push(new_group);
    a_teacher.addGrupo(new_group);
  }

  // PRE: Recibe una planificación
  // POS: Si ya existe una planificación para el mismo día y docente, la reemplaza. Si no, agrega la nueva planificación.
  addPlanificacion(a_planification) {
    for (let i = 0; i < this.#planifications.length; i++) {
      const actual_planification = this.#planifications[i];

      if (
        actual_planification.getDia() === a_planification.getDia() &&
        actual_planification.getDocente() === a_planification.getDocente() &&
        actual_planification.getGrupo() === a_planification.getGrupo()
      ) {
        this.#planifications[i] = a_planification;
        return;
      }
    }
    this.#planifications.push(a_planification);
  }

  // PRE: Recibe un grupo, un día y un docente
  // POS: Devuelve la planificación específica que coincide con el grupo, día y docente, o null si no existe.
  getPlanificacionEspecifica(a_group, a_day, a_teacher) {
    for (let i = 0; i < this.#planifications.length; i++) {
      const planification = this.#planifications[i];
      if (
        planification.getGrupo() === a_group &&
        planification.getDia() === a_day &&
        planification.getDocente() === a_teacher
      ) {
        return planification;
      }
    }
    return null;
  }
}
