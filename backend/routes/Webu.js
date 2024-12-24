import express from "express"
import { ghusoController, judoController } from "../controllers/WebUSController.js"

const weburouter = express.Router()

weburouter.post('/panjiikaranam', judoController)
weburouter.post('/pravesha', ghusoController)

export default weburouter