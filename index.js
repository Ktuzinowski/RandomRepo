const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(__dirname));
const submissionId = '65b1b43cab30997971ab6fb9';

app.use((req, res, next) => {
        // Set a custom header
        res.set('X-CSE356', submissionId);
        next();
});

app.get('/hw0/:bla/:blu', (_, res) => {
    const filePath = path.join(__dirname, "hw0.html");
    res.sendFile(filePath)
})
app.get('/hw0', (_, res) => {
    const filePath = path.join(__dirname, "hw0.html");
    res.sendFile(filePath)
})
app.get('/hw0/:blah', (_, res) => {
    const filePath = path.join(__dirname, "hw0.html");
    res.sendFile(filePath)
})

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));


