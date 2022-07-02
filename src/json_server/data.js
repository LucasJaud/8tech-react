const JsonServer = require('json-server');
const server = JsonServer.create();
const router = JsonServer.router('data.json');
const middlewares = JsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3001,() =>{
    console.log('json server is running ');
})