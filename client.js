const net = require('net')
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
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
    conn.write('Name: T4T')});


  return conn;
}



module.exports = connect