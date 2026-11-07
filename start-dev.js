import { spawn } from "child_process";

console.log("==================================================");
console.log(" Memulai Jumo Mobil (MERN Stack Dev Environment)");
console.log("==================================================");

// Spawn backend
const backend = spawn("node", ["server.js"], {
  cwd: "./backend",
  shell: true,
  stdio: "inherit"
});

// Spawn frontend Vite
const frontend = spawn("npm", ["run", "dev"], {
  cwd: "./frontend",
  shell: true,
  stdio: "inherit"
});

const cleanup = () => {
  console.log("\nMematikan server...");
  backend.kill();
  frontend.kill();
  process.exit();
};

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
