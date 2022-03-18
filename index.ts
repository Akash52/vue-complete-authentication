import express from 'express'
import router from './src/Routes/routes'

const app = express()

const PORT = process.env.PORT || 5000

//express.json() is a middleware that parses the incoming request body and exposes it on req.body
app.use(express.json())

app.use('/', router)

app.listen(5000, () => {
  console.log(`Server started on port ${PORT} mode ${process.env.NODE_ENV}`)
})
