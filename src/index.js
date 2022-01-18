const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'variables.env' });


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {
    console.log('Express server is listening on port 5000');
})

const verifywebhook = require('./verify-webhook');
app.get('/', verifywebhook);

const messageWebhook = require('./message-webhook');
app.post('/', messageWebhook);