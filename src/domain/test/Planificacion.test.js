import { expect, test, describe, beforeEach } from "@jest/globals";
import { Planificacion } from "../class/Planificacion";
import { Grupo } from "../class/Grupo";
import { Docente } from "../class/Docente";

describe("Tests de la clase Planificacion: ", () => {
  let test_planification;

  let grupo;
  let docente;

  beforeEach(() => {
    test_planification = new Planificacion(
      "CIENTIFICO-MATEMATICO",
      "MATEMATICA",
      "CG1",
      "CE1",
      "Contenido Estructural",
      ["Meta de Aprendizaje"],
      ["Plan de Aprendizaje"],
      "Notas",
      grupo,
      "LUNES",
      docente
    );
    grupo = new Grupo("Nombre Grupo", "Primer Grado", 15);
    docente = new Docente("Maria");
  });

  test("Deberia devolver el espacio de la Planifiacion", () => {
    const name_planification = test_planification.getEspacio();
    const expected_space = "CIENTIFICO-MATEMATICO";
    expect(name_planification).toBe(expected_space);
  });

  test("Deberia asignar el espacio de la Planifiacion", () => {
    const new_space = "MATEMATICO-CIENTIFICO";
    test_planification.setEspacio(new_space);
    expect(test_planification.getEspacio()).toBe(new_space);
  });

  test("Deberia devolver la unidad curricular de la Planifiacion", () => {
    const UC_planification = test_planification.getUnidadCurricular();
    const expected_UI = "MATEMATICA";
    expect(UC_planification).toBe(expected_UI);
  });

  test("Deberia asignar la unidad curricular de la Planifiacion", () => {
    const new_UI = "FISICA";
    test_planification.setUnidadCurricular(new_UI);
    expect(test_planification.getUnidadCurricular()).toBe(new_UI);
  });

  test("Deberia devolver la competencia general de la Planifiacion", () => {
    const CG_planification = test_planification.getCompetenciaGeneral();
    const expected_CG = "CG1";
    expect(CG_planification).toBe(expected_CG);
  });

  test("Deberia asignar la competencia general de la Planifiacion", () => {
    const new_CG = "CG2";
    test_planification.setCompetenciaGeneral(new_CG);
    expect(test_planification.getCompetenciaGeneral()).toBe(new_CG);
  });

  test("Deberia devolver la competencia especifica de la Planifiacion", () => {
    const CE_planification = test_planification.getCompetenciaEspecifica();
    const expected_CE = "CE1";
    expect(CE_planification).toBe(expected_CE);
  });

  test("Deberia asignar la competencia especifica de la Planifiacion", () => {
    const new_CE = "CE2";
    test_planification.setCompetenciaEspecifica(new_CE);
    expect(test_planification.getCompetenciaEspecifica()).toBe(new_CE);
  });

  test("Deberia devolver el contenido estructural de la Planifiacion", () => {
    const ContEstructural_planification =
      test_planification.getContenidoEstructural();
    const expected_ContEstructural = "Contenido Estructural";
    expect(ContEstructural_planification).toBe(expected_ContEstructural);
  });

  test("Deberia asignar el contenido estructural de la Planifiacion", () => {
    const new_ContEstructural = "Contenido Estructural 2";
    test_planification.setContenidoEstructural(new_ContEstructural);
    expect(test_planification.getContenidoEstructural()).toBe(
      new_ContEstructural
    );
  });

  test("Deberia devolver la lista de metas de apredizaje de la Planifiacion", () => {
    const MA_planification = test_planification.getMetasAprendizaje();
    const expected_MA = ["Meta de Aprendizaje"];
    expect(MA_planification).toEqual(expected_MA);
  });

  test("Deberia asignar la lista de metas de apredizaje de la Planifiacion", () => {
    const new_MA = ["Meta de Aprendizaje 2"];
    test_planification.setMetasAprendizaje(new_MA);
    expect(test_planification.getMetasAprendizaje()).toEqual(new_MA);
  });

  test("Deberia devolver la lista de los planes de apredizaje de la Planifiacion", () => {
    const PA_planification = test_planification.getPlanesAprendizaje();
    const expected_PA = ["Plan de Aprendizaje"];
    expect(PA_planification).toEqual(expected_PA);
  });

  test("Deberia asignar la lista de los planes de apredizaje de la Planifiacion", () => {
    const new_PA = ["Plan de Aprendizaje 2"];
    test_planification.setPlanesAprendizaje(new_PA);
    expect(test_planification.getPlanesAprendizaje()).toEqual(new_PA);
  });

  test("Deberia devolver la nota de la Planifiacion", () => {
    const note_planification = test_planification.getNota();
    const expected_note = "Notas";
    expect(note_planification).toEqual(expected_note);
  });

  test("Deberia asignar la nota la Planifiacion", () => {
    const new_note = ["Nueva nota de la planificacion"];
    test_planification.setNota(new_note);
    expect(test_planification.getNota()).toEqual(new_note);
  });

  test("Deberia devolver el grupo de la Planifiacion", () => {
    const group_planification = test_planification.getGrupo();
    const expected_group = grupo;
    expect(group_planification).toEqual(expected_group);
  });

  test("Deberia asignar el grupo a la Planifiacion", () => {
    const new_group = new Grupo("Prueba nuevo grupo", "quinto de liceo", 44);
    test_planification.setGrupo(new_group);
    expect(test_planification.getGrupo()).toEqual(new_group);
  });

  test("Deberia devolver el dia de la Planifiacion", () => {
    const day_planification = test_planification.getDia();
    const expected_day = "LUNES";
    expect(day_planification).toBe(expected_day);
  });

  test("Deberia asignar el dia a la Planifiacion", () => {
    const new_day = "MARTES";
    test_planification.setDia(new_day);
    expect(test_planification.getDia()).toBe(new_day);
  });

  test("Deberia devolver el docente de la Planifiacion", () => {
    const teacher_planification = test_planification.getDocente();
    const expected_teacher = docente;
    expect(teacher_planification).toEqual(expected_teacher);
  });

  test("Deberia asignar el docente a la Planifiacion", () => {
    const new_teacher = new Docente("Carlos");
    test_planification.setDocente(new_teacher);
    expect(test_planification.getDocente()).toEqual(new_teacher);
  });

  test("Debería asignar valores predeterminados cuando no se pasan argumentos opcionales", () => {
    const partialPlanification = new Planificacion(
      "ESPACIO",
      "UNIDAD",
      "CG",
      "CE",
      undefined,
      undefined,
      undefined,
      "NOTA",
      grupo,
      "VIERNES",
      docente
    );

    expect(partialPlanification.getContenidoEstructural()).toEqual([]);
    expect(partialPlanification.getMetasAprendizaje()).toEqual([]);
    expect(partialPlanification.getPlanesAprendizaje()).toEqual([]);
  });
});
