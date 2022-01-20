const express = require('express');
const app = express();
require('./src/database/db');
app.use(express.json());
app.use(require('./src/router/planeRouter'))



const PORT = process.env.PORT || 3004;

app.listen(PORT, () =>
{
    console.log('plane Server Running on Port', PORT);
})



