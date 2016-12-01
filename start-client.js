const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'learnMernClient', shell: true };
require('child_process').spawn('npm', args, opts);
