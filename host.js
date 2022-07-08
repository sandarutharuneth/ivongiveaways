// const express = require('express');
// const app = express();
// const port = 3000;
// app.listen(port, () => console.log(`Bot running on http://127.0.0.1:${port}`));

const http = require("http");
http.createServer((_, res) => res.end("ivon giveaways online")).listen(8080)