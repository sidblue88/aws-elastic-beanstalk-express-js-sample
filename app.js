const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! - V2(This is a New Commit Which Will Trigger the Pipeline)'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
