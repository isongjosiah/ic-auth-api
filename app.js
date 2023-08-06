
import Config from "./config/config.js"
import { config as dotenvConfig}  from "dotenv"
import http from 'http'
dotenvConfig()


var config = new(Config)
const server = http.createServer((request, res) => {
    console.log("inside function")
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({
        data: 'Hello World!'
    }))
});

// server.on("/", (request, res) => {
//     console.log("inside function")
//     res.writeHead(200, {'Content-Type': 'application/json'})
//     res.end(JSON.stringify({
//         data: 'Hello World!'
//     }))
// })

server.listen(config.port)
