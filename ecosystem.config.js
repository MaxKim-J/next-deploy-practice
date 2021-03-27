module.exports = {
  apps: [
    {
      name: "nextjs",
      script: "./server.js",
      watch: true,
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
