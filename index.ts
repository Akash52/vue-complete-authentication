import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import router from './src/Routes/routes'

const app = express()

const PORT = process.env.PORT || 5000

//express.json() is a middleware that parses the incoming request body and exposes it on req.body
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)

app.use('/', router)

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/auth')

    console.log(`MongoDB Connected : ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error :`)
    process.exit(1)
  }
}

connectDB()

app.listen(5000, () => {
  console.log(`Server started on port ${PORT} mode ${process.env.NODE_ENV}`)
})
