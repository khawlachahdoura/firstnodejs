// Run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);
const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
