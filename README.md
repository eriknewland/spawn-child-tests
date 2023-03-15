# spawn-child-tests
### template for executing python3 in nodejs

```javascript
// import spawn module
const { spawn } = require('child_process');
// create a process using python3
// -c denotes command execution rather than file execution
// second arg: your script
const pyProg = spawn('python3', ['-c', 'import sys; print(2 + 2)']);

function myFunc() {
  // Listen for any data coming from the Python script
  pyProg.stdout.on('data', function(data) {
  // Change data from buffer to string and log to console/your logic here
    console.log(data.toString());
});
}
myFunc()
```
