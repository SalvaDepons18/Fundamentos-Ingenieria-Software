import { expect, test, describe, beforeEach } from "@jest/globals";
import { Docente } from "../class/Docente";
import { Grupo } from "../class/Grupo";
import { Planificacion } from "../class/Planificacion";

describe("Tests de la clase Docente: ", () => {
  let test_teacher;
  let grupo;
  let planificacion;

  beforeEach(() => {
    test_teacher = new Docente("Nombre Docente");
    grupo = new Grupo("Nombre Grupo", "Primer Grado", 15);
    planificacion = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "MATEMATICA",
      "CG1",
      "CE1",
      "Contenido Estructural",
      ["Meta de Aprendizaje"],
      ["Plan de Aprendizaje"],
      "Notas",
      grupo,
      "VIERNES"
    );
  });

  test("Deberia devolver el nombre del Docente", () => {
    const teacher_name = test_teacher.getNombre();
    const expected_name = "Nombre Docente";
    expect(teacher_name).toBe(expected_name);
  });

  test("Deberia asignar el nombre del Docente", () => {
    const new_name = "Nuevo Nombre Docente";
    test_teacher.setNombre(new_name);
    expect(test_teacher.getNombre()).toBe(new_name);
  });

  test("Deberia devolver la lista de grupos", () => {
    const grupos_teacher = test_teacher.getGrupos();
    const expected_grupos = [];
    expect(grupos_teacher).toEqual(expected_grupos);
  });

  test("Deberia asignar la lista de grupos", () => {
    const grupos = [grupo];
    test_teacher.setGrupos([grupo]);
    expect(test_teacher.getGrupos()).toEqual(grupos);
  });

  test("Deberia devolver la lista de planificaciones", () => {
    const planficaciones_teacher = test_teacher.getPlanificacion();
    const expected_planficaciones = [];
    expect(planficaciones_teacher).toEqual(expected_planficaciones);
  });

  test("Deberia asignar la lista de planificaciones", () => {
    const planficaciones = [planificacion];
    test_teacher.setPlanificacion([planificacion]);
    expect(test_teacher.getPlanificacion()).toEqual(planficaciones);
  });

  test("Deberia agregar un grupo al docente ", () => {
    test_teacher.addGrupo(grupo);
    const grupo_teacher = test_teacher.getGrupos()[0];
    expect(grupo).toEqual(grupo_teacher);
  });

  test("Deberia agregar y eliminar un grupo del docente ", () => {
    test_teacher.addGrupo(grupo);
    test_teacher.removeGrupo(grupo);
    expect(test_teacher.getGrupos()).toEqual([]);
  });

  test("Debería no eliminar un grupo que no existe", () => {
    test_teacher.addGrupo(grupo);
    const random_group = new Grupo("Grupo Cualquiera", "Nivel Cualquiera", 0);
    test_teacher.removeGrupo(random_group);
    expect(test_teacher.getGrupos()).toEqual([grupo]);
  });

  test("Deberia agregar una planifiacion al docente ", () => {
    test_teacher.addPlanificacion(planificacion);
    const planificacion_teacher = test_teacher.getPlanificacion()[0];
    expect(planificacion).toEqual(planificacion_teacher);
  });

  test("Deberia agregar y eliminar una planificacion del docente ", () => {
    test_teacher.addPlanificacion(planificacion);
    test_teacher.removePlanificacion(planificacion);
    expect(test_teacher.getPlanificacion()).toEqual([]);
  });

  test("Deberia agregar y eliminar varias planificacion del docente ", () => {
    const planificacion2 = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "MATEMATICA",
      "CG1",
      "CE1",
      "Contenido Estructural",
      ["Meta de Aprendizaje"],
      ["Plan de Aprendizaje"],
      "Notas",
      grupo,
      "MARTES"
    );
    const planificacion3 = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "MATEMATICA",
      "CG1",
      "CE1",
      "Contenido Estructural",
      ["Meta de Aprendizaje"],
      ["Plan de Aprendizaje"],
      "Notas",
      grupo,
      "VIERNES"
    );
    const planificacion4 = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "MATEMATICA",
      "CG1",
      "CE1",
      "Contenido Estructural",
      ["Meta de Aprendizaje"],
      ["Plan de Aprendizaje"],
      "Notas",
      grupo,
      "JUEVES"
    );
    test_teacher.addPlanificacion(planificacion);
    test_teacher.addPlanificacion(planificacion2);
    test_teacher.addPlanificacion(planificacion3);
    test_teacher.addPlanificacion(planificacion4);
    test_teacher.removePlanificacion(planificacion);
    test_teacher.removePlanificacion(planificacion3);
    expect(test_teacher.getPlanificacion()).toEqual([
      planificacion2,
      planificacion4
    ]);
  });

  test("Deberia remplazar la planificacion", () => {
    test_teacher.addPlanificacion(planificacion);
    const planAux = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "FISICA",
      "CG2",
      "CE2",
      "Contenido Estructural",
      ["Meta de Aprendizaje"],
      ["Plan de Aprendizaje"],
      "Notas",
      grupo,
      "VIERNES"
    );
    test_teacher.addPlanificacion(planAux);
    expect(test_teacher.getPlanificacion()[0].getUnidadCurricular()).toBe(
      "FISICA"
    );
    expect(test_teacher.getPlanificacion()[0].getCompetenciaEspecifica()).toBe(
      "CE2"
    );
    expect(test_teacher.getPlanificacion()[0].getCompetenciaGeneral()).toBe(
      "CG2"
    );
  });

  test("Debería agregar una nueva planificación cuando no hay coincidencias", () => {
    const group2 = new Grupo("grupo numero 2", "segundo", 24);
    const otraPlanificacion = new Planificacion(
      "HUMANIDADES",
      "LENGUAJE",
      "CG3",
      "CE3",
      "Otro Contenido",
      ["Otra Meta"],
      ["Otro Plan"],
      "Otras Notas",
      group2,
      "MARTES"
    );

    test_teacher.addPlanificacion(planificacion);
    test_teacher.addPlanificacion(otraPlanificacion);

    expect(test_teacher.getPlanificacion()[0]).toEqual(planificacion);
    expect(test_teacher.getPlanificacion()[1]).toEqual(otraPlanificacion);
  });

  test("No debería fallar al intentar eliminar una planificación de una lista vacía", () => {
    test_teacher.removePlanificacion(planificacion);
    expect(test_teacher.getPlanificacion()).toEqual([]);
  });
});
