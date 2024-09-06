
import listaNegraController from "./controller/listaNegraController.js";
import carrosController from "./controller/carrosController.js"

export default function AdicionarRotas(servidor){

servidor.use(listaNegraController, carrosController)

}