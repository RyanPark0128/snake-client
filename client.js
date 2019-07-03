const net = require('net');
const { IP, PORT } = require('./constants')
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Successfully connected to server');
    conn.write('Name: BBC')
    });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
    });    
  return conn;
}

module.exports = connect;