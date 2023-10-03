import express, { Request, Response } from 'express'
import { randomBytes } from 'crypto'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

const PORT = 4001

app.get('/posts/:id/comments', (req: Request, res: Response) => {
    
})

app.get('/posts/:id/comments', (req: Request, res: Response) => {})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
