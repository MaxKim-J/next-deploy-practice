module.exports = {
  apps: [
    {
      name: "maxTutorial",
      script: "./server.js",
      watch: true,
      exec_mode: "cluster",
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
