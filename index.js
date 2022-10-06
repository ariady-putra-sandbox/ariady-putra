const { env } = require('process');
const express = require('express');
const app     = express();
const server  = app.listen(env.HEROKU && env.PORT || 55555, () => {});

const path = require('path');
const frontendBuild = './build';
app.use(express.static(path.resolve(__dirname, frontendBuild)));

app.get('*', function(req, rsp) {
  rsp.sendFile(path.resolve(__dirname, frontendBuild, 'index.html'));
});

