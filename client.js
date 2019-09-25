const net = require('net')
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    if(net.Socket) {
      console.log('Successfully connected to game server');
    }
    conn.write('Name: T4T');

    // setInterval(() => setTimeout(() => {conn.write(/*'Move: up'*/)}, 50),60)
    
    
  });


  return conn;
}
//,,'Move: down','Move: left', 'Move: right'


module.exports = connect