import { expect, test, describe, beforeEach } from "@jest/globals";
import { Calendario } from "../class/Calendario";
import { Docente } from "../class/Docente";
import { Director } from "../class/Director";
import { Evento } from "../class/Evento";
import { Institucion } from "../class/Institucion";

describe("Tests de la clase Institucion: ", () => {
  let test_intitution;
  let director;
  let evento;
  let calendario;
  let docente;

  beforeEach(() => {
    test_intitution = new Institucion("Nombre Institucion", director, []);
    director = new Director("Nombre Director");
    evento = new Evento(
      "Un Evento",
      "Un evento increible",
      "0000ff",
      18,
      11,
      2024
    );
    calendario = new Calendario([evento]);
    docente = new Docente("Juana");
  });

  test("Deberia devolver el nombre de la Institucion", () => {
    const intitution_name = test_intitution.getNombre();
    const expected_name = "Nombre Institucion";
    expect(intitution_name).toBe(expected_name);
  });

  test("Deberia devolver el nombre de la Institucion", () => {
    const intitution_name = test_intitution.getNombre();
    const expected_name = "Nombre Institucion";
    expect(intitution_name).toBe(expected_name);
  });

  test("Deberia asignar el nombre de la Institucion", () => {
    const new_name = "Nuevo Nombre Institucion";
    test_intitution.setNombre(new_name);
    expect(test_intitution.getNombre()).toBe(new_name);
  });

  test("Deberia devolver el calendario de la Institucion", () => {
    const intitution_calendar = test_intitution.getCalendario();
    const expected_calendar = new Calendario([]);
    expect(intitution_calendar).toEqual(expected_calendar);
  });

  test("Deberia asignar el calendario de la Institucion", () => {
    const new_calendar = new Calendario([evento]);
    test_intitution.setCalendario(calendario);
    expect(test_intitution.getCalendario()).toEqual(new_calendar);
  });

  test("Deberia devolver la lista de docentes de la Institucion", () => {
    const intitution_docentes = test_intitution.getDocentes();
    const expected_calendar = [];
    expect(intitution_docentes).toEqual(expected_calendar);
  });

  test("Deberia asignar la lista de docentes de la Institucion", () => {
    const new_docentes = [docente];
    test_intitution.setDocentes([docente]);
    expect(test_intitution.getDocentes()).toEqual(new_docentes);
  });

  test("Deberia devolver el director de la Institucion", () => {
    const intitution_director = test_intitution.getDirector();
    const expected_director = director;
    expect(intitution_director).toEqual(expected_director);
  });

  test("Deberia asignar el director de la Institucion", () => {
    const new_director = new Director("Nuevo Director");
    test_intitution.setDirector(new_director);
    expect(test_intitution.getDirector()).toEqual(new_director);
  });

  test("Deberia agregar una docente a la institucion", () => {
    test_intitution.addDocente(docente);
    const docente_en_institucion = test_intitution.getDocentes()[0];
    expect(docente).toEqual(docente_en_institucion);
  });

  test("Deberia agregar y eliminar un docente de la institucion ", () => {
    test_intitution.addDocente(docente);
    test_intitution.removeDocente(docente);
    expect(test_intitution.getDocentes()).toEqual([]);
  });

  test("Debería no eliminar un docente que no existe", () => {
    const docenteInexistente = new Docente("Inexistente");
    const docentesIniciales = [docente];
    test_intitution.setDocentes(docentesIniciales);
    test_intitution.removeDocente(docenteInexistente);
    expect(test_intitution.getDocentes()).toEqual(docentesIniciales);
  });

  test("Debería vacio", () => {
    const test_intitution2 = new Institucion(
      "Nombre Institucion",
      director,
      docente
    );
    const expected_docente = docente;
    const test_docentes = test_intitution2.getDocentes();
    expect(test_docentes).toEqual(expected_docente);
  });

  test("Crear Institucion con lista de docentes", () => {
    const docente2 = new Docente("Carlos");
    const docente3 = new Docente("Pedro");
    const test_intitution2 = new Institucion("Nombre Institucion 2", director, [
      docente,
      docente2,
      docente3
    ]);
    const expected_docentes = [docente, docente2, docente3];
    const test_docentes = test_intitution2.getDocentes();
    expect(test_docentes).toEqual(expected_docentes);
  });

  test("Debería inicializar una institución con una lista vacía de docentes", () => {
    const institucionVacia = new Institucion("Institución Vacía", null, []);
    expect(institucionVacia.getDocentes()).toEqual([]);
    expect(institucionVacia.getDirector()).toBeNull();
  });
  test("No debería fallar al intentar eliminar un docente de una lista vacía", () => {
    const institucionVacia = new Institucion("Institución Vacía", director, []);
    institucionVacia.removeDocente(docente);
    expect(institucionVacia.getDocentes()).toEqual([]); // La lista sigue vacía
  });

  test("No debería eliminar un docente que no existe en la lista", () => {
    test_intitution.addDocente(docente); // Lista inicial con un docente
    const docenteInexistente = new Docente("Inexistente");
    test_intitution.removeDocente(docenteInexistente);
    expect(test_intitution.getDocentes()).toEqual([docente]); // Sin cambios
  });

  test("No debería fallar si el director es null", () => {
    const institucionSinDirector = new Institucion(
      "Institución Sin Director",
      null,
      []
    );
    expect(institucionSinDirector.getDirector()).toBeNull();
  });

  test("Debería devolver null si la institución no tiene un director", () => {
    const institucionSinDirector = new Institucion(
      "Institución Sin Director",
      null,
      []
    );
    expect(institucionSinDirector.getDirector()).toBeNull();
  });

  test("Debería inicializar la lista de docentes como vacía por defecto", () => {
    const institucionVacia = new Institucion("Institución Vacia", director);
    expect(institucionVacia.getDocentes()).toEqual([]);
  });

  test("No debería agregar un docente nulo o indefinido", () => {
    test_intitution.addDocente(null);
    expect(test_intitution.getDocentes()).toEqual([]); // No se agregaron docentes inválidos
  });
});
