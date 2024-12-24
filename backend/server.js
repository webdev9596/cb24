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

const corsOptions = {
  origin: 'https://codebuddy1earner.vercel.app', // Specify the allowed origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Include credentials like cookies
};

app.use(cors(corsOptions));

connectDb()
app.use(express.json())

app.get('/api/v1/webm/grc:1', (req, res) => {
  res.json({ message: "Route found!" });
});
app.use('/api/v1/webm', webmrouter)
app.use('/api/v1/webu', weburouter)

app.listen(process.env.PORT, () => {
})
