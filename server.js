const express = require('express');
const routes = require('./routes'); // not totally necessary but cleans stuff up
const app = express();
const port = process.env.PORT || 3000;

app.use('/', routes); // can also do app.use('/', require('./routes')); if we didnt create a const routes above


app.listen(port, () => {
    console.log(`Example app listening on ${port}`);
});