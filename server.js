import { createServer } from 'node:http'

const server = createServer((request, response) => {
    response.end('')
})

server.listen(3333)