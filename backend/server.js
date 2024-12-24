import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import colors from 'colors'
import connectDb from './config/db.js'
import webmrouter from './routes/Webm.js'
import weburouter from './routes/Webu.js'
import cors from 'cors'

const app = express()

dotenv.config()
app.use(cors(
    {
        origin: ["https://codebuddy1earner.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
));

connectDb()
app.use(express.json())

app.use('/api/v1/webm', webmrouter)
app.use('/api/v1/webu', weburouter)

app.listen(process.env.PORT, () => {
})
