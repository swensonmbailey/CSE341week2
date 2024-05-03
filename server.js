const express = require('express');
const app = epxress();

app.use('/', require('./routes'));

const port = 8080;

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 8080));
});