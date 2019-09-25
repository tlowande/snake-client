const connect = require('./client')
console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  const handleUserInput = () => {
    stdin.on("data", (input) => {
      if (input === '\u0003') {
        process.exit()
      }
    })
  } 
  handleUserInput()
  stdin.resume();
  
  return stdin;
}

setupInput()

