process.env.NODE_ENV = 'production'
const cluster = require('cluster');
const os = require('os');

const express = require('express');
const http = require('http');

const https = require('https');
const fs = require('fs');
const cert = fs.readFileSync('./data/certif/cert.crt');
const ca = fs.readFileSync('./data/certif/ca.pem');
const key = fs.readFileSync('./data/certif/private.key');

const path = require('path');
const WebSocket = require('ws')

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('message', (worker, msg, handle) => {
    for (const id in cluster.workers) {
      cluster.workers[id].send(msg);
    }
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  const app = express();
  const server = http.createServer(app);
  const httpsserver = https.createServer({
    key,
    cert,
    ca
  }, app)
    
  app.use(express.json({limit: '1mb'}))
  
  // Client static files
  app.use(express.static(path.join(__dirname, '../client')))
  app.use('/{*all}', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
  })

  httpsserver.listen(443, '0.0.0.0', () => {
      app.ws = new WebSocket.Server({
        server: httpsserver
      })
    console.log('listening on *:443');
  })
  
  server.listen(80, () => {
    app.ws = new WebSocket.Server({
      server: server
    })
    console.log('listening on *:80');
  });
}
