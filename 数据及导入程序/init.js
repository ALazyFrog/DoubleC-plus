const execSync = require('child_process').execSync;
const output = execSync('python init.py')
console.log('sync: ' + output.toString())
console.log('over')