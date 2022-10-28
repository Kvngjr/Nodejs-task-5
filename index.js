const http = require('http')
const fs = require('fs')
const path = require('path')



const server = http.createServer((request, response) => {
    if(request.url === '/'){
        let filePath = path.join(__dirname, 'public', 'Home.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            response.writeHead(200, {'content-Type': 'text/html'})
            response.end(data)
        })
    }
    if(request.url === '/About.html'){
        let filePath = path.join(__dirname, 'public', 'About.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            response.writeHead(200, {'content-Type': 'text/html'})
            response.end(data)
        })
    }
    if(request.url === '/Contact.html'){
        let filePath = path.join(__dirname, 'public', 'Contact.html')
        fs.readFile(filePath, 'utf8', (err, data) => {
            response.writeHead(200, {'content-Type': 'text/html'})
            response.end(data)
        })
    }
})

const port = 4000

server.listen(port, () => {
    console.log(`Server is working on port ${port}`)
})