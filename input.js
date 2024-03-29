
let connection;


const handleUserInput = function(stdin) {
    stdin.on('data', (key) => {
        setInterval(function() {connection.write("Say: Nice,Hard,Big")}, 5000)
        if (key === '\u0003') {
            process.exit();
        }
        if (key === '\u0077') {
            connection.write("Move: up")
        }
        if (key === '\u0061') {
            connection.write("Move: left")
        }
        if (key === '\u0073') {
            connection.write("Move: down")
        }
        if (key === '\u0064') {
            connection.write("Move: right")
        }

    });
}

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    handleUserInput(stdin)
    return stdin;
}

module.exports = setupInput;