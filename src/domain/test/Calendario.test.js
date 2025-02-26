import { expect, test, describe, beforeEach } from "@jest/globals";
import { Evento } from "../class/Evento";
import { Calendario } from "../class/Calendario";

describe("Tests de la clase Calendario", () => {
  let test_calendar;
  let events_list;
  let evento1;
  let evento2;
  let test_calendar_noEvents;
  beforeEach(() => {
    evento1 = new Evento(
      "Nombre Evento",
      "Descripcion Evento",
      "#FF5733",
      "18",
      "11",
      "2024"
    );
    evento2 = new Evento(
      "Nombre Evento 2",
      "Descripcion Evento 2",
      "#FF5732",
      "19",
      "12",
      "2024"
    );
    events_list = [evento1];
    test_calendar_noEvents = new Calendario();
    test_calendar = new Calendario(events_list);
  });

  test("Debería devolver la lista de eventos", () => {
    const calendar_events = test_calendar.getEventos();
    expect(calendar_events).toEqual(events_list);
  });

  test("Debería devolver la lista de eventos vacía", () => {
    const calendar_events = test_calendar_noEvents.getEventos();
    expect(calendar_events).toEqual([]);
  });

  test("Deberia devolver un arreglo vacío cuando eventos es undefined", () => {
    const calendar_undefined = new Calendario(undefined); // Sin inicializar correctamente
    const events_undefined = calendar_undefined.getEventos();
    expect(events_undefined).toEqual([]); // Verificar que retorna un arreglo vacío
  });

  test("Debería asignar la nueva lista de eventos", () => {
    const expected_newEvent_list = [evento2];
    test_calendar.setEventos(expected_newEvent_list);
    const calendar_events = test_calendar.getEventos();
    expect(calendar_events).toEqual(expected_newEvent_list);
  });

  test("Debería agregar un evento a la lista de eventos", () => {
    test_calendar_noEvents.addEvento(evento2);
    // Se espera un arreglo plano porque así se almacenan los eventos actualmente.
    const expected_events = [evento2];
    const calendar_events = test_calendar_noEvents.getEventos();
    expect(calendar_events).toEqual(expected_events);
  });

  test("Debería eliminar un evento de la lista de eventos", () => {
    test_calendar.removeEvento(evento1);
    const calendar_events = test_calendar.getEventos();
    const expected_events = [];
    expect(calendar_events).toEqual(expected_events);
  });

  test("Debería no hacer nada si el evento a eliminar no existe", () => {
    const evento_inexistente = new Evento(
      "Evento Inexistente",
      "Descripcion",
      "#000000",
      "20",
      "01",
      "2025"
    );
    test_calendar.removeEvento(evento_inexistente);
    const calendar_events = test_calendar.getEventos();
    expect(calendar_events).toEqual(events_list);
  });

  test("Debería devolver un evento dada la fecha", () => {
    test_calendar.addEvento(evento2);
    const fecha_evento2 = evento2.getFecha();
    const expected_evento = test_calendar.getEventosPorFecha(fecha_evento2);
    expect(expected_evento).toEqual([evento2]);
  });

  test("Debería devolver eventos diferentes dada distintas fechas", () => {
    const evento3 = new Evento(
      "e3",
      "evento numero 3",
      "A33234",
      "04",
      "04",
      "2024"
    );
    test_calendar.addEvento(evento2);
    test_calendar.addEvento(evento3);
    const fecha_evento2 = evento2.getFecha();
    const fecha_evento3 = evento3.getFecha();
    const expected_evento2 = test_calendar.getEventosPorFecha(fecha_evento2);
    const expected_evento3 = test_calendar.getEventosPorFecha(fecha_evento3);
    expect(expected_evento2).toEqual([evento2]);
    expect(expected_evento3).toEqual([evento3]);
  });

  test("Debería devolver vacio", () => {
    test_calendar.addEvento(evento2);
    const fecha_inexistente = "00/00/0000";
    const expected_evento2 =
      test_calendar.getEventosPorFecha(fecha_inexistente);
    expect(expected_evento2).toEqual([]);
  });

  test("Debería devolver vacio los eventos", () => {
    expect(test_calendar_noEvents.getEventos()).toEqual([]);
  });

  test("Debería agregar un evento con fecha repetida", () => {
    const evento3 = new Evento(
      "e3",
      "evento numero 3",
      "A3234",
      "18",
      "11",
      "2024"
    );
    test_calendar.addEvento(evento3);
    const calendar_events = test_calendar.getEventos();
    const expected_events = [evento1, evento3];
    expect(calendar_events).toEqual(expected_events);
  });

  test("Debería devolver vacío si no hay eventos después de eliminar", () => {
    test_calendar.addEvento(evento2);
    test_calendar.removeEvento(evento2);
    const fecha_evento2 = evento2.getFecha();
    expect(test_calendar.getEventosPorFecha(fecha_evento2)).toEqual([]);
    expect(test_calendar.getEventos()).toEqual([evento1]);
  });

  test("Debería agregar un evento a una fecha sin eventos previos", () => {
    const evento3 = new Evento(
      "e3",
      "evento numero 3",
      "A3234",
      "20",
      "11",
      "2024"
    );
    test_calendar.addEvento(evento2);
    test_calendar.addEvento(evento3);
    const expected_events = [evento1, evento2, evento3];
    expect(test_calendar.getEventos()).toEqual(expected_events);
  });

  test("Debería agregar un evento a una fecha nueva no existente en el calendario", () => {
    const evento_nuevo = new Evento(
      "Evento Nuevo",
      "Descripción del evento nuevo",
      "#123456",
      "20",
      "11",
      "2024"
    );

    test_calendar.addEvento(evento_nuevo);
    const eventos_en_fecha = test_calendar.getEventosPorFecha("20/11/2024");

    expect(eventos_en_fecha).toEqual([evento_nuevo]);
  });
});
