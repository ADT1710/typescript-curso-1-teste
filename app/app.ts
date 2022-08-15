import {CadastroController} from "./controllers/cadastro-controller.js";

const controller = new CadastroController();
const form = document.querySelector("#form");

form.addEventListener('submit', evt => {
   event.preventDefault();
   controller.adiciona();
});