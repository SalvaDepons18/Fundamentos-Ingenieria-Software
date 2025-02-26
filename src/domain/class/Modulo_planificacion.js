import { globals } from "./globals.js";
import { Planificacion } from "./Planificacion.js";

// PRE: -
// POS: Agrega un ítem a la lista específica
export function addItemInPlanification(input_id, ul_id) {
  const input = document.getElementById(input_id);
  const ul = document.getElementById(ul_id);
  const input_value = input.value;

  if (input_value) {
    const li = document.createElement("li");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = ul_id + "_radio";

    li.appendChild(radio);
    li.appendChild(document.createTextNode(" " + input_value));
    ul.appendChild(li);

    input.value = ""; // Limpiar el campo de entrada
  }
}

// PRE: -
// POS: Elimina el ítem seleccionado de la lista específica
export function removeItemInPlanification(ul_id) {
  const items = document.getElementsByName(ul_id + "_radio");
  let selected_item = null;

  // Buscar el elemento seleccionado
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      selected_item = items[i];
      break;
    }
  }

  // Si hay un elemento seleccionado, eliminarlo
  if (selected_item) {
    const item_list = document.getElementById(ul_id);
    item_list.removeChild(selected_item.closest("li"));
  }
}

export function tomarGrupoSeleccionadoEnPlan() {
  // Obtener ul de los grupos
  const planification_group_list = document.getElementById(
    "list-group-planification"
  );

  // Obtener todos los elementos li dentro de la lista
  const items_list = planification_group_list.getElementsByTagName("li");

  // Inicializamos la variable que contendrá el li seleccionado
  let selected_group_list = null;

  // Recorrer cada li para verificar cuál tiene el radio button seleccionado
  for (let i = 0; i < items_list.length; i++) {
    const radio_button = items_list[i].getElementsByTagName("input")[0];
    if (radio_button && radio_button.type === "radio" && radio_button.checked) {
      selected_group_list = items_list[i];
    }
  }

  return selected_group_list;
}

// PRE: -
// POS: Toma los datos de la planificacion la crea y la guarda en la lista de sistema y de docente
export function saveChangesPlan() {
  // Recoger los datos del formulario
  const space = document.getElementById("spaceSelect_modify").value;
  const curricular_unit = document.getElementById("unit_modify").value;
  const general_competence = document.getElementById(
    "generalCompetence_modify"
  ).value;
  const specific_competence = document.getElementById(
    "specificCompetence_modify"
  ).value;

  const notes = document.getElementById("notes_modify").value;

  // Obtener las listas de contenidos estructurales
  let structural_content_list_ul = document.getElementById(
    "ul_structuralContent"
  );

  let structural_content_list = [];
  let structural_content_items =
    structural_content_list_ul.getElementsByTagName("li");
  for (let item of structural_content_items) {
    structural_content_list.push(item.textContent.trim());
  }

  // Obtener las metas de aprendizaje

  let learning_goals_list_ul = document.getElementById("ul_learningGoals");
  let learning_goals_list = [];
  const learning_goals_items =
    learning_goals_list_ul.getElementsByTagName("li");
  for (let item of learning_goals_items) {
    learning_goals_list.push(item.textContent.trim());
  }

  // Obtener los planes de aprendizaje
  let learning_plans_list_ul = document.getElementById("ul_learningPlans");
  let learning_plans_list = [];
  const learning_plans_items =
    learning_plans_list_ul.getElementsByTagName("li");
  for (let item of learning_plans_items) {
    learning_plans_list.push(item.textContent.trim());
  }

  const selected_button = document.getElementById("day_selected");
  const local_selected_day = selected_button.value.trim();

  // Obtener grupo
  const selected_groups_li = tomarGrupoSeleccionadoEnPlan();
  let error_p = document.getElementById("error_message_add_plan");
  if (!selected_groups_li) {
    error_p.textContent =
      "Seleccione grupo. si no exite grupo, vaya a la seccion grupos";
  } else {
    error_p.textContent = "";
    const group_span = selected_groups_li
      .getElementsByTagName("span")[0]
      .textContent.trim();
    let group = globals.system.getGroupByName(group_span.split("-")[1]);
    let plan = new Planificacion(
      space,
      curricular_unit,
      general_competence,
      specific_competence,
      structural_content_list,
      learning_goals_list,
      learning_plans_list,
      notes,
      group,
      local_selected_day,
      globals.active_user
    );

    globals.system.addPlanificacion(plan);
    globals.active_user.addPlanificacion(plan);

    // Limpiar el formulario después de guardar la planificación
    const form = document.getElementById("form_planification");
    form.reset();

    // Limpiar las listas de contenido (si es necesario)
    document.getElementById("ul_structuralContent").innerHTML = "";
    document.getElementById("ul_learningGoals").innerHTML = "";
    document.getElementById("ul_learningPlans").innerHTML = "";
  }
}

// PRE: -
// POS: Muestra la planificación del día y del grupo seleccionado
export function viewPlans() {
  // Limpio lo que habia antes
  document.getElementById("space_view").textContent = "Vacio";
  document.getElementById("unit_view").textContent = "Vacio";
  document.getElementById("generalCompetence_view").textContent = "Vacio";
  document.getElementById("specificCompetence_view").textContent = "Vacio";

  const structural_content_element = document.getElementById(
    "structuralContent_view"
  );
  structural_content_element.innerHTML = ""; // Limpiar lista

  const learning_goals_element = document.getElementById("learningGoals_view");
  learning_goals_element.innerHTML = ""; // Limpiar lista

  const learning_plans_element = document.getElementById("learningPlans_view");
  learning_plans_element.innerHTML = "";

  document.getElementById("notes_view").textContent = "Vacio";

  // Obtener el día
  const selected_button = document.getElementById("day_selected");
  const local_selected_day = selected_button.value.trim();

  const selected_groups_li = tomarGrupoSeleccionadoEnPlan();

  let error_p = document.getElementById("error_message_add_event");
  if (selected_groups_li) {
    // Obtener el primer span dentro del li
    const group_span = selected_groups_li
      .getElementsByTagName("span")[0]
      .textContent.trim();
    let group = globals.system.getGroupByName(group_span.split("-")[1]);
    let plan = globals.system.getPlanificacionEspecifica(
      group,
      local_selected_day,
      globals.active_user
    );

    // Verificar si se encontró la planificación
    if (plan) {
      // Mostrar los atributos de la planificación en el HTML
      document.getElementById("space_view").textContent =
        plan.getEspacio() || "";
      document.getElementById("unit_view").textContent =
        plan.getUnidadCurricular() || "";
      document.getElementById("generalCompetence_view").textContent =
        plan.getCompetenciaGeneral() || "";
      document.getElementById("specificCompetence_view").textContent =
        plan.getCompetenciaEspecifica() || "";

      // Mostrar contenido estructural
      const structural_content_element = document.getElementById(
        "structuralContent_view"
      );
      structural_content_element.innerHTML = ""; // Limpiar lista
      plan.getContenidoEstructural().forEach((contenido) => {
        const li = document.createElement("li");
        li.textContent = contenido;
        structural_content_element.appendChild(li);
      });

      // Mostrar metas de aprendizaje
      const learning_goals_element =
        document.getElementById("learningGoals_view");
      learning_goals_element.innerHTML = ""; // Limpiar lista
      plan.getMetasAprendizaje().forEach((meta) => {
        const li = document.createElement("li");
        li.textContent = meta;
        learning_goals_element.appendChild(li);
      });

      // Mostrar planes de aprendizaje
      const learning_plans_element =
        document.getElementById("learningPlans_view");
      learning_plans_element.innerHTML = ""; // Limpiar lista
      plan.getPlanesAprendizaje().forEach((plan) => {
        const li = document.createElement("li");
        li.textContent = plan;
        learning_plans_element.appendChild(li);
      });

      // Mostrar notas
      document.getElementById("notes_view").textContent = plan.getNota() || "";
    }
  } else {
    error_p.textContent =
      "Seleccione un grupo. Si no existe, vaya a la sección de grupos.";
    return;
  }
}
