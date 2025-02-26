import { globals } from "./globals.js";
import { Evento } from "./Evento.js";

// PRE: -
// POS: Hace que al hacer click en cualquier dia se cambie la variable globalel dia seleccionado
export function configurarCalendario() {
  const days = document.querySelectorAll(".calendar .day");
  days.forEach((day) => {
    day.addEventListener("click", (e) => seleccionarDia(e));
  });
}

// PRE: -
// POS: Cambia la variable global del dia seleccionado
export function seleccionarDia(e) {
  const day_list = document.getElementById("daysList"); // Seleccionamos el contenedor de los días
  const new_selected_day = e.target;

  // Recorrer todos los días y quitar la clase 'selected' de todos
  const days = day_list.children; // Obtenemos todos los elementos <li> hijos de daysList
  for (let day of days) {
    day.id = ""; // Quitamos la clase 'selected'
  }

  // Agregamos la clase 'selected' al día nuevo seleccionado
  new_selected_day.id = "selected";
  globals.selected_day = new_selected_day;
  // Opcional: Actualizar la lista de eventos para el día seleccionado
  const selected_date = new_selected_day.textContent.trim() + "/11/2024"; //limitacion de nuestro sistema: solo existe noviembre.
  mostrarEventos(selected_date); // Función que actualiza la lista de eventos
}

// PRE: -
// POS: Agrega el evento ingresado al calendario
export function agregarEvento(e) {
  e.preventDefault();
  let error_p = document.getElementById("error_message_add_event");
  if (!globals.selected_day) {
    error_p.textContent =
      "Debe seleccionar un dia para agregar un evento al calendario.";
  } else {
    error_p.textContent = "";
    const name = document.getElementById("nombre_evento").value;
    const description = document.getElementById("descripEvento").value;
    const color = document.getElementById("color_evento").value;

    // Crear evento
    const day = globals.selected_day.textContent.trim();
    const date = `${day}/11/2024`; // Construye la fecha actual
    const event = new Evento(name, description, color, day, "11", "2024");

    // Agregar evento al calendario
    globals.calendar.addEvento(event);

    // Actualizar visualización
    globals.selected_day.style.backgroundColor = color; // Cambiar el color del día seleccionado
    mostrarEventos(date);
  }
}

// PRE: -
// POS: Muestra los eventos del dia seleccionado
export function mostrarEventos(date) {
  const events = globals.calendar.getEventosPorFecha(date);
  const event_details = document.getElementById("eventDetails");
  // Verificamos si hay eventos para el día seleccionado
  let content = "";

  // Si hay eventos, los recorremos uno por uno
  if (events.length > 0) {
    for (let i = 0; i < events.length; i++) {
      let event = events[i];
      content +=
        "<li>" + event.getNombre() + ": " + event.getDescripcion() + "</li>";
    }
  } else {
    // Si no hay eventos, mostramos un mensaje
    content = "<p>No hay eventos para este día.</p>";
  }

  // Actualizamos el contenido del div de detalles de eventos
  event_details.innerHTML =
    "<h5>Eventos del día seleccionado:</h5><ul>" + content + "</ul>";
}

// PRE: -
// POS: Elimina los eventos del dia seleccionado
export function deleteEventsDay() {
  if (globals.selected_day) {
    const day = globals.selected_day.textContent.trim();
    const date = `${day}/11/2024`; // Construye la fecha actual
    const events = globals.calendar.getEventosPorFecha(date);
    for (let i = 0; i < events.length; i++) {
      globals.calendar.removeEvento(events[i]);
    }
    globals.selected_day.style.backgroundColor = "white";
    mostrarEventos(date);
  }
}
