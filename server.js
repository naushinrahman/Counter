const express = require('express'); 
const app = express(); 
const port =  process.env.PORT ||3000; 
const path = require('path');
const { spawn } = require('child_process');
const fs = require('fs');

app.use(express.static('public'));

app.listen(port, () => console.log(`server listening on: ${port}`));

app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '/pages/main.html'));
    const pythonProcess = spawn('python', [path.join(__dirname, 'python', 'counter.py')]);

    pythonProcess.on('close', () => {
        fs.readFile(path.join(__dirname, 'counter.txt'), 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).send('An error occurred while reading the counter value.');
            } else {
                const counter = parseInt(data);
                if (!isNaN(counter)) {
                    res.send(`<h1>Page Visits: ${counter}</h1>`);
                } else {
                    res.status(500).send('Counter value is not a valid number.');
                }
            }
        });
    });
});
