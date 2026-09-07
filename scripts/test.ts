import { execFileSync } from 'node:child_process';

execFileSync('npx', ['cucumber-js', '--config', 'cucumber.js'], { stdio: 'inherit', shell: true });
