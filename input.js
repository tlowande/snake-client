const stdin = process.stdin;

stdin.setRawMode(true);

stdin.setEncoding('utf8');

let connection;

const handleUserInput = () => {
  stdin.on("data", (input) => {
    if (input === '\u0003') {
      process.exit()
    } 
    if (input === 'w') {
      connection.write('Move: up');
    }
    if (input === 'a') {
      connection.write('Move: down');
    }
    if (input === 's') {
      connection.write('Move: left');
    }
    if (input === 'd') {
      connection.write('Move: right');
    }
  })
} 

const setupInput = function(conn) {
  connection = conn;
  handleUserInput()
  stdin.resume();
  
  return stdin;
}



module.exports = setupInput

