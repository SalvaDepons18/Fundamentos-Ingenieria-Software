import { globals } from "./globals.js";

// PRE: -
// POS: Agrega los datos del form, a un nuevo grupo. Si no existe se agrega a la lista html.
export function addGroup(e) {
  e.preventDefault();
  const group_name = document.getElementById("name_group").value;
  const group_grade = document.getElementById("grade_group").value;
  const students_count = parseInt(document.getElementById("cant_group").value);

  const form = document.getElementById("form_group");
  if (form.reportValidity()) {
    globals.system.groupAdd(
      group_name,
      group_grade,
      students_count,
      globals.active_user
    );
    const new_group = globals.system.getGroupByName(group_name);
    addGroupToLists(new_group);
    form.reset();
  }
}

//PRE: recibe un grupo
//POS: lo agrega a la lista de grupos en el html
export function addGroupToLists(a_group) {
  const group_list = document.getElementById("list-group");
  const planification_group_list = document.getElementById(
    "list-group-planification"
  );

  const li = document.createElement("li");
  const li_plan = document.createElement("li");
  li.className = "list-group-item d-flex align-items-center";
  li_plan.className = "list-group-planification-item d-flex align-items-center";

  const input = document.createElement("input");
  const input_plan = document.createElement("input");
  input.type = "radio";
  input_plan.type = "radio";
  input.className = "form-check-input me-3";
  input_plan.className = "form-check-input me-3";
  const id_num = globals.system.getGrupos().length;

  input.id = "group_" + id_num + "_list";
  input.name = "group";
  input.value = a_group.getNombre();

  input_plan.id = "planification_group_" + id_num + "_list";
  input_plan.name = "planification_group";
  input_plan.value = a_group.getNombre();

  const span = document.createElement("span");
  const span_plan = document.createElement("span");
  span.id = "group_" + id_num + "_span";
  li_plan.id = "planification_group_" + id_num + "_span";
  span.textContent = a_group.getGrado() + "-" + a_group.getNombre() + "-ORT";
  span_plan.textContent =
    a_group.getGrado() + "-" + a_group.getNombre() + "-ORT";

  li.appendChild(input);
  li.appendChild(span);
  group_list.appendChild(li);

  li_plan.appendChild(input_plan);
  li_plan.appendChild(span_plan);
  planification_group_list.appendChild(li_plan);
}

//PRE: -
//POS: elimina el grupo seleccionado, quitandolo de la lista de grupos de sistema y su docente, ademas lo quita del html
export function deleteGroup() {
  const groups_in_section = document.getElementsByName("group");
  const groups_in_plan = document.getElementsByName("planification_group");
  let txt_content = "";
  let selected_group_in_section = null;
  let selected_group_in_plan = null;

  for (let i = 0; i < groups_in_section.length; i++) {
    if (groups_in_section[i].checked) {
      selected_group_in_section = groups_in_section[i];
      txt_content = groups_in_section[i].textContent;
      break;
    }
  }

  for (let i = 0; i < groups_in_plan.length; i++) {
    if (groups_in_plan[i].textContent == txt_content) {
      selected_group_in_plan = groups_in_plan[i];
    }
    break;
  }

  if (selected_group_in_section) {
    const name_group = selected_group_in_section.value.split("-", 1)[0];
    let group = globals.system.getGroupByName(name_group);
    globals.system.removeGrupo(group);
    globals.active_user.removeGrupo(group);

    const group_list = document.getElementById("list-group");
    group_list.removeChild(selected_group_in_section.closest("li"));

    const group_list_plan = document.getElementById("list-group-planification");
    group_list_plan.removeChild(selected_group_in_plan.closest("li"));
  }
}
