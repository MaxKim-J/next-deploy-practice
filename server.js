const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
console.log(process.env.NODE_ENV);

// Next App importing
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    // express 서버가 모든 요청에 대해 Next에서 작성해놓은 대로 응답함
    const server = express();
    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("localhost:3000");
    });
  })
  .catch((error) => {
    console.error(error.stack);
    process.exit(1);
  });
