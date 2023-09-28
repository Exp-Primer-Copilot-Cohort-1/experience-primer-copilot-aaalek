// Create web server
// Usage: http://localhost:3000/comments

const express = require('express');
const app = express();
const port = 3000;

const comments = [
    { name: 'John', message: 'Hello!' },
    { name: 'Mary', message: 'Hi!' },
    { name: 'Joe', message: 'Howdy!' }
];

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));