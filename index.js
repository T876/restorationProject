const express = require('express');
const app = express();

app.listen(443);

app.use(express.static('public'));