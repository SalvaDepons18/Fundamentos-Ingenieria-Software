import { expect, test, describe, beforeEach } from "@jest/globals";
import { Docente } from "../class/Docente";
import { Grupo } from "../class/Grupo";
import { Planificacion } from "../class/Planificacion";
import { Calendario } from "../class/Calendario";
import { Sistema } from "../class/Sistema";
import { Evento } from "../class/Evento";

describe("Pruebas unitarias de cada función de la clase Sistema", () => {
  let test_system;
  let teacher;
  let group;
  let planification;
  let calendar;
  let event;

  beforeEach(() => {
    teacher = new Docente("Laura");
    group = new Grupo("Nombre Grupo", "Un grado", 10);
    planification = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "MATEMATICA",
      "CG1",
      "CE1",
      "Contenido Estructural",
      ["Meta de Aprendizaje"],
      ["Plan de Aprendizaje"],
      "Notas",
      group,
      "LUNES",
      teacher
    );
    calendar = new Calendario();
    test_system = new Sistema();
    event = new Evento(
      "Un Evento",
      "Un evento increible",
      "0000ff",
      18,
      11,
      2024
    );
  });

  test("Debería obtener la lista de docentes", () => {
    const expected_docentes = [];
    const system_docentes = test_system.getDocentes();
    expect(system_docentes).toEqual(expected_docentes);
  });

  test("Debería poder establecer una lista de docentes", () => {
    const expected_docentes = [teacher];
    test_system.setDocentes(expected_docentes);
    const system_docentes = test_system.getDocentes();
    expect(system_docentes).toEqual(expected_docentes);
  });

  test("Debería poder agregar un docente a la lista", () => {
    test_system.addDocente(teacher);
    const system_docentes = test_system.getDocentes();
    expect(system_docentes).toContain(teacher);
  });

  test("Debería obtener la lista de grupos", () => {
    const expected_grupos = [];
    const system_grupos = test_system.getGrupos();
    expect(system_grupos).toEqual(expected_grupos);
  });

  test("Debería poder establecer una lista de grupos", () => {
    const expected_grupos = [group];
    test_system.setGrupos(expected_grupos);
    const system_grupos = test_system.getGrupos();
    expect(system_grupos).toEqual(expected_grupos);
  });

  test("Debería poder agregar un grupo a la lista", () => {
    test_system.addGrupo(group);
    const system_grupos = test_system.getGrupos();
    expect(system_grupos).toContain(group);
  });

  test("Debería obtener la lista de planificaciones", () => {
    const expected_planificaciones = [];
    const system_planificaciones = test_system.getPlanificaciones();
    expect(system_planificaciones).toEqual(expected_planificaciones);
  });

  test("Debería poder establecer una lista de planificaciones", () => {
    const expected_planificaciones = [planification];
    test_system.setPlanificaciones(expected_planificaciones);
    const system_planificaciones = test_system.getPlanificaciones();
    expect(system_planificaciones).toEqual(expected_planificaciones);
  });

  test("Debería poder agregar una planificación a la lista", () => {
    test_system.addPlanificacion(planification);
    const system_planificaciones = test_system.getPlanificaciones();
    expect(system_planificaciones).toContain(planification);
  });

  test("Debería obtener la lista de calendarios", () => {
    const expected_calendarios = [];
    const system_calendarios = test_system.getCalendarios();
    expect(system_calendarios).toEqual(expected_calendarios);
  });

  test("Debería poder establecer una lista de calendarios", () => {
    const expected_calendarios = [calendar];
    test_system.setCalendarios(expected_calendarios);
    const system_calendarios = test_system.getCalendarios();
    expect(system_calendarios).toEqual(expected_calendarios);
  });

  test("Debería poder agregar un calendario a la lista", () => {
    test_system.addCalendario(calendar);
    const system_calendarios = test_system.getCalendarios();
    expect(system_calendarios).toContain(calendar);
  });

  test("Debería obtener la lista de eventos", () => {
    const expected_eventos = [];
    const system_eventos = test_system.getEventos();
    expect(system_eventos).toEqual(expected_eventos);
  });

  test("Debería poder establecer una lista de eventos", () => {
    const expected_eventos = [event];
    test_system.setEventos(expected_eventos);
    const system_eventos = test_system.getEventos();
    expect(system_eventos).toEqual(expected_eventos);
  });

  test("Debería poder agregar un evento a la lista", () => {
    const expected_eventos = [event];
    test_system.addEvento(event);
    const system_eventos = test_system.getEventos();
    expect(system_eventos).toEqual(expected_eventos);
  });

  /* -------------------------------------------------------------------------- */

  test("Debería eliminar un docente de la lista de docentes", () => {
    test_system.addDocente(teacher);
    test_system.removeDocente(teacher);
    const system_teachers = test_system.getDocentes();
    expect(system_teachers).toEqual([]);
  });

  test("Debería eliminar una planificación de la lista de planificaciones", () => {
    test_system.addPlanificacion(planification);
    test_system.removePlanificacion(planification);
    const system_planificaciones = test_system.getPlanificaciones();
    expect(system_planificaciones).toEqual([]);
  });

  test("Debería modificar una planificación de la lista de planificaciones", () => {
    test_system.addPlanificacion(planification);
    const planAux = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "FISICA",
      "CG2",
      "CE2",
      "Contenido Estructural",
      ["Meta de Aprendizaje"],
      ["Plan de Aprendizaje"],
      "Notas",
      group,
      "LUNES",
      teacher
    );
    test_system.addPlanificacion(planAux);
    expect(test_system.getPlanificaciones()[0].getUnidadCurricular()).toBe(
      "FISICA"
    );
    expect(test_system.getPlanificaciones()[0].getCompetenciaEspecifica()).toBe(
      "CE2"
    );
    expect(test_system.getPlanificaciones()[0].getCompetenciaGeneral()).toBe(
      "CG2"
    );
  });

  test("Deveria devolver una planificacion especifica", () => {
    test_system.addPlanificacion(planification);
    expect(
      test_system.getPlanificacionEspecifica(group, "LUNES", teacher)
    ).toEqual(planification);
  });

  test("Deveria devolver null", () => {
    test_system.addPlanificacion(planification);
    expect(
      test_system.getPlanificacionEspecifica(group, "MARTES", teacher)
    ).toBeNull();
  });

  test("Debería eliminar un grupo de la lista de grupos", () => {
    test_system.addGrupo(group);
    test_system.removeGrupo(group);
    const system_grupos = test_system.getGrupos();
    expect(system_grupos).toEqual([]);
  });

  test("Debería eliminar un calendario de la lista de calendarios", () => {
    test_system.addCalendario(calendar);
    test_system.removeCalendario(calendar);
    const system_calendarios = test_system.getCalendarios();
    expect(system_calendarios).toEqual([]);
  });

  test("No debería eliminar un calendario de la lista de calendarios", () => {
    const calendar2 = new Calendario();
    test_system.addCalendario(calendar2);
    test_system.removeCalendario(calendar);
    const system_calendarios = test_system.getCalendarios();
    expect(system_calendarios).toEqual([calendar2]);
  });

  test("Debería eliminar un evento de la lista de eventos", () => {
    test_system.addEvento(event);
    test_system.removeEvento(event);
    const system_eventos = test_system.getEventos();
    expect(system_eventos).toEqual([]);
  });

  test("No debería eliminar un evento de la lista de eventos", () => {
    const event2 = new Evento(
      "Un Evento2",
      "Un evento increible 2",
      "0000ff",
      11,
      4,
      2024
    );
    test_system.addEvento(event2);
    test_system.removeEvento(event);
    const system_eventos = test_system.getEventos();
    expect(system_eventos).toEqual([event2]);
  });

  test("Debería devolver un grupo por su nombre", () => {
    test_system.addGrupo(group);
    const system_group = test_system.getGroupByName("Nombre Grupo");
    expect(system_group).toEqual(group);
  });

  test("Debería devolver null si el grupo no existe", () => {
    const result = test_system.getGroupByName("Grupo Inexistente");
    expect(result).toBeNull();
  });

  test("Debería no devolver un docente por su nombre", () => {
    const teacher_result = test_system.getDocenteByName("Laura");
    expect(teacher_result).toBeNull();
  });

  test("Debería devolver un docente por su nombre si existe", () => {
    const teacher = new Docente("Laura");
    test_system.addDocente(teacher);
    const result = test_system.getDocenteByName("Laura");
    expect(result).toEqual(teacher);
  });

  test("Debería devolver null si el docente no existe", () => {
    const result = test_system.getDocenteByName("Docente Inexistente");
    expect(result).toBeNull();
  });

  test("Debería agregar un grupo a la lista de grupos del sistema y del docente", () => {
    const group_name = "Grupo de Prueba";
    const group_grade = "Primero";
    const cantA = 20;

    test_system.groupAdd(group_name, group_grade, cantA, teacher);

    const system_groups = test_system.getGrupos();
    expect(system_groups[0]).toEqual(group);

    const teacher_groups = teacher.getGrupos();
    expect(teacher_groups[0]).toEqual(group);
  });

  test("No debería hacer nada si el docente a eliminar no existe", () => {
    test_system.addDocente(new Docente("Carlos"));
    test_system.removeDocente(teacher); //  teacher no está en sistema
    const system_docentes = test_system.getDocentes();
    expect(system_docentes).toHaveLength(1);
  });

  test("No debería hacer nada si la planificación a eliminar no existe", () => {
    const otraPlanificacion = new Planificacion(
      "HUMANISTICO",
      "HISTORIA",
      "CG3",
      "CE3",
      "Contenido",
      ["Meta de Aprendizaje"],
      ["Plan de Aprendizaje"],
      "Notas",
      group,
      "MARTES",
      teacher
    );
    test_system.addPlanificacion(planification);
    test_system.removePlanificacion(otraPlanificacion); // planificación que no existe
    const system_planificaciones = test_system.getPlanificaciones();
    expect(system_planificaciones).toHaveLength(1);
  });

  test("No debería hacer nada si el grupo a eliminar no existe", () => {
    const otroGrupo = new Grupo("otro grupo", "Primero", 15);
    test_system.addGrupo(group);
    test_system.removeGrupo(otroGrupo); // Este grupo no está en el sistema
    const system_grupos = test_system.getGrupos();
    expect(system_grupos).toHaveLength(1);
  });

  test("Debería devolver null si el nombre es parecido pero no exacto", () => {
    test_system.addDocente(teacher);
    const result = test_system.getDocenteByName("Laur");
    expect(result).toBeNull();
  });

  test("Debería dar un error si el docente no es válido", () => {
    expect(() => {
      test_system.groupAdd("Grupo Test", "Primero", 15, null);
    }).toThrow();
  });

  test("Debería reemplazar una planificación existente para el mismo día y docente", () => {
    test_system.addPlanificacion(planification);
    const nuevaPlanificacion = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "FISICA",
      "CG4",
      "CE4",
      "Otro Contenido",
      ["Otra Meta"],
      ["Otro Plan"],
      "Notas",
      group,
      "LUNES", // Mismo día
      teacher // Mismo docente
    );
    test_system.addPlanificacion(nuevaPlanificacion);
    const system_planificaciones = test_system.getPlanificaciones();
    expect(system_planificaciones).toHaveLength(1);
    expect(system_planificaciones[0].getUnidadCurricular()).toBe("FISICA");
  });

  test("Debería dar null ya que no coiciden los nombres", () => {
    test_system.addGrupo(new Grupo("Nombre Grupo", "Primero", 20));
    const result = test_system.getGroupByName("Nombre");
    expect(result).toBeNull();
  });

  test("Debería dar null ya que faltan mayusculas", () => {
    test_system.addGrupo(new Grupo("Nombre Grupo", "Primero", 20));
    const result = test_system.getGroupByName("nombre grupo");
    expect(result).toBeNull();
  });

  test("Debería reemplazar una planificación si día, docente y grupo coinciden", () => {
    test_system.addPlanificacion(planification);
    const nuevaPlanificacion = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "FISICA",
      "CG4",
      "CE4",
      "Otro Contenido",
      ["Otra Meta"],
      ["Otro Plan"],
      "Notas",
      group,
      "LUNES",
      teacher
    );
    test_system.addPlanificacion(nuevaPlanificacion);

    const system_planificaciones = test_system.getPlanificaciones();
    expect(system_planificaciones).toHaveLength(1);
    expect(system_planificaciones[0].getUnidadCurricular()).toBe("FISICA");
  });

  test("no Debería agregar una planificación si no coincide el dia", () => {
    test_system.addPlanificacion(planification);
    const nuevaPlanificacion = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "FISICA",
      "CG4",
      "CE4",
      "Otro Contenido",
      ["Otra Meta"],
      ["Otro Plan"],
      "Notas",
      group,
      "MARTES", // Día diferente
      teacher
    );
    test_system.addPlanificacion(nuevaPlanificacion);

    const system_planificaciones = test_system.getPlanificaciones();
    expect(system_planificaciones).toHaveLength(2);
  });

  test("No debería agregar una planificación si el docente no coincide", () => {
    const otroDocente = new Docente("Carlos");
    test_system.addPlanificacion(planification);
    const nuevaPlanificacion = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "FISICA",
      "CG4",
      "CE4",
      "Otro Contenido",
      ["Otra Meta"],
      ["Otro Plan"],
      "Notas",
      group,
      "LUNES",
      otroDocente // Docente diferente
    );
    test_system.addPlanificacion(nuevaPlanificacion);

    const system_planificaciones = test_system.getPlanificaciones();
    expect(system_planificaciones).toHaveLength(2);
  });

  test("No debería agregar una planificación si el grupo no coincide", () => {
    const otroGrupo = new Grupo("Grupo Diferente", "Primero", 20);
    test_system.addPlanificacion(planification);
    const nuevaPlanificacion = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "FISICA",
      "CG4",
      "CE4",
      "Otro Contenido",
      ["Otra Meta"],
      ["Otro Plan"],
      "Notas",
      otroGrupo, // Grupo diferente
      "LUNES",
      teacher
    );
    test_system.addPlanificacion(nuevaPlanificacion);

    const system_planificaciones = test_system.getPlanificaciones();
    expect(system_planificaciones).toHaveLength(2);
  });
});
