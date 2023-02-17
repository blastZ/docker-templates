module.exports = {
  apps: [
    {
      name: "nextjs-app",
      script: "node server.js",
      exec_mode: "fork",
      max_memory_restart: "512M",
      max_restarts: 10,
      restart_delay: 1000,
      args: ["--color"],
      env: {
        NODE_ENV: "production",
        APP_ENV: "production",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        APP_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
