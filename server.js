import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.end('Hello World')
})

server.listen(3333)