module.exports = {
  apps: [
    {
      name: "nextjs",
      script: "./server.js",
      watch: true,
      interpreter: "/home/ubuntu/.nvm/versions/node/v8.11.3/bin/node",
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
