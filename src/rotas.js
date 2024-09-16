import userController from "./controller/userController.js"

export default function AdicionarRotas(servidor){

servidor.use(userController)

}