const { spawn } = require('child_process');
const pyProg = spawn('python3', ['-c', 'import sys; print(2 + 2)']);

function myFunc() {
  pyProg.stdout.on('data', function(data) {
    process.stdout.write(data.toString());
});
  pyProg.stderr.on('data', (data) => {
    console.error(`Python3 Error: ${data}`);
  });
  pyProg.on('close', (code) => {
    if (code !== 0) {
        console.log(`Python3 process exited with code ${code}`);
    }
});
}
myFunc()