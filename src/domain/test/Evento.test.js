import { expect, test, describe, beforeEach } from "@jest/globals";
import { Evento } from "../class/Evento";

describe("Tests de la clase Evento", () => {
  let test_event;

  beforeEach(() => {
    test_event = new Evento(
      "Nombre Evento",
      "Descripcion evento",
      "#FF5732",
      "25",
      "06",
      "2024"
    );
  });

  test("Debería devolver el nombre del evento", () => {
    const event_name = test_event.getNombre();
    const expected_name = "Nombre Evento";
    expect(event_name).toBe(expected_name);
  });

  test("Debería devolver la descripción del evento", () => {
    const event_description = test_event.getDescripcion();
    const expected_description = "Descripcion evento";
    expect(event_description).toBe(expected_description);
  });

  test("Debería devolver el color del evento", () => {
    const event_color = test_event.getColor();
    const expected_color = "#FF5732";
    expect(event_color).toBe(expected_color);
  });

  test("Debería devolver la fecha del evento en formato (DD/MM/AAAA)", () => {
    const event_date = test_event.getFecha();
    const expected_date = "25/06/2024";
    expect(event_date).toBe(expected_date);
  });

  test("Debería asignar un nuevo nombre al evento", () => {
    test_event.setNombre("Nuevo Nombre Evento");
    const updated_name = test_event.getNombre();
    expect(updated_name).toBe("Nuevo Nombre Evento");
  });

  test("Debería asignar una nueva descripción al evento", () => {
    test_event.setDescripcion("Nueva Descripcion evento");
    const updated_description = test_event.getDescripcion();
    expect(updated_description).toBe("Nueva Descripcion evento");
  });

  test("Debería asignar un nuevo color al evento", () => {
    test_event.setColor("#00FF00");
    const updated_color = test_event.getColor();
    expect(updated_color).toBe("#00FF00");
  });

  test("Debería asignar una nueva fecha al evento en formato (DD/MM/AAAA)", () => {
    test_event.setFecha("12", "07", "2025");
    const updated_date = test_event.getFecha();
    expect(updated_date).toBe("12/07/2025");
  });
});
