import {validarFormulario} from "../helpers/validarFormulario.js";
import { registrarUsuario } from "./controllers/usuarioController.js";
document.addEventListener("DOMContentLoaded", () => {
  validarFormulario();
  registrarUsuario();
});