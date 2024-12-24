import express from "express"
import { arcMController, nayaWebMS, sparshmsController, sparshrecController } from "../controllers/WebMSController.js"

const webmrouter = express.Router()

webmrouter.post('/nutansand', nayaWebMS)
webmrouter.get('/sands', sparshmsController)
webmrouter.post('/arc', arcMController)
webmrouter.get(`/grc:v`, sparshrecController)

export default webmrouter