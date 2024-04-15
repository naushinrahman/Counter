const express = require('express'); // "require" the Express module
const app = express(); // obtain the "app" object
const port =  process.env.PORT ||3000; // assign a port
const path = require('path');

app.use(express.static('public'));

// start the server on the port and output a confirmation to the console
app.listen(port, () => console.log(`server listening on: ${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/main.html'));
});