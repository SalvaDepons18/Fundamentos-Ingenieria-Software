import { globals } from "./globals.js";
import { Docente } from "./Docente.js";

import * as Modulo_grupos from "./Modulo_grupos.js";
import * as Modulo_planificacion from "./Modulo_planificacion.js";
import * as Modulo_calendario from "./Modulo_calendario.js";

window.addEventListener("load", start);

// PRE: -
// POS: Inicializa los "observadores" de eventos
function start() {
  cargarDatos();
  Modulo_calendario.configurarCalendario();

  // Observadores para agregar y eliminar grupos
  document
    .getElementById("form_group")
    .addEventListener("submit", (e) => Modulo_grupos.addGroup(e));
  document
    .getElementById("delete_group")
    .addEventListener("click", Modulo_grupos.deleteGroup);

  // Observadores para agregar y eliminar en cada sección de plannificacion
  document
    .getElementById("add_structuralContent")
    .addEventListener("click", () =>
      Modulo_planificacion.addItemInPlanification(
        "structuralContent_modify",
        "ul_structuralContent"
      )
    );
  document
    .getElementById("remove_structuralContent")
    .addEventListener("click", () =>
      Modulo_planificacion.removeItemInPlanification("ul_structuralContent")
    );

  document
    .getElementById("add_learningGoals")
    .addEventListener("click", () =>
      Modulo_planificacion.addItemInPlanification(
        "learningGoals_modify",
        "ul_learningGoals"
      )
    );
  document
    .getElementById("remove_learningGoals")
    .addEventListener("click", () =>
      Modulo_planificacion.removeItemInPlanification("ul_learningGoals")
    );

  document
    .getElementById("add_learningPlans")
    .addEventListener("click", () =>
      Modulo_planificacion.addItemInPlanification(
        "learningPlans_modify",
        "ul_learningPlans"
      )
    );
  document
    .getElementById("remove_learningPlans")
    .addEventListener("click", () =>
      Modulo_planificacion.removeItemInPlanification("ul_learningPlans")
    );

  // Observador para guardar y ver los datos de planificacion
  document
    .getElementById("save_changes_plan")
    .addEventListener("click", Modulo_planificacion.saveChangesPlan);

  document
    .getElementById("view_planification")
    .addEventListener("click", Modulo_planificacion.viewPlans);

  //Observador Eventos calendario
  document
    .getElementById("createEvent")
    .addEventListener("submit", (e) => Modulo_calendario.agregarEvento(e));

  document
    .getElementById("delete_events_day")
    .addEventListener("click", Modulo_calendario.deleteEventsDay);
}

// PRE: -
// POS: Inicializa las clases que necesitamos en el sistema
function cargarDatos() {
  let test_teacher = new Docente("Sonia");
  globals.active_user = test_teacher;
  globals.system.addDocente(test_teacher);
}
