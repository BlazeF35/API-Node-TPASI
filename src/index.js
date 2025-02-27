const express = require('express');
const router = require('./routes/characterRoute');


const app = express();

app.use(express.json());
app.use('/', router);

app.listen(process.env.PORT || 8081, () => {
    console.log('Server started')
})