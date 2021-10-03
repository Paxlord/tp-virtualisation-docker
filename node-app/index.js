const app = require('express')();

const PORT = 8080;

app.get('/', (_, res) => {
    res.send('Hello world');
});

app.listen(PORT, () => {
    console.log("Listening on 8080...");
});