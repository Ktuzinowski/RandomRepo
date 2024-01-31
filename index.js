const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(__dirname))
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`));
app.get('/hw0/:bla/:blu', (_, res) => {
    const filePath = path.join(__dirname, "hw0.html")
    res.sendFile(filePath)
})
app.get('/hw0', (_, res) => {
    const filePath = path.join(__dirname, "hw0.html")
    res.sendFile(filePath)
})
app.get('/hw0/:blah', (_, res) => {
    const filePath = path.join(__dirname, "hw0.html")
    res.sendFile(filePath)
})