import { expect, test, describe, beforeEach } from "@jest/globals";
import { Director } from "../class/Director";

describe("Tests de la clase Director: ", () => {
  let test_director;

  beforeEach(() => {
    test_director = new Director("Nombre Director");
  });

  test("Deberia devolver el nombre del Director", () => {
    const director_name = test_director.getNombre();
    const expected_name = "Nombre Director";
    expect(director_name).toBe(expected_name);
  });

  test("Deberia asignar el nombre del Director", () => {
    const new_name = "Nuevo Nombre Director";
    test_director.setNombre(new_name);
    expect(test_director.getNombre()).toBe(new_name);
  });
});
