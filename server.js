const express = require('express'); 
const app = express(); 
const port =  process.env.PORT ||3000; 
const path = require('path');

app.use(express.static('public'));

app.listen(port, () => console.log(`server listening on: ${port}`));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/main.html'));
});

const { spawn } = require('child_process');

app.get('/python-data', (req, res) => {
    const pythonProcess = spawn('python', ['/python/counter.py']);

    pythonProcess.stdout.on('data', (data) => {
        const counterValue = parseInt(data.toString()); // Parse the counter value from the Python script output
        console.log(`Counter value received from Python script: ${counterValue}`);
        res.send(`Counter value: ${counterValue}`); // Send the counter value as response
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Error from Python script: ${data}`);
        res.status(500).send('An error occurred while executing the Python script.');
    });
});
