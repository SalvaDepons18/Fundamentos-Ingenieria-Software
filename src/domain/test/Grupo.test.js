import { expect, test, describe, beforeEach } from "@jest/globals";
import { Grupo } from "../class/Grupo";

describe("Tests de la clase Grupos: ", () => {
  let test_gruop;

  beforeEach(() => {
    test_gruop = new Grupo("Nombre Grupo", "Primer Grado", 15);
  });

  test("Deberia devolver el nombre del grupo", () => {
    const group_name = test_gruop.getNombre();
    const expected_name = "Nombre Grupo";
    expect(group_name).toBe(expected_name);
  });

  test("Deberia devolver el grado del grupo", () => {
    const grade = test_gruop.getGrado();
    const expected_grade = "Primer Grado";
    expect(grade).toBe(expected_grade);
  });

  test("Deberia devolver la cantidad de alumnos", () => {
    const group_students_count = test_gruop.getCantidadAlumnos();
    const expected_students_count = 15;
    expect(group_students_count).toBe(expected_students_count);
  });

  test("Deberia asignar el nombre del grupo", () => {
    const new_name = "Nuevo Nombre Grupo";
    test_gruop.setNombre(new_name);
    expect(test_gruop.getNombre()).toBe(new_name);
  });

  test("Deberia asignar el grado del grupo", () => {
    const new_grade = "Segundo Grado";
    test_gruop.setGrado(new_grade);
    expect(test_gruop.getGrado()).toBe(new_grade);
  });

  test("Deberia asignar la cantidad de alumnos", () => {
    const new_students_count = 20;
    test_gruop.setCantidadAlumnos(new_students_count);
    expect(test_gruop.getCantidadAlumnos()).toBe(new_students_count);
  });
});
