const { spawn } = require('child_process');
const pyProg = spawn('python3', ['-c', 'import sys; print(2 + 2)']);

function myFunc() {
  pyProg.stdout.on('data', function(data) {
    console.log(data.toString());
});
}
myFunc()