import express, { Request, Response } from 'express'
import { randomBytes } from 'crypto'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

const PORT = 4000

interface Post {
  id: string
  title: string
}

const posts: Record<string, Post> = {}

app.get('/posts', (req: Request, res: Response) => {
  res.send(posts)
})

app.post('/posts', (req: Request, res: Response) => {
  const id = randomBytes(4).toString('hex')
  const { title } = req.body
  posts[id] = {
    id,
    title,
  }
  res.status(201).send(posts[id])
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
