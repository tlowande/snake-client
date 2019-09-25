const stdin = process.stdin;

stdin.setRawMode(true);

stdin.setEncoding('utf8');

let intervalId;
let nextId;

const handleUserInput = (conn, input) => {
    if (input === '\u0003') {
      process.exit()
    } 
    if (input === 'w') {
      nextId = setInterval(() => conn.write('Move: up'),100);
      clearInterval(intervalId);
      intervalId = nextId;
    }
    if (input === 'a') {
      nextId = setInterval(() => conn.write('Move: left'),100);
      clearInterval(intervalId);
      intervalId = nextId;
    }
    if (input === 'd') {
      nextId = setInterval(() => conn.write('Move: right'),100);
      clearInterval(intervalId);
      intervalId = nextId;
    }
    if (input === 'x') {
      nextId = setInterval(() => conn.write('Move: down'),100);
      clearInterval(intervalId);
      intervalId = nextId;
    }
    if (input === 'h') {
      conn.write('Say: this is painful');
    }
  }

const setupInput = function(conn) {

  stdin.on('data', (data) => handleUserInput(conn, data))
  stdin.resume();
  
  return stdin;
}



module.exports = setupInput

