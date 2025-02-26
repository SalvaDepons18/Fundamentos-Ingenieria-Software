import { Sistema } from "./Sistema.js";
import { Calendario } from "./Calendario.js";

export const globals = {
  selected_day: null,
  active_user: null,
  system: new Sistema(),
  calendar: new Calendario()
};
