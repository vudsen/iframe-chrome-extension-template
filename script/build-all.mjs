import child_process from "node:child_process"
import * as fs from "node:fs"


child_process.execSync('vite build --config script/vite/script.config.ts', {
  stdio: 'inherit',
})

child_process.execSync('vite build --config script/vite/pages.config.ts', {
  stdio: 'inherit',
})
