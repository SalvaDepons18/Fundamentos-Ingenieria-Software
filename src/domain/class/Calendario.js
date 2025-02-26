"use strict";
/* ------------------ import { Evento } from "./Evento.js"; ----------------- */

export class Calendario {
  // Atributo
  #events;

  // Constructor
  constructor(events = []) {
    this.#events = events;
  }

  //PRE: -
  //POS: retorna una lista con los eventos de el calendario
  getEventos() {
    return this.#events;
  }
  //PRE: recibe un evento
  //POS: setea el atributo de los eventos
  setEventos(new_events) {
    this.#events = new_events;
  }

  //PRE: recibe una fecha
  //POS: devuelve los eventos para esa fecha
  getEventosPorFecha(date) {
    let events_return = [];
    for (let i = 0; i < this.#events.length; i++) {
      const element = this.#events[i];
      if (element.getFecha() == date) {
        events_return.push(element);
      }
    }
    return events_return;
  }

  //PRE: Recibe un evento
  //POS: Agrega el evento a la lista de eventos del Calendario
  addEvento(a_event) {
    // Asegura que la fecha tenga una lista inicializada y agrega el evento.
    this.#events.push(a_event);
  }

  //PRE: Recibe un evento
  //POS: Elimina el evento de la lista de eventos del Calendario
  removeEvento(a_event) {
    for (let i = 0; i < this.#events.length; i++) {
      const element = this.#events[i];
      if (element == a_event) {
        this.#events.splice(i, 1);
      }
    }
  }
}
